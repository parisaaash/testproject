//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import CityList from './src/components/City';

//create a component
const App = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Header headerText={'Largest Cities of Iran'} />
        <CityList />
    </View>
);

/*Render it to device, in all 
react-native apps at least one component should be registered*/
AppRegistry.registerComponent("test", () => App);
