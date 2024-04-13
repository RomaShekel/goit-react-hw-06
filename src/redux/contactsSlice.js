import { createSlice } from "@reduxjs/toolkit";
import contacts from "../ContactList.json"

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        item: contacts,
    },
    reducers: {
        addContact(state, action) {
            state.item.push(action.payload);
        },
        deleteContact(state, action) {
            state.item = state.item.filter(contact => contact.id !== action.payload);
        }
    }
})

export const {addContact, deleteContact} = contactsSlice.actions;
export const selectContacts = state => state.contacts.item;
export default contactsSlice.reducer;

 
