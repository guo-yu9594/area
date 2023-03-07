class Tokens {
  String access;
  String refresh;

  Tokens({
    required this.access,
    required this.refresh,
  });

  factory Tokens.fromJson(dynamic json) {
    return Tokens(
      access: json["token"],
      refresh: json["refreshToken"],
    );
  }

  Map<String, String> toMap() {
    return {
      "accessToken": access,
      "refreshToken": refresh,
    };
  }
}
