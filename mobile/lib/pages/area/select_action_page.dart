import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/components/info_bar.dart';
import 'package:mobile/components/service_manager.dart';
import 'package:mobile/pages/area/components/area.dart';
import 'package:mobile/pages/area/components/dynamic_form.dart';
import 'package:mobile/pages/area/select_action.dart';

class SelectActionPage extends StatefulWidget {
  const SelectActionPage({
    super.key,
    required this.data,
    required this.type,
    required this.context,
  });
  final ActionClass data;
  final String type;
  final String context;

  @override
  State<SelectActionPage> createState() => _SelectActionPageState();
}

class _SelectActionPageState extends State<SelectActionPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      child: SafeArea(
        child: Row(
          children: [
            Expanded(
              child: Column(
                children: [
                  const Padding(
                    padding: EdgeInsets.only(top: 20, bottom: 40),
                    child: InfoBar(),
                  ),
                  DynamicForm(
                    formKey: _formKey,
                    json: widget.data.extraData,
                    id: widget.data.id,
                    title: widget.data.title,
                    context: widget.context,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 10),
                    child: SizedBox(
                      width: 150,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.of(context).pop();
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
                          child: Text('Back'),
                        ),
                      ),
                    ),
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
