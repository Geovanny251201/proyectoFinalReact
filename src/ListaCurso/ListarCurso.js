import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ListarCurso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      datosCursos: [],
      show: false,
      nombre: "",
      descripcion: "",
      tiempo: "",
      id: "",
      usuario: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")
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
    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
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
    this.setState({ nombre: objeto.nombre, descripcion: objeto.descripcion, tiempo: objeto.tiempo, id: objeto.id, usuario: objeto.usuario })
    this.handleShow(true)
  }
 

  cambioValor = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state })
  }

  enviarDatos = (e) => {
    e.preventDefault();
    const { id, nombre, descripcion, tiempo, usuario } = this.state;
    var datosenviar = {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      tiempo: tiempo,
      usuario: "profesor Mario"
    };
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php", {
      method: "POST",
      body: JSON.stringify(datosenviar)
         })
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datosrespuesta) {
      window.location="ListarCurso"
          
  })
        .catch(function (error) {
            console.log(error);
  });






  };

  render() {
    const { datosCargados, datosCursos, show, nombre, descripcion, tiempo, id, usuario } = this.state;

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
                  <th scope="col">Descripcion</th>
                  <th scope="col">Tiempo</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  datosCargados && datosCursos.map(
                    (datosExtraidos) => (
                      <tr key={datosExtraidos.id} className='table-primary'>
                        <td scope="row">{datosExtraidos.id}</td>
                        <td> {datosExtraidos.nombre}</td>
                        <td> {datosExtraidos.descripcion}</td>
                        <td> {datosExtraidos.tiempo}</td>
                        <td> {datosExtraidos.usuario}</td>
                        <td>
                          <a name="" id='' className='btn btn-danger' onClick={() => this.eliminar(datosExtraidos.id)} role="button">Borrar</a>
                          <a name="" id='' className='btn btn-primary' onClick={() => this.editar(datosExtraidos)} role="button">Editar</a>
                        </td>
                      </tr>
                    )
                  )
                }
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
                    <div className="col-md-6 mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="nombre" name="nombre" onChange={this.cambioValor} value={nombre} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="descripcion" className="form-label">Descripcion</label>
                      <input onChange={this.cambioValor} value={descripcion} type="text" className="form-control" id="descripcion" name="descripcion" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="tiempo" className="form-label">Tiempo</label>
                      <input onChange={this.cambioValor} value={tiempo} type="text" className="form-control" id="tiempo" name="tiempo" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="usuario" className="form-label">Usuario</label>
                      <input onChange={this.cambioValor} value={usuario} type="text" className="form-control" id="usuario" name="usuario" />
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

export default ListarCurso;
