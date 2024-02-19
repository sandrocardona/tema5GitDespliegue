import React,{Component} from 'react';
import {Button} from 'reactstrap';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sino=(props)=>{
  return(<>
    <Card style={{width: '18rem'}}>
    <CardBody>
      <CardTitle tag="h5">
        {props.titulo}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {props.subtitulo}
      </CardSubtitle>
      <CardImg src={props.imagen}/>
      <CardText>
        {props.definicion}
      </CardText>
      <Button onClick={()=>props.cambiarFoto(props.rutaPopart)}>
        {props.popart}
      </Button>
      {' '}
      <Button onClick={()=>props.cambiarFoto(props.rutaGothic)}>
        {props.gotico}
      </Button>
    </CardBody>
  </Card>
  </>);
  
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      imagen: "./images/gothic.jpg",
      estilo: "Fotografía gótica en blanco y negro",
    }
  }

  f(btn){
    this.setState({imagen:btn})
      if(this.state.imagen==="./images/gothic.jpg"){
        this.setState({estilo:"Fotografía gótica en blanco y negro"})
      }
      else if(this.state.imagen==="./images/pop-art.jpg"){
        this.setState({estilo:"Diseño digital pop-art"})
      }

  }

  render(){
    return (
      <div className="App">
        <Sino
          imagen={this.state.imagen}
          titulo="Estilos artísticos"
          subtitulo={this.state.estilo}
          definicion="Los estilos artísticos demostrados a través de la pintura y la fotografía"
          popart="Pop-art"
          gotico="Gothic"
          rutaPopart="./images/pop-art.jpg"
          rutaGothic="./images/gothic.jpg"
          cambiarFoto={(x)=>this.f(x)}
        />
      </div>
    );
  }
}

export default App;

/* 
ROUTING
MODAL
HOOKS
PDF
DISPLAY VIRTUAL  
*/
