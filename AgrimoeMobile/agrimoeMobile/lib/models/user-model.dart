import 'package:cloud_firestore/cloud_firestore.dart';

class UserModel {
  String name;
  String email;
  String userCategory;

  UserModel({
    this.name = '',
    this.email = '',
    this.userCategory = '',
  });

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
      'userCategory': userCategory,
    };
  }

  fromDocumentSnapshot(DocumentSnapshot documentSnapshot) {
    name = documentSnapshot['name'];
    email = documentSnapshot['email'];
    userCategory = documentSnapshot['userCategory'];
  }
}
