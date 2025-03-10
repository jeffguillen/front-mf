import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRouter(){

    const [isAuth, setIsAuth] = useState(false);

    return isAuth ? <Outlet /> : <Navigate to="/" />

}