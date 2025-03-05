import { useState } from 'react'
import axios from 'axios';
import { Outlet, Navigate } from "react-router-dom";

function LoginForm(){

const [user, setUser] = useState(null)


const login = async(e)=>{

e.preventDefault();

let res = await axios.post('http://localhost:10010/Auth', {"body":{user:''}}, {
headers: {
'Content-Type': 'multipart/form-data'
}
}
)

if(res.data.rows.token)
  {
    setUser({token:res.data.rows.token})
    localStorage.setItem("user", res.data.rows.token);
    console.log("token", res.data.rows.token)

    let perfiles = await axios.get('http://localhost:10010/TestFrontEnd/perfil?perfil=admin', {
      headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${res.data.rows.token}`
      }
      })

      localStorage.setItem("perfil", JSON.stringify(perfiles.data));

   //   console.log("perfiles", perfiles.data);

   setTimeout(() => {
    window.location.href = "/dashboard";
   }, 300);
  
    
  }

console.log("res122333", res.data.rows.token);
console.log("state", user);


}

return (
<form>

<h3>Login</h3>

    <div className="form-group" style={{marginTop:'10px'}}>
      
        <label>Usuario</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Usuario" />
 
    </div>
    <div className="form-group" style={{marginTop:'10px'}}>
        <label>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>

    <button type="submit" onClick={login} className="btn btn-primary" style={{marginTop:'10px'}} >Submit</button>
</form>
)

}

export default LoginForm;
