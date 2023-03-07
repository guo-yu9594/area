class ServiceInfo {
  final String id;
  final String title;
  final String desc;
  final String logo;

  ServiceInfo({
    required this.id,
    required this.title,
    required this.desc,
    required this.logo,
  });

  factory ServiceInfo.fromJson(Map<String, dynamic> json) {
    return ServiceInfo(
      id: json['id'].toString(),
      title: json['title'] ?? '',
      desc: json['description'] ?? '',
      logo: json['logo'] ?? '',
    );
  }
}
