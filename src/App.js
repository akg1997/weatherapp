import React from 'react';
import SearchAppBar from './AppBar';
import NavTabs from "./Tabs";

const API_KEY = '03dc148ebd02cb8807a6e29f197cb618';

class App extends React.Component {
    state = {
        data:undefined
    }

    getWeatherForecast = async (e) => {
        e.preventDefault();
        //console.log("getweatherforecast called");
        const city = 'Delhi'//e.target.elements.city.value
        let json = require('./citylist');
        const cityList = JSON.stringify(json);
        const city_ID = 524901;
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
