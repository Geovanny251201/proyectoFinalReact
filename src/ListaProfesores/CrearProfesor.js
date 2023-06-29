import React from "react";

class CrearEstudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      usuario: "",
    };
  }

  cambioValor = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

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
      usuario,
    } = this.state;

    const datosenviar = {
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
      usuario: usuario,
    };

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php", {
      method: "POST",
      body: JSON.stringify(datosenviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log("Datos", datosrespuesta);
        window.location = "ListarProfesor";
      })
      .catch(console.log);
  };

  render() {
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
      usuario,
    } = this.state;

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          id="formulario"
          onSubmit={this.enviarDatos}
          style={{ width: "900px" }}
        >
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="id"
                  id="id"
                  placeholder="Ingrese el ID"
                  onChange={this.cambioValor}
                  value={id}
                  required
                />
                <small className="form-text text-muted">Ingrese el ID</small>
              </div>
              <div className="form-group">
                <label htmlFor="cedula">Cédula</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="cedula"
                  id="cedula"
                  placeholder="Ingrese su cédula"
                  onChange={this.cambioValor}
                  value={cedula}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su cédula
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="correoelectronico">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  name="correoelectronico"
                  id="correoelectronico"
                  placeholder="Ingrese su correo electrónico"
                  onChange={this.cambioValor}
                  value={correoelectronico}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su correo electrónico
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingrese su teléfono"
                  onChange={this.cambioValor}
                  value={telefono}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su teléfono
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="telefonocelular">Teléfono Celular</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="telefonocelular"
                  id="telefonocelular"
                  placeholder="Ingrese su teléfono celular"
                  onChange={this.cambioValor}
                  value={telefonocelular}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su teléfono celular
                </small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="fechanacimiento">Fecha de Nacimiento</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  name="fechanacimiento"
                  id="fechanacimiento"
                  onChange={this.cambioValor}
                  value={fechanacimiento}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sexo">Sexo</label>
                <select
                  className="form-control form-control-sm"
                  name="sexo"
                  id="sexo"
                  onChange={this.cambioValor}
                  value={sexo}
                  required
                >
                  <option value="">Seleccione el sexo</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="direccion"
                  id="direccion"
                  placeholder="Ingrese su dirección"
                  onChange={this.cambioValor}
                  value={direccion}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su dirección
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  onChange={this.cambioValor}
                  value={nombre}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su nombre
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="apellidopaterno">Apellido Paterno</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="apellidopaterno"
                  id="apellidopaterno"
                  placeholder="Ingrese su apellido paterno"
                  onChange={this.cambioValor}
                  value={apellidopaterno}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su apellido paterno
                </small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="apellidomaterno">Apellido Materno</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="apellidomaterno"
                  id="apellidomaterno"
                  placeholder="Ingrese su apellido materno"
                  onChange={this.cambioValor}
                  value={apellidomaterno}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su apellido materno
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="nacionalidad">Nacionalidad</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="nacionalidad"
                  id="nacionalidad"
                  placeholder="Ingrese su nacionalidad"
                  onChange={this.cambioValor}
                  value={nacionalidad}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese su nacionalidad
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="idCarreras">ID Carreras</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="idCarreras"
                  id="idCarreras"
                  placeholder="Ingrese el ID de Carreras"
                  onChange={this.cambioValor}
                  value={idCarreras}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese el ID de Carreras
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="usuario">Usuario</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="usuario"
                  id="usuario"
                  placeholder="Ingrese el usuario"
                  onChange={this.cambioValor}
                  value={usuario}
                  required
                />
                <small className="form-text text-muted">
                  Ingrese el usuario
                </small>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    );
  }
}

export default CrearEstudiante;
