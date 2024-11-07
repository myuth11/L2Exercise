// Boat.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Boat = ({ name, model, price, description }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name="ship" size={50} color="#007AFF" style={styles.icon} />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.model}>Model: {model}</Text>
                <Text style={styles.price}>Price: ${price}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    icon: {
        marginRight: 15,
        alignSelf: 'center',
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    model: {
        fontSize: 16,
        color: '#555',
    },
    price: {
        fontSize: 16,
        color: '#007AFF',
        marginVertical: 3,
    },
    description: {
        fontSize: 14,
        color: '#777',
    },
});

export default Boat;
