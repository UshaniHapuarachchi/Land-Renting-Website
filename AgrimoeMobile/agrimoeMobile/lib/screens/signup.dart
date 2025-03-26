import 'package:agrimoe/models/user-model.dart';
import 'package:agrimoe/screens/lands.dart';
import 'package:agrimoe/screens/login.dart';
import 'package:agrimoe/services/user-service.dart';
import 'package:agrimoe/widgets/backgroud-image.dart';
import 'package:agrimoe/widgets/custom-progress-indicator.dart';
import 'package:agrimoe/widgets/custom-text-field.dart';
import 'package:agrimoe/widgets/cutom-button.dart';
import 'package:flutter/material.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({Key? key}) : super(key: key);

  @override
  _SignupScreenState createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  TextEditingController name = TextEditingController();
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  TextEditingController confirmPassword = TextEditingController();
  String userType = '';

  bool isLoading = false;

  onClickRegister() async {
    if (name.text.trim() == '' || email.text.trim() == '' || password.text.trim() == '') {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Fields cannot be Empty!"),
        ),
      );
      return;
    }

    if (userType == '') {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Please select user category!"),
        ),
      );
      return;
    }

    if (password.text.trim() != confirmPassword.text.trim()) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Passwords not match!"),
        ),
      );
      return;
    }

    setState(() => isLoading = true);

    UserModel userModel = UserModel(
      name: name.text.trim(),
      email: email.text.trim(),
      userCategory: userType,
    );

    UserService.createUser(userModel, password.text.trim()).then((value) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Register Success!"),
        ),
      );
      setState(() => isLoading = false);
      Navigator.push(context, MaterialPageRoute(builder: (context) => const LandsScreen()));
    }).catchError((error) {
      setState(() => isLoading = false);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Register Fail!"),
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
                  'Let\'s get started',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 30,
                  ),
                ),
                const SizedBox(height: 20),
                CustomTextField(
                  title: 'Name',
                  textEditingController: name,
                  textCapitalization: TextCapitalization.words,
                ),
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
                CustomTextField(
                  title: 'Confirm Password',
                  textEditingController: confirmPassword,
                  isPassword: true,
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Flexible(
                      child: RadioListTile(
                        value: 'Buyer',
                        groupValue: userType,
                        activeColor: Colors.white,
                        onChanged: (value) {
                          setState(() {
                            userType = value!;
                          });
                        },
                        title: const Text(
                          'Buyer',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                    Flexible(
                      child: RadioListTile(
                        value: 'Seller',
                        groupValue: userType,
                        activeColor: Colors.white,
                        onChanged: (value) {
                          setState(() {
                            userType = value!;
                          });
                        },
                        title: const Text(
                          'Seller',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 50),
                CustomButton(onTap: () => onClickRegister(), title: 'Register'),
                const SizedBox(height: 50),
                MaterialButton(
                  onPressed: () => Navigator.push(
                      context, MaterialPageRoute(builder: (context) => LoginScreen())),
                  child: const Text(
                    'Already a member? SignIn',
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
