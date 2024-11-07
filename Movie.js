import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const Movie = ({title, year})=> {
    return (
        <View>
            <Text>
                {title} {year}
            </Text>
            <Ionicons name="skull" size={20} color="#B23B23" />
        </View>
    );};
export default Movie;
