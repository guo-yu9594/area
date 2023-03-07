import 'dart:convert';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:mobile/utils/api/models/tokens.dart';

class SecuredStorage {
  static final FlutterSecureStorage _storage = const FlutterSecureStorage();
  static const String _tokensKey = "tokens";

  static Future<void> saveTokens(Tokens tokens) {
    return _storage.write(
      key: _tokensKey,
      value: jsonEncode(tokens.toMap()),
    );
  }

  static Future<Tokens?> getTokens() async {
    final String? result = await _storage.read(key: _tokensKey);

    if (result == null) return null;

    return Tokens.fromJson(jsonDecode(result));
  }
}
