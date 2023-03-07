import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/components/info_bar.dart';
import 'package:mobile/pages/area/components/area.dart';

class ViewActionPage extends StatefulWidget {
  const ViewActionPage({super.key, required this.data});
  final ActionClass data;

  @override
  State<ViewActionPage> createState() => _ViewActionPageState();
}

class _ViewActionPageState extends State<ViewActionPage> {
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
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 30,
                      vertical: 10,
                    ),
                    child: Column(
                      children: [
                        SizedBox(
                          height: 450,
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: const BorderRadius.all(
                                Radius.circular(
                                  20,
                                ),
                              ),
                              border: Border.all(
                                color: Colors.white,
                                width: 1,
                              ),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(20.0),
                              child: Row(
                                children: [
                                  Expanded(
                                    child: Column(
                                      children: [
                                        Padding(
                                          padding:
                                              const EdgeInsets.only(bottom: 20),
                                          child: Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            children: [
                                              Flexible(
                                                child: Padding(
                                                  padding:
                                                      const EdgeInsets.only(
                                                          left: 15),
                                                  child: Text(
                                                    widget.data.id.toString() +
                                                        " - " +
                                                        widget.data.title,
                                                    style: const TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 20,
                                                      fontWeight:
                                                          FontWeight.w300,
                                                    ),
                                                  ),
                                                ),
                                              ),
                                            ],
                                          ),
                                        ),
                                        Text(
                                          widget.data.description,
                                          style: const TextStyle(
                                            color: Colors.white,
                                            fontSize: 14,
                                            fontWeight: FontWeight.w300,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 20),
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
