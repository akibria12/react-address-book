import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import DeleteContact from "./DeleteContact";

function ContactsList(props) {
  //"contacts" must be passed as prop to this component
  const { contacts, setContacts, updateContact } = props;
  console.log(contacts);

  function deleteContact(id) {
    fetch(`http://localhost:4000/contacts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        updateContact();
      });
    });
  }

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact;
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <p>
                {/** TODO: Make a Link here to view contact */}
                <Link to={`/contacts/${contact.id}/`} state={{ contact }}>
                  View
                </Link>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactsList;
