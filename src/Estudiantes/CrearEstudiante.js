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

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
      method: "POST",
      body: JSON.stringify(datosenviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log("Datos", datosrespuesta);
        window.location = "ListarEstudiantte";
      })
      .catch(console.log);
  };

  render() {
    const {
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
        <div style={{ display: "flex", justifyContent: "center" }} className='m-5'>
        <form
          id="formulario"
          onSubmit={this.enviarDatos}
          style={{ width: "900px" }}
        >
          <div className="row ">
            <div className="col">
              
              <div className="form-group">
                <label htmlFor="cedula">Ingrese su cédula</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="correoelectronico">Ingrese su correo electrónico</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Ingrese su teléfono</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="telefonocelular">Ingrese su teléfono celular</label>
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
                <label htmlFor="direccion">Ingrese su dirección</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="nombre">Ingrese su nombre</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="apellidopaterno">Ingrese su apellido paterno</label>
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
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="apellidomaterno">Ingrese su apellido materno</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="nacionalidad">Ingrese su nacionalidad</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="idCarreras">Ingrese el ID de Carreras</label>
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
              </div>
              <div className="form-group">
                <label htmlFor="usuario">Ingrese el usuario</label>
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
