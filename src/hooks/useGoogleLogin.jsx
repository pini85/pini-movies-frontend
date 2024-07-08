import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/user.slice.ts';

const useGoogleLogin = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleGoogle = async (response) => {
    setLoading(true);
    try {
      const credentialsResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: response.credential }),
      });
      const data = await credentialsResponse.json();
      localStorage.setItem('authToken', data.token);
      dispatch(setUser(data.user));
    } catch (e) {
      setError(e.message);
    }
  };
  return { loading, error, handleGoogle };
};

export default useGoogleLogin;
