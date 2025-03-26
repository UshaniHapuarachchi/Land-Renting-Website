import 'package:agrimoe/screens/home.dart';
import 'package:agrimoe/screens/lands.dart';
import 'package:agrimoe/screens/legal-info.dart';
import 'package:agrimoe/screens/signup.dart';
import 'package:flutter/material.dart';

Drawer customDrawer(context) {
  return Drawer(
    backgroundColor: Colors.black26,
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        customDrawerButton(() {
          Future.delayed(Duration.zero, () {
            Navigator.push(context, MaterialPageRoute(builder: (context) => const HomeScreen()));
          });
        }, 'Home'),
        customDrawerButton(() {
          Future.delayed(Duration.zero, () {
            Navigator.push(context, MaterialPageRoute(builder: (context) => const LandsScreen()));
          });
        }, 'Lands'),
        customDrawerButton(() {
          Future.delayed(Duration.zero, () {
            Navigator.push(
                context, MaterialPageRoute(builder: (context) => const LegalInfoScreen()));
          });
        }, 'Legal Info'),
        customDrawerButton(() {
          Future.delayed(Duration.zero, () {
            Navigator.push(context, MaterialPageRoute(builder: (context) => const SignupScreen()));
          });
        }, 'Register'),
      ],
    ),
  );
}

Widget customDrawerButton(Function() onTap, String title) {
  return MaterialButton(
    padding: const EdgeInsets.all(20),
    onPressed: onTap,
    child: Text(
      title,
      style: const TextStyle(
        color: Colors.white,
        fontSize: 25,
        fontWeight: FontWeight.bold,
      ),
    ),
  );
}
