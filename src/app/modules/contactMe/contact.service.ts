

import QueryBuilder from "../../builder/QueryBuilder"
import { TContactData } from "./contact.interface"
import Contact from "./contact.model"

const addContactDataDb = async (data: TContactData) => {
    return await Contact.create(data)
}
const getContactMessage = async (query: Record<string, unknown>) => {
    const messageQuery = new QueryBuilder(Contact.find(), query).sort()
    const result = await messageQuery.modelQuery;
    return result

}
export const contactService = {
    addContactDataDb, getContactMessage
}