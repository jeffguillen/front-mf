export default function Nav(){

  let menu = JSON.parse(localStorage.getItem("perfil"));

  const menu_i =   menu.subgrupos.map((p) =>  <li className="nav-item" style={{ margin:'10px' }} >
    <a href={p.ruta}>
      {p.nombre}
    </a>
    
    </li> );

  console.log("menu", menu_i);

    return <ul className="nav flex-column nav-vertical" style={{ paddingTop:'30px' }} >
        {menu_i}

  </ul>

}