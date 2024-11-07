//
// import React from 'react';
// import { ScrollView, StyleSheet,Image } from 'react-native';
// import Movie from './Movie'; // Make sure to create Movie.js
//
// export default function App() {
//     return (
//         <ScrollView style={styles.container}>
//             <Movie
//                 title="Doctor Sleep"
//                 year="2019"
//                 iconName="skull"
//                 // poster={require('./img/doctor-sleep.jpg')}
//                 <Image source={require('./img/doctor-sleep.jpg')}/>
//             />
//             <Movie
//                 title="Midway"
//                 year="2020"
//                 iconName="person-rifle"
//                 poster={require('./img/midway.jpg')}
//             />
//         </ScrollView>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 50, // Add margin for better visibility
//     },
// });

// App.js
import React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import Boat from './Boat';

const boatsData = [
    { id: '1', name: 'Speedster', model: 'S500', price: 50000, description: 'A fast and sleek powerboat for thrill-seekers.' },
    { id: '2', name: 'Wave Rider', model: 'WR200', price: 30000, description: 'Perfect for riding waves and enjoying the sea breeze.' },
    { id: '3', name: 'Ocean Explorer', model: 'OE600', price: 70000, description: 'Designed for deep-sea adventures and exploration.' },
    { id: '4', name: 'Island Hopper', model: 'IH150', price: 20000, description: 'Compact and ideal for quick island getaways.' },
    { id: '5', name: 'Luxury Cruiser', model: 'LC900', price: 120000, description: 'Experience luxury on the water with this high-end cruiser.' },
    { id: '6', name: 'Fishing Pro', model: 'FP300', price: 40000, description: 'Equipped with fishing gear, ideal for fishing trips.' },
];

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <FlatList
                data={boatsData}
                renderItem={({ item }) => (
                    <Boat
                        name={item.name}
                        model={item.model}
                        price={item.price}
                        description={item.description}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight || 20,
        paddingHorizontal: 10,
    },
});

