
import React from 'react';
import { Text, View } from 'react-native';


const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>My first app!</Text>
        </View>
    );
};
const styles = {
    viewStyle:{
        backgroundColor: 'pink',
        justifyContent: 'center',
        //flex: 1 ,
        alignItems: 'center',
        height: 60,
        padding: 10

    },
    textStyle: {
        fontSize: 20
    }
}
export default Header;

