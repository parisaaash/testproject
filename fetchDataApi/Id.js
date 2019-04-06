import React, { Component } from 'react';
import { View } from 'react-native';
//library for a http request and fetch data from remote API
import axios from 'axios';
import IdDetail from './IdDetail';

//using a class based component,as it is more useful and we can use lifecycle methods
class IdList extends Component {
    state = { ids: [] };
    //when do we want to fetch data from API; lifecycle method
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/posts')
            .then(response => this.setState({ ids: response.data }));
    }
renderId() {
    return this.state.ids.map(idsName => 
    <IdDetail key={idsName.id} idproperty={idsName} />
    );
}

    //render method is used whenever we need it to return some amount of JSX
    render() {
        return (
            <View>
                {this.renderId()}
            </View>
        );
    }
}

export default IdList;
