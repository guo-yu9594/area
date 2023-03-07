import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/loading.dart';
import 'package:mobile/pages/user/components/user_info.dart';
import 'package:mobile/utils/api/api.dart';

class InfoBar extends StatefulWidget {
  const InfoBar({super.key});

  @override
  State<InfoBar> createState() => _InfoBarState();
}

class _InfoBarState extends State<InfoBar> {
  late final Future<UserInfo> _getUserInfo;

  @override
  void initState() {
    super.initState();
    _getUserInfo = Api.getUserInfo();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: _getUserInfo,
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.done) {
          return Loading();
        }
        if (snapshot.hasError) {
          return Text('An error occured');
        }
        return Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.only(right: 30),
              child: SvgPicture.asset(
                "assets/svg/user.svg",
                width: 90,
                height: 90,
                color: Colors.white,
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Here your AREAs',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.w400,
                  ),
                ),
                Text(
                  snapshot.data!.email,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 15,
                    fontWeight: FontWeight.w300,
                  ),
                ),
              ],
            ),
          ],
        );
      },
    );
  }
}
