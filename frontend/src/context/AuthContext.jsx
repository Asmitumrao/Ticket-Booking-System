// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";
const server_url = import.meta.env.VITE_SERVER_URL;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    console.log("fetching user...");
    try {
      const res = await axios.get(`${server_url}/api/v1/auth/status`, { withCredentials: true });
      console.log("res->", res.data);
      if (res.data.success) setUser(res.data.user);
      else setUser(null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading,setUser,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider,AuthContext};
export default AuthContext;
