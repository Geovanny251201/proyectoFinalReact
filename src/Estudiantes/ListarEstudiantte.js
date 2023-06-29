import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ListarEstudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      datosCursos: [],
      show: false,
      id: "",
      cedula: "",
      correoelectronico: "",
      telefono: "",
      telefonocelular: "",
      fechanacimiento: "",
      sexo: "",
      direccion: "",
      nombre: "",
      apellidopaterno: "",
      apellidomaterno: "",
      nacionalidad: "",
      idCarreras: "",
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
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")
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
    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php", {
      method: "POST",
      body: JSON.stringify(datosId)
    })
      .then(function (respuesta) {
        return respuesta.json();
      })
      .catch(function (error) {
        console.log(error);
        window.location = 'ListarEstudiantes';
      });

    console.log(id);
  }

  editar(objeto) {
    console.log(objeto);
    this.setState({
      id: objeto.id,
      cedula: objeto.cedula,
      correoelectronico: objeto.correoelectronico,
      telefono: objeto.telefono,
      telefonocelular: objeto.telefonocelular,
      fechanacimiento: objeto.fechanacimiento,
      sexo: objeto.sexo,
      direccion: objeto.direccion,
      nombre: objeto.nombre,
      apellidopaterno: objeto.apellidopaterno,
      apellidomaterno: objeto.apellidomaterno,
      nacionalidad: objeto.nacionalidad,
      idCarreras: objeto.idCarreras,
      usuario: objeto.usuario
    });
    this.handleShow(true);
  }

  cambioValor = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  }

  enviarDatos = (e) => {
    e.preventDefault();
    const {
      id,
      cedula,
      correoelectronico,
      telefono,
      telefonocelular,
      fechanacimiento,
      sexo,
      direccion,
      nombre,
      apellidopaterno,
      apellidomaterno,
      nacionalidad,
      idCarreras,
      usuario
    } = this.state;
    var datosenviar = {
      id: id,
      cedula: cedula,
      correoelectronico: correoelectronico,
      telefono: telefono,
      telefonocelular: telefonocelular,
      fechanacimiento: fechanacimiento,
      sexo: sexo,
      direccion: direccion,
      nombre: nombre,
      apellidopaterno: apellidopaterno,
      apellidomaterno: apellidomaterno,
      nacionalidad: nacionalidad,
      idCarreras: idCarreras,
      usuario: usuario
    };
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php", {
      method: "POST",
      body: JSON.stringify(datosenviar)
    })
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datosrespuesta) {
        window.location = "ListarEstudiantes";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const {
      datosCargados,
      datosCursos,
      show,
      id,
      cedula,
      correoelectronico,
      telefono,
      telefonocelular,
      fechanacimiento,
      sexo,
      direccion,
      nombre,
      apellidopaterno,
      apellidomaterno,
      nacionalidad,
      idCarreras,
      usuario
    } = this.state;

    return (
      <>
        <div className='m-3'>
          <h1>Listar Curso</h1>
          <div className="table-responsive">
            <table className="table table-primary">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Cédula</th>
                  <th scope="col">Correo Electrónico</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Teléfono Celular</th>
                  <th scope="col">Fecha de Nacimiento</th>
                  <th scope="col">Sexo</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido Paterno</th>
                  <th scope="col">Apellido Materno</th>
                  <th scope="col">Nacionalidad</th>
                  <th scope="col">ID Carreras</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datosCargados &&
                  datosCursos.map((datosExtraidos) => (
                    <tr key={datosExtraidos.id}>
                      <td>{datosExtraidos.id}</td>
                      <td>{datosExtraidos.cedula}</td>
                      <td>{datosExtraidos.correoelectronico}</td>
                      <td>{datosExtraidos.telefono}</td>
                      <td>{datosExtraidos.telefonocelular}</td>
                      <td>{datosExtraidos.fechanacimiento}</td>
                      <td>{datosExtraidos.sexo}</td>
                      <td>{datosExtraidos.direccion}</td>
                      <td>{datosExtraidos.nombre}</td>
                      <td>{datosExtraidos.apellidopaterno}</td>
                      <td>{datosExtraidos.apellidomaterno}</td>
                      <td>{datosExtraidos.nacionalidad}</td>
                      <td>{datosExtraidos.idCarreras}</td>
                      <td>{datosExtraidos.usuario}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => this.editar(datosExtraidos)}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => this.eliminar(datosExtraidos.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Estudiante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.enviarDatos}>
              <input type="hidden" name="id" value={id} />
              <div className="form-group">
                <label>Cédula:</label>
                <input
                  type="text"
                  className="form-control"
                  name="cedula"
                  onChange={this.cambioValor}
                  value={cedula}
                />
              </div>
              <div className="form-group">
                <label>Correo Electrónico:</label>
                <input
                  type="email"
                  className="form-control"
                  name="correoelectronico"
                  onChange={this.cambioValor}
                  value={correoelectronico}
                />
              </div>
              <div className="form-group">
                <label>Teléfono:</label>
                <input
                  type="text"
                  className="form-control"
                  name="telefono"
                  onChange={this.cambioValor}
                  value={telefono}
                />
              </div>
              <div className="form-group">
                <label>Teléfono Celular:</label>
                <input
                  type="text"
                  className="form-control"
                  name="telefonocelular"
                  onChange={this.cambioValor}
                  value={telefonocelular}
                />
              </div>
              <div className="form-group">
                <label>Fecha de Nacimiento:</label>
                <input
                  type="text"
                  className="form-control"
                  name="fechanacimiento"
                  onChange={this.cambioValor}
                  value={fechanacimiento}
                />
              </div>
              <div className="form-group">
                <label>Sexo:</label>
                <input
                  type="text"
                  className="form-control"
                  name="sexo"
                  onChange={this.cambioValor}
                  value={sexo}
                />
              </div>
              <div className="form-group">
                <label>Dirección:</label>
                <input
                  type="text"
                  className="form-control"
                  name="direccion"
                  onChange={this.cambioValor}
                  value={direccion}
                />
              </div>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  onChange={this.cambioValor}
                  value={nombre}
                />
              </div>
              <div className="form-group">
                <label>Apellido Paterno:</label>
                <input
                  type="text"
                  className="form-control"
                  name="apellidopaterno"
                  onChange={this.cambioValor}
                  value={apellidopaterno}
                />
              </div>
              <div className="form-group">
                <label>Apellido Materno:</label>
                <input
                  type="text"
                  className="form-control"
                  name="apellidomaterno"
                  onChange={this.cambioValor}
                  value={apellidomaterno}
                />
              </div>
              <div className="form-group">
                <label>Nacionalidad:</label>
                <input
                  type="text"
                  className="form-control"
                  name="nacionalidad"
                  onChange={this.cambioValor}
                  value={nacionalidad}
                />
              </div>
              <div className="form-group">
                <label>ID Carreras:</label>
                <input
                  type="text"
                  className="form-control"
                  name="idCarreras"
                  onChange={this.cambioValor}
                  value={idCarreras}
                />
              </div>
              <div className="form-group">
                <label>Usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  name="usuario"
                  onChange={this.cambioValor}
                  value={usuario}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ListarEstudiantes;
