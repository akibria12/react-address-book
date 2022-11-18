import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import ContactsAdd from "./components/ContactsAdd";
import ContactsView from "./components/ContactsView";
import "./styles/styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);

  //TODO: Load all contacts on useEffect when component first renders
  useEffect(() => {
    fetch("http://localhost:4000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);
  console.log("here is my contacts:", contacts);
  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <li>
            <Link to="/contacts">Contacts List</Link>
          </li>
          <li>Add New Contact</li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route
            path="/contacts"
            element={<ContactsList contacts={contacts} />}
          />
          <Route path="/contacts/:id" element={<ContactsView />} />
          {/* TODO: Add routes here  */}
        </Routes>
      </main>
    </>
  );
}
