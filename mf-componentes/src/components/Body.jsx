import axios from 'axios'
import { useState } from 'react';

export default function Body(){

    let resp = [];
    var m ;
    const [atencion, setAtencion] = useState(null);
    const buscarAtenciones = async (e) => {

        

        e.preventDefault();

        let user = localStorage.getItem("user");

        let res = await axios.get('http://localhost:10010/TestFrontEnd/listadoAtenciones', {
            headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${user}`
            }
            }
            )

            resp = res.data;

            console.log("attt", resp);

            setAtencion (resp.map((m) => <tr>
                <th scope="row">{m.codAtencion}</th>
            <td>{m.nombres}</td>
            <td>{m.nacFecha}</td>
            <td>{m.nroDocumento}</td>
            </tr> )) 

            console.log("m", m);


    }


    return <div className="boody_p" >

        <div className="container" style={{marginTop:'20x'}} >
            <div className="row">
                <div className="col-md-12"><h1>Listado de Pacientes</h1></div>
            </div>
            <div className="row" style={{marginTop:'30px'}}>
                <div className="col-md-3"><input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                <button onClick={buscarAtenciones} className="btn btn-primary">Listar Atenciones</button>
                </div>
            </div>
        </div>

        <div className="container" style={{marginTop:'30px'}}>
            <div className="row">
                <div className="col-md-12">
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#cod</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha nac.</th>
                            <th scope="col">Nro. Doc.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {  atencion }
                        </tbody>
                        </table>
                </div>
            </div>
        </div>

    </div>

}