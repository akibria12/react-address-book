import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialFormState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  email: "",
  linkedIn: "",
  twitter: "",
};
function ContactsAdd(props) {
  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { setContacts, contacts } = props;
  const [newPerson, setNewPerson] = useState(initialFormState);
  //TODO: Implement controlled form
  //send POST to json server on form submit
  const navigate = useNavigate();
  const goToContactList = () => {
    navigate("/contacts");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: newPerson.firstName,
        lastName: newPerson.lastName,
        street: newPerson.street,
        city: newPerson.city,
        email: newPerson.email,
        linkedIn: newPerson.linkedIn,
        twitter: newPerson.twitter,
      }),
    })
      .then((res) => res.json())
      .then((newData) => setContacts({ ...contacts, newData }));
    console.log("new details added", contacts);
    setNewPerson(initialFormState); // setContacts(contacts);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const type = e.target.type;
    if (name === "firstName") {
      setNewPerson({ ...newPerson, firstName: value });
    }
    if (name === "lastName") {
      setNewPerson({ ...newPerson, lastName: value });
    }
    if (name === "street") {
      setNewPerson({ ...newPerson, street: value });
    }
    if (name === "city") {
      setNewPerson({ ...newPerson, city: value });
    }
    if (name === "email") {
      setNewPerson({ ...newPerson, email: value });
    }
    if (name === "linkedIn") {
      setNewPerson({ ...newPerson, linkedIn: value });
    }
    if (name === "twitter") {
      setNewPerson({ ...newPerson, twitter: value });
    }
  };

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={newPerson.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={newPerson.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        value={newPerson.street}
        onChange={handleChange}
        required
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        value={newPerson.city}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        value={newPerson.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="linkedIn">LinkedIn:</label>
      <input
        id="linkedIn"
        name="linkedIn"
        type="text"
        value={newPerson.linkedIn}
        onChange={handleChange}
        required
      />
      <label htmlFor="twitter">Twitter:</label>
      <input
        id="twitter"
        name="twitter"
        type="text"
        value={newPerson.twitter}
        onChange={handleChange}
        required
      />

      <div className="actions-section">
        <button
          className="button blue"
          type="submit"
          //onClick={goToContactList}>
        >
          {" "}
          Create
        </button>
      </div>
    </form>
  );
}

export default ContactsAdd;
