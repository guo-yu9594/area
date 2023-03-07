import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/components/app_scaffold.dart';
import 'package:mobile/components/info_bar.dart';
import 'package:mobile/components/loading.dart';
import 'package:mobile/components/service_manager.dart';
import 'package:mobile/pages/area/components/action_card.dart';
import 'package:mobile/pages/area/components/area.dart';
import 'package:mobile/utils/api/api.dart';

class SelectActionClass extends StatefulWidget {
  const SelectActionClass({super.key, required this.type});
  final String type;

  @override
  State<SelectActionClass> createState() => _SelectActionClassState();
}

class _SelectActionClassState extends State<SelectActionClass> {
  late Future<List<ActionClass>> _getActions;

  @override
  void initState() {
    super.initState();
    if (widget.type == 'action') {
      _getActions = Api.getAllActions();
    } else {
      _getActions = Api.getAllReactions();
    }
  }

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
                  FutureBuilder(
                    future: _getActions,
                    builder: (context, snapshot) {
                      if (snapshot.connectionState != ConnectionState.done) {
                        return Loading();
                      }
                      if (snapshot.hasError) {
                        return Text('An error occured');
                      }
                      if (snapshot.data != null && snapshot.data!.length > 0) {
                        snapshot.data!.sort((ActionClass a, ActionClass b) =>
                            a.title.compareTo(b.title));
                      }
                      return Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 30, vertical: 10),
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
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Expanded(
                                      child: SingleChildScrollView(
                                        child: Column(
                                          children: List.generate(
                                            snapshot.data!.length,
                                            (index) => ActionCard(
                                              data: snapshot.data![index],
                                              type: widget.type,
                                            ),
                                          ),
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      );
                    },
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
