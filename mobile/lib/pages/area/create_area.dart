import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/components/info_bar.dart';
import 'package:mobile/components/service_manager.dart';
import 'package:mobile/pages/area/components/area.dart';
import 'package:mobile/pages/area/select_action.dart';
import 'package:mobile/pages/area/select_action_page.dart';
import 'package:mobile/utils/api/api.dart';

class CreateArea extends StatefulWidget {
  CreateArea({super.key, required this.id});

  int id;
  @override
  State<CreateArea> createState() => _CreateAreaState();
}

class _CreateAreaState extends State<CreateArea> {
  ActionClass? _action;
  ActionClass? _reaction;

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
                    padding: EdgeInsets.only(top: 10, bottom: 40),
                    child: InfoBar(),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 30),
                    child: Column(
                      children: [
                        const Padding(
                          padding: EdgeInsets.only(
                            top: 40,
                            bottom: 10,
                          ),
                          child: Text(
                            'Action',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 25,
                              fontWeight: FontWeight.w300,
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 120,
                          child: Card(
                            elevation: 0,
                            margin: EdgeInsets.zero,
                            color: Color.fromARGB(
                                (255 * 0.1).round(), 255, 255, 255),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Row(
                              children: [
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceEvenly,
                                    children: [
                                      Flexible(
                                        child: Padding(
                                          padding: const EdgeInsets.symmetric(
                                              horizontal: 10),
                                          child: Text(
                                            _action != null
                                                ? _action!.title
                                                : 'No action selected',
                                            style: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20,
                                                fontWeight: FontWeight.w300),
                                          ),
                                        ),
                                      ),
                                      Column(
                                        children: [
                                          Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceEvenly,
                                            children: [
                                              if (_action != null) ...{
                                                ElevatedButton(
                                                  onPressed: () {
                                                    Navigator.of(context)
                                                        .push(
                                                      MaterialPageRoute(
                                                        builder: (context) =>
                                                            SelectActionPage(
                                                          data: _action!,
                                                          type: 'action',
                                                          context: 'edit',
                                                        ),
                                                      ),
                                                    )
                                                        .then(
                                                      (value) {
                                                        if (value == null) {
                                                          return;
                                                        }
                                                        setState(() {
                                                          _action = value;
                                                        });
                                                      },
                                                    );
                                                  },
                                                  child: const Text(
                                                    'Edit data',
                                                    style: TextStyle(
                                                      fontSize: 15,
                                                      fontWeight:
                                                          FontWeight.w300,
                                                    ),
                                                  ),
                                                ),
                                              },
                                              ElevatedButton(
                                                onPressed: () {
                                                  Navigator.of(context)
                                                      .push(
                                                    MaterialPageRoute(
                                                      builder: (context) =>
                                                          SelectActionClass(
                                                        type: 'action',
                                                      ),
                                                    ),
                                                  )
                                                      .then(
                                                    (value) {
                                                      if (value == null) {
                                                        return;
                                                      }
                                                      setState(() {
                                                        _action = value;
                                                      });
                                                    },
                                                  );
                                                },
                                                child: const Text(
                                                  'Choose action',
                                                  style: TextStyle(
                                                    fontSize: 15,
                                                    fontWeight: FontWeight.w300,
                                                  ),
                                                ),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 30),
                    child: Column(
                      children: [
                        const Padding(
                          padding: EdgeInsets.only(
                            top: 20,
                            bottom: 10,
                          ),
                          child: Text(
                            'Reaction',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 25,
                              fontWeight: FontWeight.w300,
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 120,
                          child: Card(
                            elevation: 0,
                            margin: EdgeInsets.zero,
                            color: Color.fromARGB(
                                (255 * 0.1).round(), 255, 255, 255),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Row(
                              children: [
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceEvenly,
                                    children: [
                                      Text(
                                        _reaction != null
                                            ? _reaction!.title
                                            : 'No reaction selected',
                                        style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 20,
                                            fontWeight: FontWeight.w300),
                                      ),
                                      Column(
                                        children: [
                                          Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceEvenly,
                                            children: [
                                              if (_reaction != null) ...{
                                                ElevatedButton(
                                                  onPressed: () {
                                                    Navigator.of(context)
                                                        .push(
                                                      MaterialPageRoute(
                                                        builder: (context) =>
                                                            SelectActionPage(
                                                          data: _reaction!,
                                                          type: 'reaction',
                                                          context: 'edit',
                                                        ),
                                                      ),
                                                    )
                                                        .then((value) {
                                                      if (value == null) {
                                                        return;
                                                      }
                                                      setState(() {
                                                        _reaction = value;
                                                      });
                                                    });
                                                  },
                                                  child: const Text(
                                                    'Edit data',
                                                    style: TextStyle(
                                                      fontSize: 15,
                                                      fontWeight:
                                                          FontWeight.w300,
                                                    ),
                                                  ),
                                                )
                                              },
                                              ElevatedButton(
                                                onPressed: () {
                                                  Navigator.of(context)
                                                      .push(
                                                    MaterialPageRoute(
                                                      builder: (context) =>
                                                          SelectActionClass(
                                                        type: 'reaction',
                                                      ),
                                                    ),
                                                  )
                                                      .then((value) {
                                                    if (value == null) {
                                                      return;
                                                    }
                                                    setState(() {
                                                      _reaction = value;
                                                    });
                                                  });
                                                },
                                                child: const Text(
                                                  'Choose reaction',
                                                  style: TextStyle(
                                                    fontSize: 15,
                                                    fontWeight: FontWeight.w300,
                                                  ),
                                                ),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 30),
                    child: SizedBox(
                      width: 150,
                      child: ElevatedButton(
                        onPressed: () {
                          if (_action == null || _reaction == null) return;
                          if (widget.id >= 0) {
                            Api.updateArea(_action!, _reaction!, widget.id)
                                .then(
                                    (value) => Navigator.of(context).pop(true));
                          } else {
                            Api.createArea(_action!, _reaction!).then(
                                (value) => Navigator.of(context).pop(true));
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
                          child: Text('Create Area'),
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 10),
                    child: SizedBox(
                      width: 150,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.of(context).pop(false);
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
