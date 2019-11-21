import React from 'react';
import SearchAppBar from './AppBar';
import NavTabs from "./Tabs";

const API_KEY = '03dc148ebd02cb8807a6e29f197cb618';


const json = require('./citylist.json');
const obj = JSON.parse(JSON.stringify(json));

class App extends React.Component {
    state = {
        data: undefined
    }


    getWeatherForecast = async (e) => {
        e.preventDefault();
        let city = document.getElementById('city');

        const city_ID = obj[city.value];  //1273294
        if (city_ID) {
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${city_ID}&appid=${API_KEY}&units=metric`);
            const res = await api_call.json();

            this.setState({
                data: res
            });
        }
    }

    render() {
        return (
            <div className="App">
                <SearchAppBar getWeatherForecast={this.getWeatherForecast}/>
                <NavTabs data={this.state.data}/>
            </div>
        );
    }
}

export default App;
