import React, { Component } from "react";
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from './components/rank/Rank';
import FaceRecognition from './components/faceRecognition/FaceRecignition';
import './App.css';

const app = new Clarifai.App({
  apiKey: "6d84d1313e4d40a19b648303272fb6bb"
});

const particlesOptions =  {
  
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      }
  },
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

onInputChange = (event) => {
  this.setState({input: event.target.value})
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models
  .predict(
    Clarifai.FACE_DETECT_MODEL, 
    this.state.input)
  .then (
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {

    }
  )
}

  render() {
  return (
    <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
      
    </div>
  );
}
}

export default App;
