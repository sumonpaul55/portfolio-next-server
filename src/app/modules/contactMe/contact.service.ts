import { TContactData } from "./contact.interface"
import Contact from "./contact.model"

const addContactDataDb = async(data :TContactData)=>{
    return await Contact.create(data)
}
export const contactService = {
    addContactDataDb
}