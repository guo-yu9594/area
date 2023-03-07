import 'dart:convert';

import 'package:flutter/widgets.dart';

class AreaInfo {
  final int id;
  final String actionTitle;
  final String actionDescription;
  final String reactionTitle;
  final String reactionDescription;
  final bool active;

  const AreaInfo({
    required this.id,
    required this.actionTitle,
    required this.actionDescription,
    required this.reactionTitle,
    required this.reactionDescription,
    required this.active,
  });

  factory AreaInfo.fromJson(Map<String, dynamic> json) {
    return AreaInfo(
      id: json['id'],
      actionTitle: json['action']['title'],
      actionDescription: json['action']['description'],
      reactionTitle: json['reaction']['title'],
      reactionDescription: json['reaction']['description'],
      active: json['active'] ?? false,
    );
  }
}

class ActionClass {
  final String title;
  final String description;
  final int id;
  List<MapEntry> extraData;
  Map<String, dynamic> fields;

  ActionClass({
    required this.title,
    required this.description,
    required this.id,
    this.extraData = const [],
    this.fields = const {},
  });

  factory ActionClass.fromJson(Map<String, dynamic> json) {
    return ActionClass(
      title: json['title'],
      description: json['description'] ?? '',
      id: json['id'],
      extraData: (json['extraData'] as Map<String, dynamic>).entries.map((e) {
        return MapEntry(e.key, e.value);
      }).toList(),
    );
  }

  factory ActionClass.fromMap(Map<String, dynamic> json, int id, String title,
      List<MapEntry> extraData) {
    return ActionClass(
      title: title,
      description: '',
      id: id,
      fields: json,
      extraData: extraData,
    );
  }

  @override
  String toString() {
    return "{$title, $description, $extraData, $fields}";
  }
}
