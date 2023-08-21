import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			inputFullName: "",
			inputEmail: "",
			inputPhone: "",
			inputAddress: ""
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
			fetchCreatOneContact: (inputFullName, inputAddress, inputPhone, inputEmail) => {
				let options = {
					method: 'POST',
					body: JSON.stringify({
						full_name: inputFullName,
						email: inputEmail,
						address: inputAddress,
						phone: inputPhone,
						agenda_slug: "jessm"
					}),
					headers: {'Content-Type': 'application/json'}
				}
				
				fetch("https://playground.4geeks.com/apis/fake/contact/", options)
					.then(response => {
						if (!response.ok) throw Error(response.StatusText);
						const store = getStore();
						let revisedStore = [...store.contacts, aNewContact];
						setStore({contacts: revisedStore});
						return response;
					})
					.then(response => console.log("Successfully added", response))
			},
			fetchUpdateOneContact: (inputFullName, inputAddress, inputPhone, inputEmail, id) => {
				let options = {
					method: 'PUT',
					body: JSON.stringify({
						full_name: inputFullName,
						email: inputEmail,
						address: inputAddress,
						phone: inputPhone,
						agenda_slug: "jessm"
					}),
					headers: {'Content-Type': 'application/json'}
				}
				
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, options)
					.then(response => {
						if (!response.ok) throw Error(response.StatusText);
						getActions().fetchAllContacts
						return response;
					})
					.then(response => console.log("Successfully added", response))
			},
			deleteContact: (id) => {
				const store = getStore();
				let revisedContactList = store.contacts.filter(contact => contact.id !== id);
				getActions().fetchDeleteOneContact(id);
				setStore({ contacts: revisedContactList });
			},
			// saveContact: (inputFullName, inputAddress, inputPhone, inputEmail) => {
			// 	const store = getStore();
			// 	let newContact = {
			// 		full_name: inputFullName,
			// 		email: inputEmail,
			// 		address: inputAddress,
			// 		phone: inputPhone,
			// 		agenda_slug: "jessm"
			// 	}
			// 	getActions().addContact(newContact);
			// },
			// addContact(aNewContact) {
			// 		const store = getStore();
			// 		let revisedStore = [...store.contacts, aNewContact];
			// 		getActions().fetchCreatOneContact(aNewContact);
			// 		setStore({contacts: revisedStore});
			// },
			editContact: (id) => {
				getActions().deleteContact(id);
			}
			},
		};
	}
export default getState;
