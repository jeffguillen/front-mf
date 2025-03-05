export default function Header(){

    return <ul className="nav justify-content-end" style={{background:'#f2f2f2'}} >
    <li className="nav-item">
      <a className="nav-link active" href="#">Active</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#">Cerrar Session</a>
    </li>
  </ul>
    ;

}