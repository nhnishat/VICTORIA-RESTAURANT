import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../hooks/useAuth';

const GoogleSingin = () => {
	const { googleSignin } = useAuth();
	const handleGoogleSingIn = () => {
		googleSignin();
	};
	return (
		<button onClick={handleGoogleSingIn} className="btn w-full mt-3">
			<div className="flex items-center gap-2">
				<FaGoogle size={24} className="text-red-500" />
				<p>Google</p>
			</div>
		</button>
	);
};

export default GoogleSingin;
