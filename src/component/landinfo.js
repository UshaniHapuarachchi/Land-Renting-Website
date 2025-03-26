import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Card } from "react-bootstrap";

function LandDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const landId = searchParams.get("id");
  const [land, setLand] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const landRef = doc(db, "Land", landId);
    getDoc(landRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          setLand(docSnapshot.data());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [landId]);

  return (
    <div className="container my-5 d-flex justify-content-center">
  {land ? (
    <Card className="card card-sm">
      <img src={land.imageUrls} className="card-img" alt="Land Image" />
      <Card.Body>
        <Card.Title>{land.title}</Card.Title>
        <Card.Text>{land.description}</Card.Text>
        <Card.Text>Contact number: {land.contactnumber}</Card.Text>
        <Card.Text>Land size: {land.contactnumber}</Card.Text>
        <Card.Text>Contact number: {land.contactnumber}</Card.Text>
        <Card.Text>role: {land.contactnumber}</Card.Text>
        <Card.Text>Owner name: {land.ownername}</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <p>Loading...</p>
  )}
</div>

  
  );
}

export default LandDetails;
