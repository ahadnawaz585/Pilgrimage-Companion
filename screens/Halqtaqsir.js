import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import QuranicText from '../components/quranicText';
const HalqandTaqsirScreen = ({ navigation }) => {


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Halq or Taqsir</Text>
                <Image source={require('../assets/Images/Guide/halqtaqsir.jpeg')} style={styles.image} />

                <Text style={styles.paragraph}>
                    After Sa’i, you must have your hair shaved (Halq) or trimmed by at least an inch (Taqsir) in order to leave the state of Ihram and complete your Umrah. It is more virtuous for a man to have his head shaved completely.
                    There are a number of licensed barber shops in Makkah, which are open 24 hours a day and generally only close during salah times. There are many barbershops in the Zamzam Towers, Hilton shopping complex and al-Safwa Towers. You will also see many barbers located outside the Marwa door after you finish Sa’i.
                    Alternatively, you may shave or trim your own hair in order to come out of the state of Ihram.
                    You are now free from the restrictions of Ihram, and you may change into regular clothing. If you plan on performing another Umrah, you must travel to the boundary of the Haram in order to once again enter into Ihram. Most pilgrims choose to enter into Ihram at Masjid Aisha, which is the nearest and most convenient location from Masjid al-Haram. Taxis are available near the mosque.

                </Text>
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('tawaf')}>
                    <Text style={styles.navigationText}>Tawaf</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ihram')}>
                    <Text style={styles.navigationText}>Ihram</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 40,
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    paragraph: {
        marginBottom: 10,
    },
    note: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#B0E0E6',
        backgroundColor: '#F0FFFF',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200, // Adjust height as needed
        resizeMode: 'cover',
        marginBottom: 10,
    },
    image2: {
        width: '100%',
        height: 400, // Adjust height as needed
        resizeMode: 'cover',
        marginBottom: 10,
    },
    quranicContainer: {
        backgroundColor: '#B0E0E6',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    arabicText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,

    },
    translationText: {
        fontSize: 16,
        textAlign: 'center',

    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingBottom: 20
    },
    navigationText: {
        fontSize: 16,

        color: '#00BFFF',
    },
});

export default HalqandTaqsirScreen;
