import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/utils/api/api.dart';
import 'package:webview_flutter/webview_flutter.dart';

class OauthWebView extends StatefulWidget {
  const OauthWebView({super.key, required this.url, required this.service});

  final String url;
  final String service;

  @override
  State<OauthWebView> createState() => _OauthWebViewState();
}

class _OauthWebViewState extends State<OauthWebView> {
  late WebViewController _controller = WebViewController();

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setUserAgent(
          "Mozilla/5.0 (Linux; Android 10; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36")
      ..setNavigationDelegate(
          NavigationDelegate(onNavigationRequest: (NavigationRequest request) {
        if (request.url.contains('callback=') ||
            request.url.contains('code=') ||
            request.url.contains('error=')) {
          if (widget.service == 'google') {
            Api.oauthCallback(
              url: request.url,
              service: widget.service,
            ).then((value) => Navigator.of(context)
              ..pop()
              ..pop());
          } else {
            Api.oauthCallback(
              url: request.url,
              service: widget.service,
            ).then((value) => Navigator.of(context).pop());
          }
        }
        return NavigationDecision.navigate;
      }))
      ..loadRequest(
        Uri.parse(widget.url),
      );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: WebViewWidget(
          controller: _controller,
        ),
      ),
    );
  }
}
