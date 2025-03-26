import 'package:agrimoe/models/lands-model.dart';
import 'package:agrimoe/widgets/backgroud-image.dart';
import 'package:agrimoe/widgets/drawer.dart';
import 'package:agrimoe/widgets/land-card.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class LandsScreen extends StatefulWidget {
  const LandsScreen({Key? key}) : super(key: key);

  @override
  _LandsScreenState createState() => _LandsScreenState();
}

class _LandsScreenState extends State<LandsScreen> {
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
              centerTitle: true,
              title: const Text(
                'Lands',
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            drawer: customDrawer(context),
            body: buildBody(),
          ),
        ],
      ),
    );
  }

  Widget buildBody() {
    return StreamBuilder<QuerySnapshot>(
      stream: FirebaseFirestore.instance.collection('Land Add form').snapshots(),
      builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
        if (snapshot.hasError) {
          return Text('Something went wrong');
        }

        if (snapshot.connectionState == ConnectionState.waiting) {
          return Text("Loading");
        }

        return ListView(
          children: snapshot.data!.docs.map((DocumentSnapshot document) {
            LandsModel landsModel = LandsModel.fromDocumentSnapshot(document);
            return LandCard(id: document.id, name: landsModel.title, image: landsModel.imageUrls[0], location: landsModel.address);
          }).toList(),
        );
      },
    );
  }
}
