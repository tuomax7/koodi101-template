/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = process.env.ENDPOINT;

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getSensorDataFromBackend = async () => {
  try {
    const url = `${baseURL}/api/sensors`
    console.log("Getting sensor data from "+url)
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { greeting :"Could not get greeting from backend"};
};


const BackendGreeting = (props) => (
  <div><p>Backend says: {props.greeting}</p></div>
);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sensors: [],
    };
  }

  async componentWillMount() {
    const response = await getSensorDataFromBackend();
    this.setState({sensors: response.results});
  }

  render() {

    return (
        <table>
          <tr>
            <th>Aikaleima</th>
            <th>Lämpötila</th>
            <th>Kosteus</th>
          </tr>


            {this.state.sensors.map(sensorPoint => 
              <tr key={sensorPoint.id}>  
                <td>{sensorPoint.timestamp}</td>
                <td>{sensorPoint.temperature}</td>
                <td>{sensorPoint.humidity}</td>
              </tr>
            )}
        </table>
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
