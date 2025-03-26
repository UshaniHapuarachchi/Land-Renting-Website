import 'package:agrimoe/const.dart';
import 'package:flutter/material.dart';
import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';

class CustomProgressIndicator extends StatelessWidget {
  bool inAsyncCall;
  Widget child;
  CustomProgressIndicator({Key? key, required this.inAsyncCall, required this.child})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ModalProgressHUD(
      progressIndicator: const CircularProgressIndicator(
        color: kThemeColor,
      ),
      inAsyncCall: inAsyncCall,
      child: child,
    );
  }
}
