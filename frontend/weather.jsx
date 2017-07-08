import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {} ;

    this.getWeather = this.getWeather.bind(this);
  }

componentDidMount (){
  navigator.geolocation.getCurrentPosition(this.getWeather);
}

getWeather(pos){
  let latitude = pos.coords.latitude;
  let longitude = pos.coords.longitude;
  //
  // console.log(latitude);
  // console.log(longitude);
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bcb83c4b54aee8418983c2aff3073b3b`;

  if ("geolocation" in navigator) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = (weatherData) => {

      if (request.status >= 200 && request.status < 400){
        // console.log(request.responseText);
        this.setState( { weather: JSON.parse(request.responseText) } );
      }
    };
    request.onerror = function (){
      alert("location not received!");
    };
    request.send();

  } else {
    alert("location not available!");
  }

}

render () {
  let content = (() => {
  if (this.state === {}) {
    return <div>Loading weather!</div>;
  } else {
    return <div><h1>Weathe fails</h1><h2>{ this.state }</h2></div>;
  }
});
   return (
    {content}
   );

}
}


export default Weather;

// {this.state.weather.name}
// { this.state.weather.sys.country }
