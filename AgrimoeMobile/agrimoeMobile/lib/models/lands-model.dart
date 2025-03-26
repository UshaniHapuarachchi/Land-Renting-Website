import 'package:cloud_firestore/cloud_firestore.dart';

class LandsModel {
  late String address;
  late String contactnumber;
  late String description;
  late List imageUrls;
  late String landsize;
  late String ownername;
  late String rent;
  late String role;
  late String title;

  LandsModel({
    required this.address,
    required this.contactnumber,
    required this.description,
    required this.imageUrls,
    required this.landsize,
    required this.ownername,
    required this.rent,
    required this.role,
    required this.title,
  });

  LandsModel.fromDocumentSnapshot(DocumentSnapshot documentSnapshot) {
    address = documentSnapshot['address'];
    contactnumber = documentSnapshot['contactnumber'];
    description = documentSnapshot['description'];
    imageUrls = documentSnapshot['imageUrls'];
    landsize = documentSnapshot['landsize'];
    ownername = documentSnapshot['ownername'];
    rent = documentSnapshot['rent'];
    role = documentSnapshot['role'];
    title = documentSnapshot['title'];
  }
}
