import axios from 'axios';
import { useEffect, useState } from 'react';

export default () => {
  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      const res = await axios.get('https://kaushalam-full-stack-developer-task.vercel.app/?vercelToolbarCode=flhgh7ZL3AtGhv7/api/auth/is_logged_in');
      return res.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    (
      async () => {
        const data = await verifyAuth();
        setAuth(data);
      }
    )();
  }, []);

  return { auth };
};
