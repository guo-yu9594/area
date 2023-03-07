import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:mobile/pages/area/components/area.dart';
import 'package:mobile/pages/area/select_action_page.dart';
import 'package:mobile/pages/area/view_action_page.dart';

class ActionCard extends StatefulWidget {
  const ActionCard({
    super.key,
    required this.data,
    required this.type,
  });
  final ActionClass data;
  final String type;
  @override
  State<ActionCard> createState() => _ActionCardState();
}

class _ActionCardState extends State<ActionCard> {
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
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Flexible(
                      child: Padding(
                        padding: const EdgeInsets.all(5),
                        child: Text(
                          widget.data.title,
                          overflow: _isSelected ? null : TextOverflow.ellipsis,
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            fontWeight: FontWeight.w300,
                            fontSize: 17,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                if (_isSelected) ...[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(5),
                        child: ElevatedButton(
                          onPressed: () {
                            Navigator.of(context).push(
                              MaterialPageRoute(
                                builder: (context) => SelectActionPage(
                                  data: widget.data,
                                  type: widget.type,
                                  context: 'create',
                                ),
                              ),
                            );
                          },
                          child: Text('Select'),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(5),
                        child: ElevatedButton(
                          onPressed: () {
                            Navigator.of(context).push(
                              MaterialPageRoute(
                                builder: (context) =>
                                    ViewActionPage(data: widget.data),
                              ),
                            );
                          },
                          child: Text('Detail'),
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
