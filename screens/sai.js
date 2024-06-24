import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import QuranicText from '../components/quranicText';
const SaiScreen = ({ navigation }) => {


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sa’i</Text>
                <Image source={require('../assets/Images/Guide/Sai.jpeg')} style={styles.image} />

                <Text style={styles.paragraph}>
                    It is a sunnah to perform Sa’i immediately after Tawaf, although you may take a break if necessary. If you feel tired after Tawaf or your feet are aching, you may rest until you feel ready. Remember, you will cover over three kilometers during Sa’i, so ensure you have sufficient energy to complete the rite before starting.
                    For the Sa’i to be considered valid, the following is necessary:
                    1.To perform Sa’i yourself.
                    2.To have entered into Ihram before performing the Sa’i.
                    3.To stay in Ihram until the Sa’i has been completed.
                    4.To perform Sa’i at its correct time.
                    5.To begin Sa’i at Safa and finish at Marwa.
                    6.To perform Sa’i after having done Tawaf.
                    7.To perform Sa’i on foot unless you have a valid excuse.
                    8.To perform seven laps.
                    9.To cover the complete distance between Safa and Marwa.
                </Text>
                <Text style={styles.subTitle}>1.Istilam of the Hajar al-Aswad</Text>
                <Text style={styles.paragraph}>
                    Before Sa’i, it is sunnah to do Istilam of Hajar al-Aswad one last time. This will be the ninth time, following the eight times you performed Istilam during Tawaf.
                    If you’ve forgotten to perform this Istilam, or you’re finding it difficult to return to the line of the Hajar al-Aswad due to crowding or tiredness, it may be omitted. However, you can do Istilam anywhere else in Masjid al-Haram, as long as you’re facing the Hajar al-Aswad.</Text>
                <Text style={styles.subTitle}>2.Proceed to Safa</Text>
                <Image source={require('../assets/Images/Guide/Sai2.jpg')} style={styles.image} />
                <Text style={styles.paragraph}>A sign indicating the location of Safa
                    Proceed to the hill of Safa, which is located inside Masjid al-Haram, in line with the Hajar al-Aswad. There are signs which indicate where it is. As you’re approaching Safa, it is sunnah to recite the following:
                </Text>
                <QuranicText arabicText="ِِإِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ الله ❁" englishTranslation="Indeed, Safa and Marwa are from the Signs of Allah." />
                <QuranicText arabicText="ِِأَبْدَأُ بِمَا بَدَأَ اللهُ بِهِ ❁" englishTranslation="I begin with that which Allah has begun with." />
                <Text style={styles.paragraph}>These should only be recited once before Sa’i and not at the start of each lap.</Text>
                <Image source={require('../assets/Images/Guide/Sai3.jpg')} style={styles.image} />
                <Text style={styles.subTitle}>3.Make Dua at Safa</Text>
                <Text style={styles.paragraph}>Upon reaching the hill of Safa, face the direction of the Kaaba and raise your hands in supplication. Don’t raise your hands up to your earlobes or gesture towards the Kaaba as you would have done during Tawaf. You may say Takbir (Allāhu akbar), Tahlil (lā ilāha illa Llāh) and send Salawat upon the Prophet ﷺ.
                    It is sunnah to recite the following du’a:
                </Text>
                <QuranicText arabicText="اللّٰهُ أَكْبَرُ ❁ اللّٰهُ أَكْبَرُ ❁ اللّٰهُ أَكْبَرُ ❁ وَلِلّٰهِ الْحَمْدُ ❁" englishTranslation="Allah is the Greatest; Allah is the Greatest; Allah is the Greatest, and to Allah belongs all praise." />
                <QuranicText arabicText="لَآ إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لاَ شَرِيكَ لَهُ ❁ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ❁ يُحْيِي وَيُمِيتُ ❁ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ❁" englishTranslation="There is no deity except Allah, alone without a partner. To Him belongs the Dominion, and to Him belongs all praise. He gives life and death, and He has power over everything." />
                <QuranicText arabicText="لَآ إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ ❁ اَنْجَزَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ اَلْأَحْزَابَ وَحْدَهُ ❁" englishTranslation="There is no deity except Allah alone. He fulfilled His promise, supported His slave and defeated the Confederates alone." />
                <Text style={styles.paragraph}>After reciting this du’a, you may recite your own supplications. Read the du’a a total of three times, making your own supplications in between each time, as was the sunnah of the Prophet ﷺ.
                </Text>
                <Text style={styles.subTitle}>4.Proceed to Marwa</Text>
                <Text style={styles.paragraph}>From Safa, make your way towards Marwa. Between Safa and Marwa, you will encounter two sets of green fluorescent lights approximately 50 meters apart, which indicate the distance that Hajar ran in order to get to higher ground. These two markers are known as Milayn al-Akhdharayn (the Two Green Mileposts). Between these two lights, it is a sunnah for men to run at a medium pace while women should continue normally.
                </Text>
                <Image source={require('../assets/Images/Guide/Sai4.jpg')} style={styles.image} />
                <Text style={styles.subTitle}>5.Dhikr & Du’a</Text>
                <Text style={styles.paragraph}>No fixed dhikr or du’a has been prescribed to be read during Sa’i, so you may recite any prayers or supplications of your choice and send Salawat upon the Prophet ﷺ.</Text>
                <Text style={styles.subTitle}>6.Make Du’a at Marwa</Text>
                <Text style={styles.paragraph}>Upon reaching the hill of Marwa, face the direction of the Kaaba, raise your hands in supplication and repeat the same supplications you recited at Safa.
                    This completes one lap of Sa’i. Returning back to Safa is considered a second lap.
                </Text>
                <Text style={styles.subTitle}>7.End of Sa’i</Text>
                <Text style={styles.paragraph}>Repeat this procedure until you have completed seven laps, at which point you should be at the hill of Marwa.</Text>
                <Image source={require('../assets/Images/Guide/Sai5.jpg')} style={styles.image} />
                <Text style={styles.subTitle}>8.Dua and Salah</Text>
                <Text style={styles.paragraph}>It is recommended that you make a final du’a here and perform two rak’ahs of nafl salah in Masjid al-Haram following Sa’i.
                </Text>
                <Text style={styles.subTitle}>8.Leave the Haram</Text>
                <Text style={styles.paragraph}>As you leave Masjid al-Haram, step out with your left foot and recite the following du’a, as was the sunnah of the Prophet ﷺ when leaving the mosque:
                </Text>
                <QuranicText arabicText="بِسْمِ اللهِ وَالصَّلَاةُ وَالسَّلَّامُ عَلَى رَسُولِ اللهِ ❁ اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ ❁" englishTranslation="In the name of Allah, and peace and blessings be upon the Messenger of Allah. O Allah, I ask of you from Your bounty." />
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('tawaf')}>
                    <Text style={styles.navigationText}>Tawaf</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('halqtaqsir')}>
                    <Text style={styles.navigationText}>Halq or Taqsir</Text>
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

export default SaiScreen;
