import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class EndpointForm extends StatelessWidget {
  const EndpointForm({
    super.key,
    this.formKey,
    this.endpointController,
  });

  final GlobalKey<FormState>? formKey;
  final TextEditingController? endpointController;

  @override
  Widget build(BuildContext context) {
    return Form(
      key: formKey,
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(15),
            child: SizedBox(
              width: 300,
              height: 60,
              child: TextFormField(
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                ),
                decoration: InputDecoration(
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30.0),
                    borderSide: const BorderSide(
                      color: Colors.white,
                      width: 1,
                    ),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30.0),
                    borderSide: const BorderSide(
                      color: Color.fromARGB(255, 0, 133, 255),
                      width: 1.5,
                    ),
                  ),
                  label: const Text(
                    "Endpoint",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w300,
                      letterSpacing: 1,
                    ),
                  ),
                ),
                controller: endpointController,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Endpoint is required";
                  }
                  return null;
                },
              ),
            ),
          ),
        ],
      ),
    );
  }
}
