import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  Function onTap;
  String title;
  CustomButton({Key? key, required this.onTap, required this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: () => onTap(),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.black54,
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 60, vertical: 15),
          child: Text(
            title,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 25,
            ),
          ),
        ),
      ),
    );
  }
}
