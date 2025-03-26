import 'package:agrimoe/models/legal-model.dart';
import 'package:flutter/material.dart';

class LegalInfoCard extends StatelessWidget {
  String id;
  LegalModel legalModel;
  LegalInfoCard({Key? key,required this.id, required this.legalModel}) : super(key: key);

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
                    image: NetworkImage(legalModel.img),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
            const SizedBox(width: 5),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Name : ${legalModel.name}'),
                const SizedBox(height: 20),
                Text('Location : ${legalModel.location}'),
                const SizedBox(height: 20),
                Text('Contact : ${legalModel.contactNo}'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
