import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/loading.dart';
import 'package:mobile/pages/oauth/oauth_webview.dart';
import 'package:mobile/pages/services/components/service_card.dart';
import 'package:mobile/utils/api/api.dart';

class ServiceManager extends StatefulWidget {
  const ServiceManager({super.key});

  @override
  State<ServiceManager> createState() => _ServiceManagerState();
}

class _ServiceManagerState extends State<ServiceManager> {
  bool _clicked = false;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        setState(() {
          _clicked = !_clicked;
        });
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: Color.fromARGB((255 * 0.1).round(), 255, 255, 255),
        elevation: 0,
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 15),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                SvgPicture.asset(
                  'assets/svg/square.svg',
                  color: Colors.white,
                ),
                const Text(
                  'Services manager',
                  style: TextStyle(
                    fontWeight: FontWeight.w300,
                    fontSize: 17,
                  ),
                ),
                RotationTransition(
                  turns: _clicked
                      ? const AlwaysStoppedAnimation(90 / 360)
                      : const AlwaysStoppedAnimation(180 / 360),
                  child: SvgPicture.asset(
                    'assets/svg/side_arrow.svg',
                    color: Colors.white,
                  ),
                )
              ],
            ),
            if (_clicked) ...{
              FutureBuilder(
                future: Api.getServices(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState != ConnectionState.done) {
                    return Loading();
                  }
                  if (snapshot.hasError) {
                    return Text('An error occured');
                  }
                  return ConstrainedBox(
                    constraints: BoxConstraints(
                      maxHeight: 200,
                    ),
                    child: SingleChildScrollView(
                      child: Column(
                        children: List.generate(
                          snapshot.data!.length ~/ 3,
                          (index) => Padding(
                            padding: const EdgeInsets.only(top: 15),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                              children: [
                                ServiceCard(service: snapshot.data![index * 3]),
                                ServiceCard(
                                    service: snapshot.data![index * 3 + 1]),
                                ServiceCard(
                                    service: snapshot.data![index * 3 + 2]),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              )
            }
          ],
        ),
      ),
    );
  }
}
