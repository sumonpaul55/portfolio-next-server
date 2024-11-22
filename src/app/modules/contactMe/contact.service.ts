import { TContactData } from "./contact.interface"
import Contact from "./contact.model"

const addContactDataDb = async(data :TContactData)=>{
    return await Contact.create(data)
}
const getContactMessage = async()=>{
    return await Contact.find()
}
export const contactService = {
    addContactDataDb,getContactMessage
}