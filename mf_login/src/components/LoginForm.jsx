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

   setTimeout(() => {
    window.location.href = "/dashboard";
   }, 300);
  
    
  }


}

return (

  <div className="container login-container">
  <div className="row">
      <div className="col-md-6 login-form-1">
          <h3>Iniciar sesión</h3>
          <form>
              <div className="form-group" style={{ marginTop:'12px' }}>
                  <input type="text" className="form-control" placeholder="Ingresa tu usuario" value="" />
              </div>
              <div className="form-group" style={{ marginTop:'12px' }} >
                  <input type="password" className="form-control" placeholder="Ingresa tu contraseña" value="" />
              </div>
              <div className="form-group" style={{ marginTop:'12px' }}>
                  <input type="submit" className="btnSubmit" onClick={login} value="Ingresar" />
              </div>
              <div className="form-group">
              </div>
          </form>
      </div>
      <div className="col-md-6 login-form-2">
          <h3>LOGO</h3>
          
      </div>
  </div>
</div>

)

}

export default LoginForm;
