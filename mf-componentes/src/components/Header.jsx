import { GrPowerShutdown } from "react-icons/gr";

export default function Header(){


  const cerrarSession = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("perfil");
    window.location.href = "/";

  }


    return <>
    <div className="container">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2"> <span className="link_header" >Perfil : Admin</span> </div>
                                    <div className="col-md-2">
                                       <a href="#" className="link_header" onClick={cerrarSession} > <GrPowerShutdown /> Cerrar Session</a>  
                                        </div>
                                </div>
                            </div>
    </>
    ;

}