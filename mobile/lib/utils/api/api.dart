import 'dart:convert';
import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/pages/area/components/area.dart';
import 'package:mobile/pages/services/components/service_info.dart';
import 'package:mobile/pages/user/components/user_info.dart';
import 'package:mobile/utils/api/models/routes.dart';
import 'package:mobile/utils/api/models/tokens.dart';
import 'package:mobile/utils/storage.dart';
import 'package:url_launcher/url_launcher.dart';

String REDDIT_REDIRECT_URI = 'com.area.mobile://oauth-reddit';

class Api {
  static Tokens _tokens = Tokens(access: "", refresh: "");
  static final ValueNotifier<bool> isAuth = ValueNotifier<bool>(false);
  static String? _userId = null;
  static final _jsonHeaders = {
    "Content-Type": "application/json",
  };

  static set tokens(Tokens token) {
    isAuth.value = token.access.trim().isNotEmpty;
    _tokens = token;
    SecuredStorage.saveTokens(_tokens);
  }

  static get _bearHeaders {
    return {
      "Content-Type": "application/json",
      "Authorization": _tokens.access,
    };
  }

  static void setRoute(String endpoint) {
    Routes.endpoint = endpoint;
  }

  static void logout() {
    tokens = Tokens(access: "", refresh: "");
  }

  static Future<bool> login({
    required String email,
    required String password,
  }) async {
    final response = await http.post(
      Routes.login,
      headers: _jsonHeaders,
      body: jsonEncode({
        "email": email,
        "password": password,
      }),
    );

    // if (response.statusCode != 200) {
    //   return false;
    // }

    tokens = Tokens.fromJson(jsonDecode(response.body));

    return true;
  }

  static Future<String> getOauthUrl({
    required String id,
  }) async {
    final response =
        await http.get(Routes.getServiceUrl(id), headers: _bearHeaders);

    if (response.statusCode != 200) {
      return '';
    }

    return response.body;
  }

  static Future<bool> oauthCallback({
    required String url,
    required String service,
  }) async {
    Uri uri = Uri.parse(url);
    String code = '';
    uri.queryParameters.forEach((key, value) {
      if (key == 'code') {
        code = value;
      }
    });
    var route = Routes.serviceOauth(code, service);
    if (route == null || code == '') {
      return false;
    }
    if (service == 'google') {
      final response = await http.get(route, headers: _jsonHeaders);

      if (response.statusCode != 200) {
        return false;
      }

      tokens = Tokens.fromJson(jsonDecode(response.body));
      return true;
    }
    final response = await http.get(route, headers: _bearHeaders);

    if (response.statusCode != 200) {
      return false;
    }

    return true;
  }

  static Future<bool> register({
    required String email,
    required String password,
  }) async {
    final response = await http.post(
      Routes.register,
      headers: _jsonHeaders,
      body: jsonEncode({
        "email": email,
        "password": password,
      }),
    );

    // if (response.statusCode != 201) {
    //   return false;
    // }

    tokens = Tokens.fromJson(jsonDecode(response.body));

    return true;
  }

  static String extractAuthorisationCodeFromQuery(String query) {
    List<String> queryList = query.split('&');

    for (String q in queryList) {
      List<String> qval = q.split('=');

      if (qval.length > 1 && qval.first.toLowerCase() == 'code') {
        return qval[1];
      }
    }
    return '';
  }

  static Future<UserInfo> getUserInfo() async {
    final response = await http.get(Routes.getUserInfo, headers: _bearHeaders);

    if (response.statusCode != 200) {
      return const UserInfo(email: '');
    }

    UserInfo res = UserInfo(email: response.body);
    return res;
  }

  static Future<List<ServiceInfo>> getServices() async {
    final response = await http.get(Routes.getServices, headers: _bearHeaders);

    if (response.statusCode != 200) {
      return [];
    }

    final List body = jsonDecode(response.body);

    List<ServiceInfo> services = body.map((e) {
      return ServiceInfo.fromJson(e);
    }).toList();
    return services;
  }

  static Future<bool> activateArea(bool active, int id) async {
    final response = await http.put(
      Routes.activateArea,
      headers: _bearHeaders,
      body: jsonEncode({'areaId': id, 'active': !active}),
    );

    if (response.statusCode != 200) {
      return false;
    }
    return true;
  }

  static Future<bool> deleteArea(int areaId) async {
    final response = await http.delete(
      Routes.deleteArea,
      headers: _bearHeaders,
      body: jsonEncode({'areaId': areaId}),
    );

    if (response.statusCode != 200) {
      return false;
    }
    return true;
  }

  static Future<List<AreaInfo>> getAllAreas() async {
    final response = await http.get(Routes.getAreas, headers: _bearHeaders);

    if (response.statusCode != 200) {
      return [];
    }

    final List body = jsonDecode(response.body);
    List<AreaInfo> area = body.map((e) {
      return AreaInfo.fromJson(e);
    }).toList();
    return area;
  }

  static Future<List<ActionClass>> getAllActions() async {
    final response = await http.get(Routes.getActions, headers: _bearHeaders);

    if (response.statusCode != 200) {
      return [];
    }

    final List body = jsonDecode(response.body);
    List<ActionClass> actions = body.map((e) {
      return ActionClass.fromJson(e);
    }).toList();
    return actions;
  }

  static Future<List<ActionClass>> getAllReactions() async {
    final response = await http.get(Routes.getReactions, headers: _bearHeaders);

    if (response.statusCode != 200) {
      return [];
    }

    final List body = jsonDecode(response.body);
    List<ActionClass> actions = body.map((e) {
      return ActionClass.fromJson(e);
    }).toList();
    return actions;
  }

  static Future<bool> createArea(
      ActionClass action, ActionClass reaction) async {
    final response = await http.post(
      Routes.createArea,
      headers: _bearHeaders,
      body: jsonEncode({
        "actionId": {"id": action.id, "extraData": action.fields},
        "reactionId": {"id": reaction.id, "extraData": reaction.fields}
      }),
    );

    if (response.statusCode != 200) {
      return false;
    }
    return true;
  }

  static Future<bool> updateArea(
      ActionClass action, ActionClass reaction, int id) async {
    log('update');
    final response = await http.put(
      Routes.updateArea,
      headers: _bearHeaders,
      body: jsonEncode({
        "areaId": id,
        "actionId": {"id": action.id, "extraData": action.fields},
        "reactionId": {"id": reaction.id, "extraData": reaction.fields}
      }),
    );

    if (response.statusCode != 200) {
      return false;
    }
    return true;
  }
}
