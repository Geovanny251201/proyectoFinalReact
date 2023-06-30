
import React from "react";
class CrearCurso  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nombre: "",
            descripcion:"",
            tiempo:"",
            datosCargados:false


        }
    }
    cambioValor=(e)=>{

        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state})
    }
    enviarDatos=(e)=>{
        e.preventDefault();
        const {nombre,descripcion, tiempo}=this.state;
        var datosenviar={
            nombre:nombre,
            descripcion:descripcion,
            tiempo:tiempo,
            usuario:"profesor Mario"
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php", {
            method: "POST",
            body: JSON.stringify(datosenviar),
        })
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {
            
           console.log('Datos',datosrespuesta)
           window.location='ListarCurso'  
        })
        .catch(console.log);
        }
    
    
  
    render() { 
        const {nombre,descripcion, tiempo,datosCargados}=this.state;
        return (
            <div style={{ display: "flex", justifyContent: "center" }} className='m-5'>
            <form id="formulario" onSubmit={this.enviarDatos} style={{ width: "300px" }}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control form-control-sm" name="nombre" id="nombre" placeholder="Ingrese su nombre" onChange={this.cambioValor} value={nombre} required />
                    <small className="form-text text-muted">Ingrese su nombre</small>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <input type="text" className="form-control form-control-sm" name="descripcion" id="descripcion" placeholder="Ingrese su descripción" onChange={this.cambioValor} value={descripcion} required />
                    <small className="form-text text-muted">Ingrese su descripción</small>
                </div>
                <div className="form-group">
                    <label htmlFor="tiempo">Tiempo</label>
                    <input type="text" className="form-control form-control-sm" name="tiempo" id="tiempo" placeholder="Ingrese el tiempo" onChange={this.cambioValor} value={tiempo} required />
                    <small className="form-text text-muted">Ingrese el tiempo</small>
                </div>                          
                <div className="form-group">
                    
                    <button type="submit" className="btn btn-success">Guardar</button>
                </div>
            </form>
        </div>
        
        
        


          );
    }
}
 
export default CrearCurso ;
