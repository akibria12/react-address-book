import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactsEdit() {
  const [firstName, editFirstName] = useState("");
  const [lastName, editLastName] = useState("");
  const [street, editStreet] = useState("");
  const [city, editCity] = useState("");
  const [email, editEmail] = useState("");
  const [linkedIn, editLinkedIn] = useState("");
  const [twitter, editTwitter] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    getContactDetails();
  }, []);

  const getContactDetails = async () => {
    let result = await fetch(`http://localhost:4000/contacts/${params.id}`);
    result = await result.json();
    console.log(result);
    editFirstName(result.firstName);
    editLastName(result.lastName);
    editStreet(result.street);
    editCity(result.city);
    editEmail(result.email);
    editLinkedIn(result.linkedIn);
    editTwitter(result.twitter);
  };

  const editContact = async () => {
    let result = await fetch(`http://localhost:4000/contacts/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName,
        lastName,
        street,
        city,
        email,
        linkedIn,
        twitter,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
  };

  return (
    <form className="form-stack contact-form">
      <h2>Edit Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e) => {
          editFirstName(e.target.value);
        }}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e) => {
          editLastName(e.target.value);
        }}
        required
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        value={street}
        onChange={(e) => {
          editStreet(e.target.value);
        }}
        required
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        value={city}
        onChange={(e) => {
          editCity(e.target.value);
        }}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={(e) => {
          editEmail(e.target.value);
        }}
        required
      />

      <label htmlFor="linkedIn">LinkedIn:</label>
      <input
        id="linkedIn"
        name="linkedIn"
        type="text"
        value={linkedIn}
        onChange={(e) => {
          editLinkedIn(e.target.value);
        }}
        required
      />

      <label htmlFor="twitter">Twitter:</label>
      <input
        id="twitter"
        name="twitter"
        type="text"
        value={twitter}
        onChange={(e) => {
          editTwitter(e.target.value);
        }}
        required
      />

      <div className="actions-section">
        <button className="button blue" type="submit" onClick={editContact}>
          Edit
        </button>
      </div>
    </form>
  );
}

export default ContactsEdit;
