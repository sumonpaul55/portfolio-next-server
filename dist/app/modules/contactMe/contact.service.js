"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const contact_model_1 = __importDefault(require("./contact.model"));
const addContactDataDb = async (payload) => {
    const result = await contact_model_1.default.create(payload);
    return result;
};
const getContactMessage = async (query) => {
    const messageQuery = new QueryBuilder_1.default(contact_model_1.default.find(), query).sort();
    const result = await messageQuery.modelQuery;
    return result;
};
exports.contactService = {
    addContactDataDb, getContactMessage
};
