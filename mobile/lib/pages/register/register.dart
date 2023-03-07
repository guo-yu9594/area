import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/pages/oauth/oauth_webview.dart';
import 'package:mobile/pages/register/components/register_form.dart';
import 'package:mobile/utils/api/api.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      child: SafeArea(
        child: Row(
          children: [
            Expanded(
              child: Stack(
                alignment: Alignment.center,
                children: [
                  const Align(
                    alignment: Alignment.topCenter,
                    child: Padding(
                      padding: EdgeInsets.all(30),
                      child: Text(
                        'Area',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w400,
                          fontSize: 50,
                          letterSpacing: -4,
                        ),
                      ),
                    ),
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      SingleChildScrollView(
                        child: Column(
                          children: [
                            const Padding(
                              padding: const EdgeInsets.all(50),
                              child: Text(
                                'REGISTER',
                                style: TextStyle(
                                  fontSize: 30,
                                  color: Colors.white,
                                  fontWeight: FontWeight.w200,
                                ),
                              ),
                            ),
                            RegisterForm(
                              formKey: _formKey,
                              emailController: _emailController,
                              passwordController: _passwordController,
                            ),
                            Padding(
                              padding: const EdgeInsets.all(15),
                              child: ElevatedButton(
                                onPressed: () {
                                  Api.getOauthUrl(id: '1').then(
                                    (value) => Navigator.of(context).push(
                                      MaterialPageRoute(
                                        builder: (builder) => OauthWebView(
                                            url: value, service: 'google'),
                                      ),
                                    ),
                                  );
                                },
                                style: ElevatedButton.styleFrom(
                                    backgroundColor:
                                        const Color.fromARGB(255, 0, 133, 255)),
                                child: Text('Register with google'),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(15),
                              child: ElevatedButton(
                                onPressed: () {
                                  if (!_formKey.currentState!.validate())
                                    return;
                                  Api.register(
                                    email: _emailController.text,
                                    password: _passwordController.text,
                                  ).then((value) {
                                    Navigator.of(context).pop();
                                  });
                                },
                                style: ElevatedButton.styleFrom(
                                    backgroundColor:
                                        const Color.fromARGB(255, 0, 133, 255)),
                                child: SizedBox(
                                  height: 70,
                                  width: 40,
                                  child: Center(
                                    child: SvgPicture.asset(
                                      "assets/svg/side_arrow.svg",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
