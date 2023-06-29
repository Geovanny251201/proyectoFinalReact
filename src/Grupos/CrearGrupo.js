import React from "react";

class CrearGrupo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nombre: ""
    };
  }

  cambioValor = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  enviarDatos = (e) => {
    e.preventDefault();
    const { id, nombre } = this.state;
    var datosenviar = {
      id: id,
      nombre: nombre
    };

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php", {
      method: "POST",
      body: JSON.stringify(datosenviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log('Datos', datosrespuesta);
        window.location = 'ListarGrupos';
      })
      .catch(console.log);
  };

  render() {
    const { id, nombre } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          id="formulario"
          onSubmit={this.enviarDatos}
          style={{ width: "300px" }}
        >
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
            <small className="form-text text-muted">Ingrese su nombre</small>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CrearGrupo;
