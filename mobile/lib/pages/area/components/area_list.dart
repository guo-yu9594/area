import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/components/loading.dart';
import 'package:mobile/pages/area/components/area.dart';
import 'package:mobile/pages/area/components/area_card.dart';
import 'package:mobile/pages/area/create_area.dart';
import 'package:mobile/utils/api/api.dart';

class AreaList extends StatefulWidget {
  const AreaList({super.key});

  @override
  State<AreaList> createState() => _AreaListState();
}

class _AreaListState extends State<AreaList> {
  late Future<List<AreaInfo>> _getAreas;

  @override
  void initState() {
    super.initState();
    _getAreas = Api.getAllAreas();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: Api.getAllAreas(),
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.done) {
          return Loading();
        }
        if (snapshot.hasError) {
          return Text('An error occured');
        }
        return Column(
          children: [
            SizedBox(
              height: 400,
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.all(
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
                            (index) {
                              return AreaCard(
                                data: snapshot.data![index],
                                refreshHook: () {
                                  setState(() {});
                                },
                              );
                            },
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 25),
              child: SizedBox(
                width: 150,
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.of(context)
                        .push(
                      MaterialPageRoute(
                        builder: (context) => CreateArea(id: -1),
                      ),
                    )
                        .then((value) {
                      if (value == true) {
                        setState(() {});
                      }
                    });
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
                    child: Text('Add an area'),
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
                    Api.logout();
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
                    child: Text('Logout'),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}
