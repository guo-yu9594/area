import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/components/loading.dart';
import 'package:mobile/pages/auth_choice/auth_choice.dart';
import 'package:mobile/pages/home/home.dart';
import 'package:mobile/utils/api/api.dart';
import 'package:mobile/utils/storage.dart';

class Init extends StatefulWidget {
  const Init({super.key});

  @override
  State<Init> createState() => _InitState();
}

class _InitState extends State<Init> {
  late final Future<void> _getTokens;

  @override
  void initState() {
    super.initState();
    _getTokens = SecuredStorage.getTokens().then((value) {
      if (value == null) {
        return;
      }
      Api.tokens = value;
    }).catchError((e) {
      log(e.toString());
    });
  }

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      child: FutureBuilder(
        future: _getTokens,
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Loading();
          }
          return ValueListenableBuilder(
            valueListenable: Api.isAuth,
            builder: (context, isAuth, child) {
              if (isAuth) {
                return const Home();
              } else {
                return const AuthChoicePage();
              }
            },
          );
        },
      ),
    );
  }
}
