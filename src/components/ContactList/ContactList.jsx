import Contact from "../Contact/Contact"
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

export default function ContactList() {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilters)

    const visibleContacts = contacts.filter((contact) => 
        contact.name.toLowerCase().includes(filter.toLowerCase())
)
    return(
        <div>
            {visibleContacts.map(contact => {
                return(
                <Contact key={contact.id} contact={contact}/>)
            })}
        </div>
    )
}