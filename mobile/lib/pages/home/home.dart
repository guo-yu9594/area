import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:flutter/material.dart';
import 'package:mobile/pages/area/components/area_list.dart';
import 'package:mobile/components/info_bar.dart';
import 'package:mobile/components/service_manager.dart';
import 'package:mobile/pages/area/create_area.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      child: SafeArea(
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const Padding(
                    padding: EdgeInsets.symmetric(vertical: 10),
                    child: InfoBar(),
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    child: ServiceManager(),
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    child: AreaList(),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
