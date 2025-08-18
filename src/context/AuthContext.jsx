import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  username: null,
};


function AuthProvider() {
  const [state, dispatch] = useReducer(authReducer, initialState);
}

export default AuthProvider;

