import 'package:flutter/material.dart';

class AppScaffold extends StatefulWidget {
  const AppScaffold({super.key, required this.child});

  final Widget child;

  @override
  State<AppScaffold> createState() => _AppScaffoldState();
}

class _AppScaffoldState extends State<AppScaffold> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Image(
            image: const AssetImage(
              'assets/images/background.png',
            ),
            opacity: const AlwaysStoppedAnimation(0.25),
            fit: BoxFit.cover,
            width: MediaQuery.of(context).size.width,
          ),
          widget.child,
        ],
      ),
    );
  }
}
