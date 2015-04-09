describe('Address Book', function() {
	
	beforeEach(function() {
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

		addressBook.addContact(thisContact);

		expect(addressBook.getContact(0)).toBe(thisContact);
	});
});