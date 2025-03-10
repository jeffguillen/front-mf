import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAl(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Alergias
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Declaratoria de Alergias</h4>
        <p>
          Principio Activo
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAl;