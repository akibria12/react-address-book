import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function ContactsList(props) {
  //"contacts" must be passed as prop to this component
  const { contacts, deleteContact } = props;
  console.log(contacts);

  function ContactDelete(id) {
    fetch(`http://localhost:4000/contacts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        deleteContact();
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

                <Link to={`/contacts/edit/${contact.id}`} state={{ contact }}>
                  Edit
                </Link>
                <button onClick={() => ContactDelete(contact.id)}>
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
