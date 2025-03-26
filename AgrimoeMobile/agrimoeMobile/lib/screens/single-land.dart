import 'package:agrimoe/const.dart';
import 'package:agrimoe/models/lands-model.dart';
import 'package:agrimoe/widgets/backgroud-image.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter_image_slideshow/flutter_image_slideshow.dart';

class SingleLandScreen extends StatefulWidget {
  String id;
  SingleLandScreen({Key? key, required this.id}) : super(key: key);

  @override
  _SingleLandScreenState createState() => _SingleLandScreenState();
}

class _SingleLandScreenState extends State<SingleLandScreen> {
  LandsModel landsModel = LandsModel(address: '', contactnumber: '', description: '', imageUrls: [], landsize: '', ownername: '', rent: '', role: '', title: '');

  @override
  void initState(){
    super.initState();
    getData();
  }

  getData()async{
    await FirebaseFirestore.instance.collection('Land Add form').doc(widget.id).get().then((value){
      LandsModel tempLandsModel = LandsModel.fromDocumentSnapshot(value);
      setState(() {
        landsModel = tempLandsModel;
      });
    });
  }
  
  
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        const BackgroudImage(),
        Scaffold(
          backgroundColor: Colors.transparent,
          appBar: AppBar(
            backgroundColor: Colors.transparent,
            elevation: 0,
            centerTitle: true,
            title: Text(
              landsModel.title != '' ? landsModel.title : 'Loading..',
              style: const TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          body: buildBody(),
        ),
      ],
    );
  }

  Widget buildBody() {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: ListView(
        children: [
          landsModel.title != '' ? buildImageShow() : const SizedBox(height: 200),
          const SizedBox(height: 20),
          text('Location : ${landsModel.address != '' ? landsModel.address : 'Loading..'}'),
          text('Size : ${landsModel.landsize != '' ? landsModel.landsize : 'Loading..'}'),
          text('Rent Value : ${landsModel.rent != '' ? landsModel.rent : 'Loading..'}'),
          text('Description : ${landsModel.description != '' ? landsModel.description : 'Loading..'}'),
          text('Contact No : ${landsModel.contactnumber != '' ? landsModel.contactnumber : 'Loading..'}'),
        ],
      ),
    );
  }

  Widget buildImageShow() {
    final images = <Widget>[];

    for(String img in landsModel.imageUrls){
      images.add(Image.network(img, fit: BoxFit.cover));
    }

    return ImageSlideshow(
      indicatorColor: kThemeColor,
      autoPlayInterval: 3000,
      isLoop: true,
      children: images,
    );
  }

  Widget text(String text) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Text(
        text,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 20,
        ),
      ),
    );
  }
}
