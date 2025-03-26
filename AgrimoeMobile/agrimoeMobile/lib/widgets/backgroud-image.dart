import 'package:flutter/material.dart';

class BackgroudImage extends StatelessWidget {
  const BackgroudImage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      width: double.infinity,
      decoration: BoxDecoration(
        color: Colors.black,
        image: DecorationImage(
          colorFilter: ColorFilter.mode(Colors.black.withOpacity(0.5), BlendMode.dstATop),
          image: const AssetImage(
            'images/background.jpg',
          ),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
