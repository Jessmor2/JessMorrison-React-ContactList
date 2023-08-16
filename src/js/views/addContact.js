import React from "react";

const AddContact = () => {

    return (
        <>
            <h1 className="addContactHeader">Add A New Contact</h1>
            <form className="addContact-form">
                <div class="form-group">
                    <label for="FullName-form">Full Name</label>
                    <input type="text" class="form-control" id="FullName-form" placeholder="Full Name"></input>
                </div>
                <div class="form-group">
                    <label for="Email-form">Email</label>
                    <input type="text" class="form-control" id="Email-form" placeholder="Enter Email"></input>
                </div>
                <div class="form-group">
                    <label for="Phone-form">Phone Number</label>
                    <input type="text" class="form-control" id="Phone-form" placeholder="Enter Phone Number"></input>
                </div>
                <div class="form-group">
                    <label for="Address-form">Address</label>
                    <input type="text" class="form-control" id="Address-form" placeholder="Enter Address"></input>
                </div>
                
                </form>
        </>
    );
}

export default AddContact;