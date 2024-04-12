import Contact from "../Contact/Contact"
export default function ContactList({contactList, onDelete}) {
    return(
        <div>
            {contactList.map(contact => {
                return(
                <Contact key={contact.id} contact={contact} onDelete={onDelete}s/>)
            })}
        </div>
    )
}