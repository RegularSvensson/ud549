function AddressBook() {
	this.contacts = [];
}

AdressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}