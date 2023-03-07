import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/pages/endpoint/components/endpoint_form.dart';
import 'package:mobile/utils/api/api.dart';
import 'package:mobile/utils/api/models/routes.dart';

class EndpointPage extends StatefulWidget {
  const EndpointPage({super.key});

  @override
  State<EndpointPage> createState() => _EndpointPageState();
}

class _EndpointPageState extends State<EndpointPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _endpointController = TextEditingController();

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
                                'ENDPOINT',
                                style: TextStyle(
                                  fontSize: 30,
                                  color: Colors.white,
                                  fontWeight: FontWeight.w200,
                                ),
                              ),
                            ),
                            EndpointForm(
                              formKey: _formKey,
                              endpointController: _endpointController,
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top: 30),
                              child: ElevatedButton(
                                onPressed: () {
                                  if (!_formKey.currentState!.validate()) {
                                    return;
                                  }
                                  Api.setRoute(_endpointController.text);
                                  Navigator.of(context).pop();
                                },
                                style: ElevatedButton.styleFrom(
                                    backgroundColor:
                                        const Color.fromARGB(255, 0, 133, 255)),
                                child: const SizedBox(
                                  height: 50,
                                  width: 70,
                                  child: Center(
                                    child: Text('Save'),
                                  ),
                                ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(15),
                              child: ElevatedButton(
                                onPressed: () {
                                  Navigator.of(context).pop();
                                },
                                style: ElevatedButton.styleFrom(
                                    backgroundColor:
                                        const Color.fromARGB(255, 0, 133, 255)),
                                child: const SizedBox(
                                  height: 50,
                                  width: 70,
                                  child: Center(
                                    child: Text('Back'),
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
