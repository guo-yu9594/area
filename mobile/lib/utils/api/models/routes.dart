import 'package:flutter/material.dart';

class Routes {
  // static const String endpoint = "192.168.12.100";
  static String endpoint = "http://10.0.2.2:8080";

  static final Uri login = Uri.parse("$endpoint/auth/login");
  static final Uri register = Uri.parse("$endpoint/auth/register");

  static final Uri deleteArea = Uri.parse("$endpoint/areas");
  static final Uri activateArea = Uri.parse("$endpoint/areas-active");
  static final Uri updateArea = Uri.parse("$endpoint/areas");

  static final Uri getUserInfo = Uri.parse("$endpoint/elements/emails");
  static final Uri getAreas = Uri.parse("$endpoint/elements/areas");
  static final Uri getActions = Uri.parse("$endpoint/elements/actions");
  static final Uri getReactions = Uri.parse("$endpoint/elements/reactions");
  static final Uri getServices = Uri.parse("$endpoint/elements/services");
  static Uri getServiceUrl(String id) {
    return Uri.parse("$endpoint/services/url/$id");
  }

  static final Uri createArea = Uri.parse("$endpoint/areas");

  static Uri serviceOauth(String code, String service) {
    return Uri.parse("$endpoint/auth/$service/redirect?code=$code");
  }
}
