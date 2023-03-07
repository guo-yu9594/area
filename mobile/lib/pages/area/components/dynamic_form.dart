import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/pages/area/components/area.dart';

class DynamicForm extends StatefulWidget {
  const DynamicForm({
    super.key,
    required this.formKey,
    required this.json,
    required this.id,
    required this.title,
    required this.context,
  });
  final List<MapEntry> json;
  final int id;
  final String title;
  final GlobalKey<FormState>? formKey;
  final String context;

  @override
  State<DynamicForm> createState() => _DynamicFormState();
}

class _DynamicFormState extends State<DynamicForm> {
  final Map<String, dynamic> _jsonResult = {};

  @override
  void initState() {
    super.initState();
    for (final element in widget.json) {
      if (element.key != 'nbFields') {
        _jsonResult.addEntries([MapEntry(element.key, null)]);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: widget.formKey,
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: SingleChildScrollView(
              child: Column(
                  children: widget.json.map((e) {
                if (e.key.toString() == 'nbFields') {
                  return Container();
                }
                return Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                  child: TextFormField(
                    onChanged: (value) {
                      _jsonResult.addEntries([MapEntry(e.key, value)]);
                    },
                    textAlign: TextAlign.center,
                    style: const TextStyle(
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
                      label: Text(
                        e.key,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w300,
                          letterSpacing: 1,
                        ),
                      ),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return "${e.key} is required";
                      }
                      return null;
                    },
                  ),
                );
              }).toList()),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: SizedBox(
              width: 150,
              child: ElevatedButton(
                onPressed: () {
                  if (!widget.formKey!.currentState!.validate()) return;
                  ActionClass _tmp = ActionClass.fromMap(
                      _jsonResult, widget.id, widget.title, widget.json);
                  if (widget.context == 'create') {
                    Navigator.of(context)
                      ..pop()
                      ..pop(_tmp);
                  } else {
                    Navigator.of(context).pop(_tmp);
                  }
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                    side: const BorderSide(
                      color: Colors.white,
                      width: 1,
                    ),
                    borderRadius: BorderRadius.circular(20),
                  ),
                ),
                child: const Padding(
                  padding: EdgeInsets.all(10),
                  child: Text('Save'),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
