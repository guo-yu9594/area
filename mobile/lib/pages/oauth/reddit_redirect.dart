import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/utils/api/api.dart';

class RedditRedirectPage extends StatefulWidget {
  const RedditRedirectPage({super.key, required this.query});
  final String query;

  @override
  State<RedditRedirectPage> createState() => _RedditRedirectPageState();
}

class _RedditRedirectPageState extends State<RedditRedirectPage> {
  Widget _children = CircularProgressIndicator();

  @override
  Widget build(BuildContext context) {
    return AppScaffold(child: Text('Redirecting'));
  }

  @override
  void initState() {
    super.initState();
    String code = Api.extractAuthorisationCodeFromQuery(widget.query);
    // setRedditAuthorisationCode(code).then((value) => {
    //       setRedditAccessTokenFromCode(code)
    //           .then((value) => {
    //                 setState(() {
    //                   _children = getSuccessChildren(context);
    //                 })
    //               })
    //           .catchError((onError) => {
    //                 setState(() {
    //                   _children = getFailureChildren(context);
    //                 })
    //               })
    //     });
  }
}
