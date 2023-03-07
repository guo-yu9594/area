import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';

class RegisterForm extends StatelessWidget {
  const RegisterForm({
    super.key,
    this.formKey,
    this.emailController,
    this.passwordController,
  });

  final GlobalKey<FormState>? formKey;
  final TextEditingController? emailController;
  final TextEditingController? passwordController;

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
                    "Email",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w300,
                      letterSpacing: 1,
                    ),
                  ),
                ),
                controller: emailController,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Email is required";
                  }
                  return null;
                },
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(15),
            child: SizedBox(
              width: 300,
              height: 60,
              child: TextFormField(
                controller: passwordController,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Password is required";
                  }
                  return null;
                },
                obscureText: true,
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
                    "Password",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w300,
                      letterSpacing: 1,
                    ),
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(15),
            child: SizedBox(
              width: 300,
              height: 60,
              child: TextFormField(
                textAlign: TextAlign.center,
                obscureText: true,
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
                    "Confirm password",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w300,
                      letterSpacing: 1,
                    ),
                  ),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Confirm password is required";
                  }
                  if (passwordController == null) {
                    return "Password don't match";
                  }
                  if (passwordController!.text.trim() != value.trim()) {
                    return "Password don't match";
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
