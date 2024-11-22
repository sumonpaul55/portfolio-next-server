"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactService = void 0;
const contact_model_1 = __importDefault(require("./contact.model"));
const addContactDataDb = async (data) => {
    return await contact_model_1.default.create(data);
};
const getContactMessage = async () => {
    return await contact_model_1.default.find();
};
exports.contactService = {
    addContactDataDb, getContactMessage
};
