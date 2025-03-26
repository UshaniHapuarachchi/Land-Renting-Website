import 'package:agrimoe/screens/single-land.dart';
import 'package:flutter/material.dart';
import 'package:agrimoe/models/lands-model.dart';


class LandCard extends StatelessWidget {
  String id;
  String name;
  String location;
  String image;
  LandCard({Key? key, required this.id, required this.name, required this.image, required this.location}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 10),
      child: Card(
        child: Row(
          children: [
            Padding(
              padding: const EdgeInsets.all(5),
              child: Container(
                height: 150,
                width: 150,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: NetworkImage(image),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
            const SizedBox(width: 5),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Title : ${name}'),
                const SizedBox(height: 20),
                Text('Location : ${location}'),
                const SizedBox(height: 20),
                MaterialButton(
                  padding: EdgeInsets.zero,
                  onPressed: () => Navigator.push(
                      context, MaterialPageRoute(builder: (context) => SingleLandScreen(id: id))),
                  child: Container(
                    color: Colors.black,
                    child: const Padding(
                      padding: EdgeInsets.symmetric(vertical: 5, horizontal: 50),
                      child: Text(
                        'View',
                        style: TextStyle(
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
