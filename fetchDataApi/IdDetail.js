import React from 'react';
import { Text, View } from 'react-native';
import Card from './card';
import CardSection from './cardSection'

const IdDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.idproperty.id}</Text>
            </CardSection>
        </Card>
    );
};

export default IdDetail;
