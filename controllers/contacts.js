const { Contact } = require("../models/contact");
const { ctrlWrapper, HttpError } = require("../helpers");

const listContacts = async (req, res, next) => {
    const contacts = await Contact.find().exec();
    res.status(200).json(contacts);

};

const getContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);
    if (!contact) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json(contact);
};

const addContact = async (req, res, next) => {
    const { name, email, phone } = req.body;
    const newContact = await Contact.create({ name, email, phone });
    res.status(201).json(newContact);
};

const removeContact = async (req, res, next) => {
    const { contactId } = req.params;
    const removedContact = await Contact.findByIdAndDelete(contactId);
    if (!removedContact) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "contact deleted" });
};

const updateContact = async (req, res, next) => {
    const { contactId } = req.params;
    const { name, email, phone, favorite } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
        contactId,
        {
            name,
            email,
            phone,
            favorite,
        },
        { new: true }
    );
    if (!updatedContact) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json(updatedContact);
};

const updateStatusContact = async (req, res, next) => {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
        contactId,
        {
            favorite,
        },
        { new: true }
    );
    if (!updatedContact) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json(updatedContact);
};

module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getContactById: ctrlWrapper(getContactById),
    removeContact: ctrlWrapper(removeContact),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    updateStatusContact: ctrlWrapper(updateStatusContact),
};