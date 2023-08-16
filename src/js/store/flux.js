const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchAllContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/jessm")
				.then(res => res.json())
				.then(data => setStore({contacts: data}))
			},
			fetchDeleteOneContact: (id) => {
				let options = {
					method: 'DELETE',
					body: JSON.stringify(id),
					headers: {'Content-Type': 'application/json'}
				}
				
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, options)
					.then(response => {
						if (!response.ok) throw Error(response.StatusText);
						return response;
					})
					.then(response => console.log("Successfully deleted", response))
			},
			fetchCreatOneContact: (newContact) => {
				let options = {
					method: 'POST',
					body: JSON.stringify(newContact),
					headers: {'Content-Type': 'application/json'}
				}
				
				fetch("https://playground.4geeks.com/apis/fake/contact/", options)
					.then(response => {
						if (!response.ok) throw Error(response.StatusText);
						return response;
					})
					.then(response => console.log("Successfully added", response))
				}
			},
			deleteContact: (id) => {
				const store = getStore();
				let revisedContactList = store.contacts.filter(contact => contact.id !== id);
				getActions().fetchDeleteOneContact(id);
				setStore({ contacts: revisedContactList });
			},
			saveContact: (fullName, address, phone, email) => {
				let newContact = {
					full_name: "Chuck Davis",
					email: "chuckd@aol.com",
					address: "5555 55 St, clearwater",
					phone: "(727)555-5555",
					agenda_slug: "jessm"
				}
				getActions().addContact(newContact);
			},
			addContact(aNewContact) {
					const store = getStore();
					let revisedStore = [...store.contacts, aNewContact];
					// getActions().fetchCreatOneContact(aNewContact);
					setStore({contacts: revisedStore});
				},
			};
		};

export default getState;
