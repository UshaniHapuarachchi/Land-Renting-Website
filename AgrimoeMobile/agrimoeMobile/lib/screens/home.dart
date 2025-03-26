import 'package:agrimoe/screens/login.dart';
import 'package:agrimoe/screens/signup.dart';
import 'package:agrimoe/widgets/backgroud-image.dart';
import 'package:agrimoe/widgets/cutom-button.dart';
import 'package:agrimoe/widgets/drawer.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async => false,
      child: Stack(
        children: [
          const BackgroudImage(),
          Scaffold(
            backgroundColor: Colors.transparent,
            appBar: AppBar(
              backgroundColor: Colors.transparent,
              elevation: 0,
            ),
            body: buildBody(),
            drawer: customDrawer(context),
          ),
        ],
      ),
    );
  }

  Widget buildBody() {
    return Padding(
      padding: const EdgeInsets.all(25),
      child: Column(
        children: [
          const Text(
            'Get Lands Here',
            style: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
              fontSize: 35,
            ),
          ),
          const SizedBox(height: 30),
          const Text(
            'At the moment, Sri Lanka is dealing with a major economic crisis. For the large population of the nation, there is no food. Agriculture is the best response to the food issue. But there isn\'t enough land to cultivate, which is the issue. particularly in urban areas. However, there are plenty of lands in the villages but no one to farm them. The economic crisis will be over if we cultivate those neglected lands.',
            style: TextStyle(
              color: Colors.white,
              fontSize: 25,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 30),
          CustomButton(
              onTap: () => Navigator.push(
                  context, MaterialPageRoute(builder: (context) => const LoginScreen())),
              title: 'Sign in'),
          MaterialButton(
            onPressed: () => Navigator.push(
                context, MaterialPageRoute(builder: (context) => const SignupScreen())),
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 60, vertical: 15),
              child: Text(
                'New Member?',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
