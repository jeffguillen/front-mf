import axios from 'axios'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

function infoPaciente(p){
    console.log("ppp", p);
}

export default function Principal(){

    let resp = [];
    var m ;
    const [atencion, setAtencion] = useState([]);

 

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

            setAtencion(resp.map((m) => 
                m
            ));

            console.log("atencion", atencion);

        /*    setAtencion (resp.map((m) => <tr>
                <th scope="row">{m.codAtencion}</th>
            <td>{m.nroDocumento}</td>
            <td> {m.nombres} {m.apePaterno} {m.apeMaterno}  </td>
            <td>{m.fechaCita}</td>
            <td>{m.horaLlegada}</td>
            <td>{m.tipoAtencion}</td>
            <td>{m.estadoAtencion}</td>
            <td><a href="#" onClick={infoPaciente(m.nroDocumento)}  > <FaEdit></FaEdit> </a></td>
            </tr> )) 
        */

        }

    

    return <div className="boody_p" >
    
            <div className="container" >
                <div className="row"  >
                    <div className="col-md-12 camp_pac" ><h1>Mis Pacientes</h1></div>
                    <span className='cl_span'>Tu lista de pacientes agendados para el dia de hoy</span>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <input type="text" className='input_search' />
                        <button onClick={buscarAtenciones}  className='btn_search' ><CiSearch /></button>
                    </div>
                    <div className="col-md-3">
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
                                <th scope="col">DNI / CE</th>
                                <th scope="col">Nombres y Apellidos</th>
                                <th scope="col">Fecha cita </th>
                                <th scope="col">Hora Llegada </th>
                                <th scope="col">Tipo Atención </th>
                                <th scope="col">Estado </th>
                                <th scope="col"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    atencion.map((m) => <tr>
                                    <th scope="row">{m.codAtencion}</th>
                                <td>{m.nroDocumento}</td>
                                <td> {m.nombres} {m.apePaterno} {m.apeMaterno}  </td>
                                <td>{m.fechaCita}</td>
                                <td>{m.horaLlegada}</td>
                                <td>{m.tipoAtencion}</td>
                                <td>{m.estadoAtencion}</td>
                                <td><a href="#" onClick={ () => { window.location.href = "/dashboard?param="+m.nroDocumento ; }}  > <FaEdit></FaEdit> </a></td>
                                </tr> )
                                }
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
    
        </div>

}