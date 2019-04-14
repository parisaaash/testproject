import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const CityDetail = ({ cityproperty }) => {
    const { name, picture, CapitalOf, population, position } = cityproperty;
    const { 
        headerContentStyle,
        headerTextStyle,
        textStyle,
        pictureStyle,
        pictureContainerStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={pictureContainerStyle}>
                    <Image 
                    style={pictureStyle} 
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_most_populated_cities_of_iran.svg/675px-The_most_populated_cities_of_iran.svg.png' }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text style={textStyle}>{CapitalOf}</Text>
                    <Text style={textStyle}>population:{population}</Text>
                    <Text style={textStyle}>position:{position}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(picture)}>
                See more image
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 25
    },
    textStyle: {
        fontSize: 15
    },
    pictureStyle: {
        width: 90,
        flex: 1,
        height: 70
    },
    pictureContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLEft: 10,
        marginRight: 10,
        height: 70
    }
};

export default CityDetail;
