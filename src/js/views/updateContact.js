import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";

const UpdateContact = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [inputFullName, setInputFullName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputAddress, setInputAddress] = useState("");
    const { id, setId } = useState();
    return (

        <>
            <h1 className="addContactHeader">Update A Contact</h1>
            <form className="addContact-form">
                <div className="form-group">
                    <label htmlFor="FullName-form"><strong>Full Name</strong></label>
                    <input type="text" className="form-control"
                        id="FullName-form" placeholder="Enter Full Name"
                        onChange={event => setInputFullName(event.target.value)}
                        value={inputFullName}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="Email-form"><strong>Email</strong></label>
                    <input type="text" className="form-control"
                        id="Email-form" placeholder="Enter Email"
                        onChange={event => setInputEmail(event.target.value)}
                        value={inputEmail}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="Phone-form"><strong>Phone</strong></label>
                    <input type="text" className="form-control"
                        id="Phone-form" placeholder="Enter Phone Number"
                        onChange={event => setInputPhone(event.target.value)}
                        value={inputPhone}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="Address-form"><strong>Address</strong></label>
                    <input type="text" className="form-control"
                        id="Address-form" placeholder="Enter Address"
                        onChange={event => setInputAddress(event.target.value)}
                        value={inputAddress}></input>
                </div>

            </form>
            <button type="button" className="btn btn-primary btn-lg btn-block"
                id="saveContactButton" onClick={() => actions.fetchUpdateOneContact(inputFullName, inputEmail, inputPhone, inputAddress, id)}
            >Save Contact</button>
            <button className="navigateButton" onClick={() => navigate("/")}>Take me back to Contacts</button>

        </>
    );
}

export default UpdateContact;