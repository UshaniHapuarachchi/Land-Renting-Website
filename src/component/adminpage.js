import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, deleteDoc,getFirestore ,doc  } from "firebase/firestore";
import { faCoffee, faDollar, faDollarSign, faHouse, faLandmark, faLocation, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { initializeApp } from 'firebase/app';

import { db, storage } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Table, Button, Modal, Form } from "react-bootstrap";

const AdminPage = () => {
  const [lands, setLands] = useState([]);
  const [selectedLand, setSelectedLand] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [editContactNumber, setEditContactNumber] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const [editLandData, setEditLandData] = useState({
    name: "",
    location: "",
    size: "",
    type: "",
    duration: "",
  });


  const firebaseConfig = {
    apiKey: "AIzaSyBh4ltJ1s9Ca_siAwoIxhObW38sv4XXx0Q",
  authDomain: "agrimoe-7b917.firebaseapp.com",
  projectId: "agrimoe-7b917",
  storageBucket: "agrimoe-7b917.appspot.com",
  messagingSenderId: "457482752709",
  appId: "1:457482752709:web:1cc368cfdefceffa8c16ac"
};




const app = initializeApp(firebaseConfig);


  // Initialize Cloud Firestore and get a reference to the service
  const database = getFirestore(app);

  // Fetch land data from Firestore
 
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  // Handle opening edit modal and populating data
  const handleEditModal = (land) => {

    setSelectedLand(land);
    setEditLandData({
      name: land.name,
      location: land.location,
      size: land.size,
      type: land.type,
      duration: land.duration,
    });
    setShowEditModal(true);
  };

  // Handle editing land data in Firestore
  const handleEditLand = async () => {

  


    const washingtonRef = doc(database, "Land", selectedLand.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      ownername: editName,
      contactnumber:editContactNumber,
      address:editAddress,
      rent:editPrice,
      description:editDescription

     
    });





    console.log("hellddo")
    setEditName("");
    setEditContactNumber("");
    setEditAddress("");
    setEditPrice("");
    setEditDescription("");
    setShowEditModal(false);
  };
  
  // Handle opening delete modal
  const handleDeleteModal = async (land) => {
    setSelectedLand(land);
    setShowDeleteModal(true);
    handleDeleteLand();
    
await deleteDoc(doc(db, "Land", selectedLand.id));
  };

  // Handle deleting land data from Firestore
  const handleDeleteLand = async () => {
    console.log(selectedLand.id)







  };
  useEffect(() => {
    const fetchData = async () => {
      const landsRef = collection(db, "Land");
      const data = await getDocs(landsRef);
      setLands(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  return (
    <div className="container mt-3">
      <h1 className="mb-3">Admin Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Size</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lands.map((land) => (
            <tr key={land.id}>
              <td>{land.title}</td>
              <td>{land.location}</td>
              <td>{land.size}</td>
              <td>{land.type}</td>
              <td>{land.duration}</td>
              <td>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => handleEditModal(land)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteModal(land)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Land Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact number"
          value={editContactNumber}
          onChange={(e) => setEditContactNumber(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={editAddress}
          onChange={(e) => setEditAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter price"
          value={editPrice}
          onChange={(e) => setEditPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter description"
          style={{ height: '100px' }}
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseEditModal}>
      Close
    </Button>
    <Button variant="primary" onClick={handleEditLand}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

      </Table>



      </div>

  )};


export default AdminPage;