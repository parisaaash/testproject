import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;  
    return (
        <TouchableOpacity 
            /*we can put onpress handler here but if we do this
            we won't make a reusable component. instead use it
            in citydetail file in button cardsection . onPress is a function
            that is provided by parent component*/
            onPress={onPress}
            style={buttonStyle}
        >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 4,
        paddingBottom: 4
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 30,
        marginRight: 30
    }
};

export default Button;
