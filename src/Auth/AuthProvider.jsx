import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();

	const googleSignin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	useEffect(() => {
		const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
				setLoading(false);
				console.log({ currentUser });
			}
		});
		return () => {
			return unsubcribe();
		};
	}, []);

	const createUsers = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const SingIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const LogOut = () => {
		return signOut(auth);
	};
	const authInfo = {
		googleSignin,
		loading,
		user,
		createUsers,
		updateUserProfile,
		SingIn,
		LogOut,
		setUser,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
