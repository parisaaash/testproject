import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CityDetail from './CityDetail';
import axios from 'axios';

//using a class based component,as it is more useful and we can use lifecycle methods
class CityList extends Component {
    state = { cities: [] };
    componentWillMount() {
        axios.get('https://gist.githubusercontent.com/parisaaash/949834e1ff33de74dbb5c83730ca8ee2/raw/5e560f582f238bd045905014663858da76a1efa7/list.json')
            .then(response => this.setState({ cities: response.data }));
    }
    renderCity() {
        return this.state.cities.map(citiesName => 
        <CityDetail key={citiesName.name} cityproperty={citiesName} />
        );
    }

    //render method is used whenever we need it to return some amount of JSX
    render() {
        return (
            <ScrollView>
                {this.renderCity()}
            </ScrollView>
        );
    }
}

export default CityList;
