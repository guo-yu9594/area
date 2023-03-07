import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:mobile/pages/oauth/oauth_webview.dart';
import 'package:mobile/pages/services/components/service_info.dart';
import 'package:mobile/utils/api/api.dart';

class ServiceCard extends StatelessWidget {
  const ServiceCard({super.key, required this.service});

  final ServiceInfo service;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 80,
      child: Column(
        children: [
          SizedBox(
            height: 60,
            width: 60,
            child: ElevatedButton(
              onPressed: () {
                Api.getOauthUrl(id: service.id).then((value) {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => OauthWebView(
                        url: value,
                        service: service.title.toLowerCase(),
                      ),
                    ),
                  );
                });
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.transparent,
                shape: RoundedRectangleBorder(
                  side: BorderSide(color: Colors.white, width: 1),
                  borderRadius: BorderRadius.circular(15),
                ),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  if (service.logo != '') ...{
                    Image.network(
                      service.logo,
                      errorBuilder: (context, error, stackTrace) => Image(
                        width: 30,
                        image: NetworkImage(
                            'https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227'),
                      ),
                    ),
                  } else ...{
                    const Image(
                      width: 30,
                      image: NetworkImage(
                          'https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227'),
                    )
                  },
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 8.0),
            child: Text(
              service.title,
              style: TextStyle(
                fontWeight: FontWeight.w300,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
