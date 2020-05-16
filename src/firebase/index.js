/* eslint-disable */

import app from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCdkaIucWCCllHLbiRJU7mJ4iDbVWzgV9Q",
	authDomain: "vuejs-firebase-auth-2e074.firebaseapp.com",
	databaseURL: "https://vuejs-firebase-auth-2e074.firebaseio.com",
	projectId: "vuejs-firebase-auth-2e074",
	storageBucket: "vuejs-firebase-auth-2e074.appspot.com",
	messagingSenderId: "407161727669",
	appId: "1:407161727669:web:871187e738fe5d22022cfc",
	measurementId: "G-PYXY3FND63",
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);

		this.auth = app.auth();
	}

	//Auth API
	createUser = (email, password) => {
		this.auth.createUserWithEmailAndPassword(email, password);
	};

	loginUser = (email, password) => {
		this.auth.signInWithEmailAndPassword(email, password);
	};

	resetPassword = (email) => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;
