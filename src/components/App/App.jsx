// src/components/App.jsx
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import contactList from "../../ContactList.json"
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "contacts";

export default function App() {

const [contacts, setContacts] = useState(() => {
  const contactsInStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(contactsInStorage !== null) {
    return JSON.parse(contactsInStorage)
  }
  return contactList;
});

const [filter, setFilter] = useState('');

useEffect(() =>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts])

const saveContact = (newContact) => {
  setContacts((prevcontact) => {
    return [...prevcontact, newContact];
  })
};

const deleteContact = (contactId) => {
  setContacts((prevcontact) => {
    return prevcontact.filter(contact => contactId !== contact.id)
  })
}

const visibleContacts = contacts.filter((contact) => 
  contact.name.toLowerCase().includes(filter.toLowerCase())
)

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={saveContact}/>
      <SearchBox onFilter={setFilter} value={filter}/>
      <ContactList contactList={visibleContacts} onDelete={deleteContact}/>
    </div>
  );
}

