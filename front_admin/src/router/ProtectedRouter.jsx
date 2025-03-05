
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRouter(){

        const [isAuth, setIsAuth] = useState(false);

        const storedUserData = localStorage.getItem('user');

        return storedUserData ? <Outlet /> : <Navigate to="/" />;

}