import React from "react";


class Inicio  extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <div className="container-flex ">
                <div className='m-3'>
                    <h1>Proyecto React</h1>
                    <p>Integrantes</p>
                    <li>
                        Geovanny Araya Jiménez
                     
                    </li>
                    <li>
                       
                        Laureano Guerrero Vega
                       
                    </li>
                    <li>
                      
                        Jeff Ureña
                    </li>
                </div>
            </div>



         );
    }
}
 
export default Inicio ;