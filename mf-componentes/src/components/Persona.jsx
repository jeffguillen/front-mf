import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalAl from './ModalAl';

export default   function Persona(){

    const [acordion, setAcordion] = useState(null);
    const [paciente, setPaciente] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const queryParameters = new URLSearchParams(window.location.search)
    const param = queryParameters.get("param")
   
    let resultado = [];
    let paciente_res = [];
            let user = localStorage.getItem("user");
            if(!acordion){
                 axios.get('http://localhost:10010/TestFrontEnd/opcionesXAtencion?tipoAtencion=Ambulatorio', {
                        headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${user}`
                        }
                    }
                ).then(function(response){
                    console.log("rrr", response.data);
                    resultado = response.data;
                })

                setTimeout(() => {
                    console.log(" _e_", resultado);
                    setAcordion(
                        resultado.subgrupos.map((k, m) => 
                            <Accordion.Item eventKey={k}>
                                <Accordion.Header>{k.nombre}</Accordion.Header>
                                    <Accordion.Body>
                                        {k.nombre}
                                    </Accordion.Body>
                            </Accordion.Item>
                        )
                    )
    
                }, 1000);
                
            }

         
            if(paciente.length < 1){

                axios.get('http://localhost:10010/TestFrontEnd/datoPacientexAtencion?nroDocumento=48563217', {
                    headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${user}`
                    }
                }
                ).then(async function(response){
                    console.log("paciente", response.data);
                    paciente_res = response.data;
                    setPaciente(response.data);
                });

                setTimeout(() => {
                    console.log("paciente xxx", paciente);
                    console.log("paciente res", paciente_res);
                }, 1000);

            

            }
            
         
            const modal_alergias = () => {
                console.log("Alergias")
            }


    return ( <>

        <div style={{ height:'50px' }}></div>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header> <b>Datos del paciente &nbsp;</b> {paciente.nombres} {paciente.apePaterno}  &nbsp;&nbsp;&nbsp; <b>Sexo: &nbsp;</b> {paciente.sexo} </Accordion.Header>
                <Accordion.Body>
                    <h3>Datos del paciente</h3>
                    <hr />
                    <div className="container c_paciente">
                        <div className="row">
                            <div className="col-md-3"><b>Nombres</b> <br /> <span>{paciente.nombres} </span></div>
                            <div className="col-md-3"><b>apellidos</b> <br /> <span>{paciente.apePaterno} {paciente.apeMaterno} </span></div>
                            <div className="col-md-3"><b>Tipo Documento</b> <br /> <span>{paciente.tipoDocumento} </span></div>
                            <div className="col-md-3"><b>Alergias</b> <br /> <button  onClick={() => setModalShow(true)}  >PRESENTA ALERGIAS</button></div>
                            <div className="col-md-3"><b>N° Documento</b> <br /> <span>{paciente.nroDocumento} </span></div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <div style={{ height:'20px' }}></div>
        <Accordion defaultActiveKey="0" flush>
           {acordion}
      </Accordion>

   <ModalAl show={modalShow} onHide={() => setModalShow(false)} />

    </> 

        
    )
}