import 'package:agrimoe/screens/lands.dart';
import 'package:agrimoe/screens/signup.dart';
import 'package:agrimoe/services/user-service.dart';
import 'package:agrimoe/widgets/backgroud-image.dart';
import 'package:agrimoe/widgets/custom-progress-indicator.dart';
import 'package:agrimoe/widgets/custom-text-field.dart';
import 'package:agrimoe/widgets/cutom-button.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  bool isLoading = false;

  onClickSignin() async {
    if (email.text.trim() == '' || password.text.trim() == '') {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Fields cannot be Empty!"),
        ),
      );
      return;
    }

    setState(() => isLoading = true);

    await UserService.loginUser(email.text.trim(), password.text.trim()).then((value) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Login Success!"),
        ),
      );
      setState(() => isLoading = false);
      Navigator.push(context, MaterialPageRoute(builder: (context) => const LandsScreen()));
    }).catchError((error) {
      setState(() => isLoading = false);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Login Fail!"),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return CustomProgressIndicator(
      inAsyncCall: isLoading,
      child: Stack(
        children: [
          const BackgroudImage(),
          Scaffold(
            backgroundColor: Colors.transparent,
            appBar: AppBar(
              backgroundColor: Colors.transparent,
              elevation: 0,
            ),
            body: ListView(
              children: [
                const Text(
                  'Stay Connected',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 30,
                  ),
                ),
                const SizedBox(height: 20),
                CustomTextField(
                  title: 'Email',
                  textEditingController: email,
                  textInputType: TextInputType.emailAddress,
                ),
                CustomTextField(
                  title: 'Password',
                  textEditingController: password,
                  isPassword: true,
                ),
                const SizedBox(height: 50),
                CustomButton(onTap: () => onClickSignin(), title: 'Sign in'),
                const SizedBox(height: 50),
                MaterialButton(
                  onPressed: () => Navigator.push(
                      context, MaterialPageRoute(builder: (context) => SignupScreen())),
                  child: const Text(
                    'Don\'t have an account? SignUp',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
