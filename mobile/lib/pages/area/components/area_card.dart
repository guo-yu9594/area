import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:mobile/pages/area/components/area.dart';
import 'package:mobile/pages/area/create_area.dart';
import 'package:mobile/utils/api/api.dart';

class AreaCard extends StatefulWidget {
  const AreaCard({super.key, required this.data, required this.refreshHook});
  final AreaInfo data;
  final Function refreshHook;

  @override
  State<AreaCard> createState() => _AreaCardState();
}

class _AreaCardState extends State<AreaCard> {
  late bool _isSelected = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 15, left: 15, right: 15),
      child: Card(
        elevation: 0,
        margin: EdgeInsets.zero,
        color: Color.fromARGB((255 * 0.1).round(), 255, 255, 255),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15),
        ),
        child: InkWell(
          onTap: () {
            setState(() {
              _isSelected = !_isSelected;
            });
          },
          customBorder: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15),
          ),
          child: Padding(
            padding: const EdgeInsets.all(10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Flexible(
                      child: Text(
                        widget.data.actionTitle,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          fontWeight: FontWeight.w300,
                          fontSize: 17,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Flexible(
                      child: Text(
                        widget.data.reactionTitle,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          fontWeight: FontWeight.w300,
                          fontSize: 17,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ],
                ),
                if (_isSelected) ...[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(top: 10.0),
                        child: ElevatedButton(
                          onPressed: () {
                            Navigator.of(context)
                                .push(
                              MaterialPageRoute(
                                builder: (context) =>
                                    CreateArea(id: widget.data.id),
                              ),
                            )
                                .then((res) {
                              widget.refreshHook();
                            });
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor:
                                const Color.fromARGB(255, 241, 70, 70),
                          ),
                          child: Padding(
                            padding: EdgeInsets.all(3),
                            child: Text('Edit'),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 10.0),
                        child: ElevatedButton(
                          onPressed: () {
                            Api.activateArea(widget.data.active, widget.data.id)
                                .then((res) {
                              widget.refreshHook();
                            });
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor:
                                const Color.fromARGB(255, 241, 70, 70),
                          ),
                          child: Padding(
                            padding: EdgeInsets.all(3),
                            child: Text(
                                widget.data.active ? 'Deactivate' : 'Activate'),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 10.0),
                        child: ElevatedButton(
                          onPressed: () {
                            Api.deleteArea(widget.data.id).then((value) {
                              widget.refreshHook();
                            });
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor:
                                const Color.fromARGB(255, 241, 70, 70),
                          ),
                          child: const Padding(
                            padding: EdgeInsets.all(3),
                            child: Text('To trash'),
                          ),
                        ),
                      ),
                    ],
                  )
                ] else ...[
                  Container()
                ]
              ],
            ),
          ),
        ),
      ),
    );
  }
}
