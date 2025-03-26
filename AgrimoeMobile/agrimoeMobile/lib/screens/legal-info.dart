import 'package:agrimoe/models/legal-model.dart';
import 'package:agrimoe/widgets/backgroud-image.dart';
import 'package:agrimoe/widgets/drawer.dart';
import 'package:agrimoe/widgets/legal-info-card.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class LegalInfoScreen extends StatefulWidget {
  const LegalInfoScreen({Key? key}) : super(key: key);

  @override
  _LegalInfoScreenState createState() => _LegalInfoScreenState();
}

class _LegalInfoScreenState extends State<LegalInfoScreen> {
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
                'Legal Info',
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
      stream: FirebaseFirestore.instance.collection('legalInfo').snapshots(),
      builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
        if (snapshot.hasError) {
          return Text('Something went wrong');
        }

        if (snapshot.connectionState == ConnectionState.waiting) {
          return Text("Loading");
        }

        return ListView(
          children: snapshot.data!.docs.map((DocumentSnapshot document) {
            LegalModel legalModel = LegalModel();
            legalModel.fromDocumentSnapshot(document);
            return LegalInfoCard(id: document.id, legalModel: legalModel);
          }).toList(),
        );
      },
    );
  }
}
