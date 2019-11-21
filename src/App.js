import React from 'react';
import SearchAppBar from './AppBar';
import NavTabs from "./Tabs";

const API_KEY = '03dc148ebd02cb8807a6e29f197cb618';
const json = require('./citylist');
const cityList = JSON.stringify(json);
class App extends React.Component {
    state = {
        data:undefined
    }

    getCityIDByName = (name) => {
        return cityList.filter(
            function(cityList) {
                return cityList.name === name;
            }
        );
    }

    getWeatherForecast = async (e) => {
        e.preventDefault();
        var temp = document.getElementById('city');
        console.log(temp);
        console.log(temp.value);
        const city = 'Delhi';//e.target.elements.city.value;
        let cityID = this.getCityIDByName(city);
        console.log("here"+cityID);
        const city_ID = 1273294;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city_ID}&appid=${API_KEY}&units=metric`);
        const res = await api_call.json();
        //console.log(res);
        this.setState({
           data: res
        });
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
