import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  String title;
  TextEditingController textEditingController;
  TextInputType textInputType;
  TextCapitalization textCapitalization;
  bool isPassword;

  CustomTextField({
    Key? key,
    required this.title,
    required this.textEditingController,
    this.textInputType = TextInputType.text,
    this.textCapitalization = TextCapitalization.none,
    this.isPassword = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 25),
      child: TextField(
        decoration: customTextFieldDecoration(),
        keyboardType: textInputType,
        textCapitalization: textCapitalization,
        obscureText: isPassword,
        controller: textEditingController,
        cursorColor: Colors.white,
        style: const TextStyle(color: Colors.white),
      ),
    );
  }

  InputDecoration customTextFieldDecoration() {
    return InputDecoration(
      labelText: title,
      labelStyle: const TextStyle(
        color: Colors.white,
        fontWeight: FontWeight.bold,
      ),
      floatingLabelStyle: const TextStyle(
        color: Colors.white,
      ),
      enabledBorder: const UnderlineInputBorder(
        borderSide: BorderSide(color: Colors.white),
      ),
      focusedBorder: const UnderlineInputBorder(
        borderSide: BorderSide(color: Colors.white),
      ),
    );
  }
}
