import 'package:cloud_firestore/cloud_firestore.dart';

class LegalModel {
  String name;
  String location;
  String contactNo;
  String img;


  LegalModel({
    this.name = '',
    this.location = '',
    this.contactNo = '',
    this.img = '',
  });

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'location': location,
      'contactNo': contactNo,
      'img': img,
    };
  }

  fromDocumentSnapshot(DocumentSnapshot documentSnapshot) {
    name = documentSnapshot['name'];
    location = documentSnapshot['location'];
    contactNo = documentSnapshot['contactNo'];
    img = documentSnapshot['img'];
  }
}
