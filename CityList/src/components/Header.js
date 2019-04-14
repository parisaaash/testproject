// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style = {viewStyle}>
            <Text style ={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//making an object to add styling for indivisual components
const styles = {
    //add a new property for text components 
    textStyle: {
        fontSize: 25
    },
    viewStyle: {
        backgroundColor: '#F6F6F6',
        //position element in vertical direction
        justifyContent: 'center',
        //position element in horizontal direction
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: 'pink',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'
    }
}

//Make the component available to other parts of the app by exporting it
export default Header;

