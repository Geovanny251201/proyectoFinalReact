import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ListarGrupos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      datosCursos: [],
      show: false,
      id: "",
      nombre: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
      .then(respuesta => respuesta.json())
      .then((datosrepuesta) => {
        this.setState({ datosCargados: true, datosCursos: datosrepuesta.data });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.cargarDatos();
  }

  eliminar(id) {
    var datosId = {
      id: id,
    };
    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php", {
      method: "POST",
      body: JSON.stringify(datosId)
    })
      .then(function (respuesta) {
        return respuesta.json();
      })
      .catch(function (error) {
        console.log(error);
        window.location = 'ListarCursos';
      });

    console.log(id);
  }

  editar(objeto) {
    console.log(objeto);
    this.setState({ id: objeto.id, nombre: objeto.nombre });
    this.handleShow(true);
  }
 

  cambioValor = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  enviarDatos = (e) => {
    e.preventDefault();
    const { id, nombre } = this.state;
    var datosenviar = {
      id: id,
      nombre: nombre
    };
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php", {
      method: "POST",
      body: JSON.stringify(datosenviar)
    })
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datosrespuesta) {
        window.location = "ListarCurso";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { datosCargados, datosCursos, show, id, nombre } = this.state;

    return (
      <>
        <div className='container'>
          <h1>Listar Curso</h1>
          <div className="table-responsive">
            <table className="table table-primary">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datosCargados &&
                  datosCursos.map((datosExtraidos) => (
                    <tr key={datosExtraidos.id} className='table-primary'>
                      <td scope="row">{datosExtraidos.id}</td>
                      <td> {datosExtraidos.nombre}</td>
                      <td>
                        <a
                          name=""
                          id=''
                          className='btn btn-danger'
                          onClick={() => this.eliminar(datosExtraidos.id)}
                          role="button"
                        >
                          Borrar
                        </a>
                        <a
                          name=""
                          id=''
                          className='btn btn-primary'
                          onClick={() => this.editar(datosExtraidos)}
                          role="button"
                        >
                          Editar
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal Editar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form id="form-estudiantes" onSubmit={this.enviarDatos}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        onChange={this.cambioValor}
                        value={nombre}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.handleClose}>
                    Cerrar
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Reset
                  </button>
                  <button id="btnActualizar" type="submit" className="btn btn-primary">
                    Guardar cambios
                  </button>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}

export default ListarGrupos;
