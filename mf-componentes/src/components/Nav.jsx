import { FaArrowRight } from "react-icons/fa6";

export default function Nav(){

  let menu = JSON.parse(localStorage.getItem("perfil"));

  const menu_i =   menu.subgrupos.map((p) =>  <a href={p.ruta} className="sidebar-link active text-decoration-none p-3">
  <FaArrowRight />
  <span className="hide-on-collapse"> {p.nombre}</span>
</a> );

  console.log("menu", menu_i);

    return <>
    <div className="p-4">
                        <h4 className="logo-text fw-bold mb-0">Dashboard</h4>
                        <p className="text-muted small hide-on-collapse">Prueba de sistema</p>
                    </div>

                    <div className="nav flex-column">
                        {menu_i}
                    </div>

                    <div className="profile-section mt-auto p-4">
                        <div className="d-flex align-items-center">
                            <div className="ms-3 profile-info">
                            </div>
                        </div>
                    </div>
    </>
    

}