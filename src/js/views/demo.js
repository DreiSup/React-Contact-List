import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [ fullName, setFullName ] = useState("");
	const [ emailAdress, setEmailAdress ] = useState("");
	const [ phoneNumber, setPhoneNumber ] = useState("");
	const [ homeAdress, setHomeAdress ] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log(fullName)
		actions.createContact(fullName, emailAdress, phoneNumber, homeAdress);
		setFullName("");
		setEmailAdress("");
		setPhoneNumber("");
		setHomeAdress("");
		
	}

	return (
		<div className="container">
			
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<div className="mb-3 ">
						<label htmlFor="fullName" className="form-label">Full Name</label>
						<input 
						type="text"
						className="form-control" 
						id="fullName" 
						aria-describedby="fullName" 
						placeholder="Your name here"
						value={fullName}
						onChange={e => setFullName (e.target.value)}
						/>			
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<input
						type="email" 
						className="form-control" 
						id="emailAdress" 
						aria-describedby="email" 
						placeholder="Your email here"
						value={emailAdress}
						onChange={e => setEmailAdress (e.target.value)}
						/>
						<div id="exampleEmail" className="form-text"></div>
					</div>
					<div className="mb-3">
						<label htmlFor="phone" className="form-label">Phone</label>
						<input 
						type="text" 
						className="form-control" 
						id="phoneNumber" 
						aria-describedby="phone" 
						placeholder="Your phone number here"
						value={phoneNumber}
						onChange={e => setPhoneNumber (e.target.value)}
						/>
						<div id="examplePhone" className="form-text"></div>
					</div>
					<div className="mb-3">
						<label htmlFor="adress" className="form-label">Adress</label>
						<input 
						type="text" 
						className="form-control" 
						id="homeAdress" 
						aria-describedby="adress" 
						placeholder="Your adress here"
						value={homeAdress}
						onChange={e => setHomeAdress (e.target.value)}
						/>
						<div id="exampleAdress" className="form-text"></div>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
					
			</form>

			{/* <button onClick={() => console.log(fullName)}>Mostrar datos</button> */}
			<div className="linkToHome">
				<Link to="/">
					<button className="btn btn-outline-dark" id="backHome">Back home</button>
				</Link>
			</div>
			
		</div>
	);
};
