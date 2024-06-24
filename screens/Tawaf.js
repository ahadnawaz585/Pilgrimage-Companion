import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import QuranicText from '../components/quranicText';
const TawafScreen = ({ navigation }) => {


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tawaf al-Umrah</Text>
                <Image source={require('../assets/Images/Guide/tawaf.jpg')} style={styles.image} />
                <Image source={require('../assets/Images/Guide/tawaf2.jpg')} style={styles.image2} />
                <Text style={styles.paragraph}>
                    1. To perform Tawaf yourself.
                    2. To make an intention (verbally or not).
                    3. To do Tawaf in Masjid al-Haram.
                    4. To be in a state of wudhu and free of anything that requires ghusl, e.g. menstruation.
                    5. To conceal the awrah.
                    6. To start Tawaf from Hajar al-Aswad.
                    7. To move in an anti-clockwise direction.
                    8. To avoid the Hatim (the semi-circle area outside the Kaaba).
                    9. To perform Tawaf by foot, for those who are able.
                    10. To perform seven circuits.
                    11. To perform two rak’ahs of salah after the Tawaf.

                </Text>
                <Text style={styles.subTitle}>1.Preparation</Text>
                <Text style={styles.paragraph}>
                    Ensure you’re in a state of wudhu, and if you’re a male, uncover your right shoulder by passing the top sheet of your Ihram under your right armpit, allowing the garment to hang over your left shoulder (Idtiba).</Text>
                <Text style={styles.subTitle}>2.Starting Point</Text>
                <Image source={require('../assets/Images/Guide/tawaf3.jpg')} style={styles.image} />
                <Text style={styles.paragraph}>Position yourself in line with the corner of the Kaaba where the Hajar al-Aswad is situated. This corner is the one that faces a single minaret (the other three corners face two minarets). There is a green light on the wall of the Masjid opposite the Kaaba, which indicates where the Tawaf starts from. This is the starting point of each shawt (circuit). Stand just before this starting point facing the Kaaba.</Text>
                <Text style={styles.subTitle}>3.Intention</Text>
                <Text style={styles.paragraph}>As with any other act of worship, make the niyyah to perform Tawaf solely for Allah. You may also ask for acceptance and ease of your Tawaf. The following words may be said:
                    O Allah, I intend to perform the Tawaf of Umrah of the Kaaba for your sake and your sake alone. Please accept it from me and make it easy for me.
                    You may make the following intention, which is in Arabic:
                </Text>
                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ طَوَافَ بَيْتِكَ الْحَرَامِ فَيَسِّرْهُ لِي وَتَقَبَّلْهُ مِنِّي ❁" englishTranslation="O Allah, I intend to perform Tawaf of your Sacred House, so make it easy for me and accept it from me." />
                <Text style={styles.subTitle}>Kissing, Touching or Saluting the Hajar al-Aswad (Istilam)</Text>
                <Text style={styles.note}> Although kissing the Hajar al-Aswad is very virtuous, it’s almost impossible to reach it. Don’t harm others around you in an attempt to get to it.</Text>
                <Text style={styles.paragraph}>Kissing – If you reach the Hajar al-Aswad, place your hands on it, put your face between your hands, and say “Bismi Llāhi wa Llāhu akbar (بِسْمِ اللّٰهِ وَاللّٰهُ أَكْبَرُ)” and kiss it lightly. Some scholars have said it is preferable to kiss it three times if you have the chance.
                    Touching – If you’re in reaching distance but unable to kiss it, touch it with your hand(s) and kiss your hand(s).
                    Saluting – If it isn’t possible to reach the stone, as is likely to be the case, perform a symbolic Istilam from afar by directly facing the Hajar al-Aswad and raising your hands up to your earlobes (as you would do when starting salah). Ensure your palms are also facing it, as though your face and hands are on the Hajar al-Aswad, and say “Bismi Llāhi wa Llāhu akbar (بِسْمِ اللّٰهِ وَاللّٰهُ أَكْبَرُ).” You may kiss your palms if you wish.
                </Text>
                <Text style={styles.note}>If you decide to attempt to kiss or touch Hajar al-Aswad, it is important to be aware that the experience can be intense. Due to the large number of people gathered around it, there is often a significant amount of pushing and shoving, which can potentially lead to injuries. It is nearly impossible to reach the Hajar al-Aswad without having to force your way through people vying to reach the sacred stone. Therefore, it’s recommended you remain safe and perform Istilam by saluting.</Text>
                <Text style={styles.paragraph}>The following supplication, a du’a of Ali I, may be recited when coming parallel to the Hajar al-Aswad in each circuit:</Text>
                <QuranicText arabicText="بِسْمِ اللّٰهِ وَاللّٰهُ أَكْبَرُ ❁ اَللَّهُمَّ إِيمَاناً بِكَ وَتَصْدِيقاً بِكِتَابِكَ ❁ وَوَفَاءً بِعَهْدِكَ ❁ وَاتِّبَاعاً لِسُنَّةِ نَبِيِّكَ مُحَمَّدْ ❁" englishTranslation="In the name of Allah, Allah is the Greatest. O Allah, out of faith in You, conviction in Your book, in fulfilment of Your covenant and in emulation of Your Prophet’s sunnah ﷺ." />
                <Text style={styles.paragraph}>Other forms of dhikr, such as Tahlil (lā ilāha illa Llāh) and Salawat upon the Prophet ﷺ, may also be uttered at this point.</Text>
                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي ❁" englishTranslation="O Allah, I intend to perform Umrah, so make it easy for me and accept it from me." />

                <Text style={styles.subTitle}>4.Start the Tawaf</Text>
                <Text style={styles.paragraph}>Turn to your right and start the first circuit of your Tawaf, ensuring the Kaaba is on your left. Proceed in an anti-clockwise direction and avoid walking through the Hijr Ismail. If you happen to walk through it, the circuit won’t count, and it will have to be repeated.</Text>

                <Text style={styles.subTitle}>5.Raml</Text>
                <Text style={styles.paragraph}>In the first three circuits, men should perform Raml, which is the practice of walking briskly, lifting the legs forcefully and sticking out the chest. However, if there is congestion, which is likely to be the case if you’re closer to the Kaaba, only perform this sunnah if you’re sure you won’t harm or inconvenience others. During peak times, you’re unlikely to be able to perform this action.</Text>
                <Text style={styles.subTitle}>6.Dhikr & Du’a</Text>
                <Text style={styles.paragraph}>During your Tawaf, you may recite prayers and supplications of your choice. Duas are accepted during Tawaf, so make the most of the occasion and remember Allah with sincerity and devotion. It’s perhaps advisable not to read from a du’a book, especially if you don’t understand Arabic. Imam Ibn Hibban V said:
                    Specifying a du’a would take the moment away, because with specific duas, one will merely be repeating words, whereas this occasion is for any du’a and for remembering one’s Lord with humility and sincerity.
                    Therefore, you should supplicate in any language and in any manner that you prefer. If you want to make Quranic and Prophetic supplications during your Tawaf, make an effort to memorise and learn the meanings of them. Reciting Quran and sending Salawat upon the Prophet ﷺ during Tawaf is also recommended.
                    .</Text>
                <Text style={styles.subTitle}>7.Rukn al-Yamani</Text>
                <Text style={styles.paragraph}>During your Tawaf, you may recite prayers and supplications of your choice. Duas are accepted during Tawaf, so make the most of the occasion and remember Allah with sincerity and devotion. It’s perhaps advisable not to read from a du’a book, especially if you don’t understand Arabic. Imam Ibn Hibban V said:
                    Specifying a du’a would take the moment away, because with specific duas, one will merely be repeating words, whereas this occasion is for any du’a and for remembering one’s Lord with humility and sincerity.
                    Therefore, you should supplicate in any language and in any manner that you prefer. If you want to make Quranic and Prophetic supplications during your Tawaf, make an effort to memorise and learn the meanings of them. Reciting Quran and sending Salawat upon the Prophet ﷺ during Tawaf is also recommended.
                    Al-Rukn al-Yamani
                    Upon reaching the Rukn al-Yamani (the Yemeni Corner), the corner preceding the Hajar al-Aswad, if you manage to get close enough, touch it with your right hand or both hands and say “Allāhu akbar (اللّٰهُ أَكْبَرُ)”. If there’s too much congestion, as is likely to be the case, proceed without saying Takbir or gesturing towards it.
                    It is a sunnah to recite the following du’a between the Rukn al-Yamani and the Hajar al-Aswad:
                </Text>
                <QuranicText arabicText="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ❁" englishTranslation="O our Lord, grant us the good of this world, the good of the Hereafter, and save us from the punishment of the fire." />
                <Text style={styles.subTitle}>8.End of Circuit at the Hajar al-Aswad</Text>
                <Text style={styles.paragraph}>Returning to Hajar al-Aswad marks the completion of one circuit. Begin the second by doing Istilam of Hajar al-Aswad as previously described and saying “Allāhu akbar (اللّٰهُ أَكْبَرُ)”. You should say Allāhu akbar while doing Istilam in all subsequent circuits. You will be performing Istilam eight times in total during the Tawaf, one before the start of the Tawaf and one at the end of each of the seven circuits.</Text>
                <Text style={styles.subTitle}>9.During Tawaf</Text>
                <Text style={styles.paragraph}>The Tawaf should be completed in a continuous manner with no interruptions between circuits. However, if a congregational prayer is due to start, you must join the congregation and resume your Tawaf from the position that you stopped. The circuit need not be repeated. These rules also apply if you need to repeat your wudhu.</Text>
                <Text style={styles.subTitle}>10.Complete the Tawaf</Text>
                <Text style={styles.paragraph}>Proceed in the same manner until you have completed seven circuits. Performing Istilam at the start of Tawaf and the end is a highly emphasized sunnah, and performing Istilam on the other six occasions is desirable.
                    If you are in a state of Idtiba, cover your shoulder with your Ihram.</Text>
                <Text style={styles.subTitle}>11.Salah</Text>
                <Image source={require('../assets/Images/Guide/tawaf4.jpg')} style={styles.image2} />
                <Text style={styles.paragraph}>Upon finishing the Tawaf, perform two rak’ahs of salah, preferably in a position where Maqam Ibrahim is between you and the Kaaba. However, keep in mind that since Maqam Ibrahim is situated within the mataf, there is often nowhere for pilgrims performing Tawaf to move except around and almost over the top of those praying just beyond Maqam Ibrahim, resulting in a great deal of congestion. If it isn’t possible to perform the prayer there due to crowding, it can be performed anywhere in Masjid al-Haram.
                    While moving to the place where you intend to perform the two rak’ahs, it is recommended to audibly recite the following:
                </Text>
                <QuranicText arabicText="وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى ❁" englishTranslation="And take the Maqam Ibrahim as a place of salah." />
                <Text style={styles.paragraph}>It is sunnah to recite Surah al-Kafirun (Surah 109) in the first rak’ah and Surah al-Ikhlas (Surah 112) in the second, after Surah al-Fatiha. Make sure you make plenty of du’a after completing the prayer.</Text>
                <Text style={styles.subTitle}>12.Zamzam</Text>
                <Image source={require('../assets/Images/Guide/tawaf5.jpg')} style={styles.image} />
                <Text style={styles.paragraph}>After completing salah and making du’a, drink your fill of Zamzam water, which is available around the Tawaf area and from various water fountains and dispensers in Masjid al-Haram. The entrance to the old well of Zamzam has been covered to allow for more room to do Tawaf.
                    The Prophet ﷺ said: “The water of Zamzam is for whatever purpose it is drunk for.” Before drinking the Zamzam water, make an intention that its consumption will be a means of fulfilling your wishes, whether that is good health, success in this world, or protection from the tribulations of the grave. When drinking the water, it is mustahab to stand and face the Kaaba, say Bismillah, pause to take a breath three times, and say Alhamdulillah after finishing. You can also rub it on your face and body. You may recite the following du’a after drinking the water:</Text>
                <QuranicText arabicText="إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا ❁ وَرِزْقًا وَاسِعًا ❁ وَعَمَلًا مُتَقَبَّلًا ❁ وَشِفَاءً مِنْ كُلِّ دَاءٍ ❁" englishTranslation="O Allah, I ask You for knowledge that is beneficial, provision that is abundant, accepted deeds, and a cure for every illness." />
                <Text style={styles.paragraph}>You may also make any other supplication of your choosing as it’s another station where duas are accepted.</Text>
                <Text style={styles.subTitle}>11.Salah</Text>
                <Image source={require('../assets/Images/Guide/tawaf6.jpg')} style={styles.image2} />
                <Text style={styles.paragraph}>After you have finished drinking Zamzam water, you may proceed to the Multazam, which is the area between Hajar al-Aswad and the door of the Kaaba.
                    The Multazam is almost impossible to get to during Hajj season due to the large crowds that gather. However, it is sometimes accessible during other parts of the year.
                    If it is possible to reach the Multazam, raise your hands above your head, cling to the wall and press your chest and cheeks against it. It is a sunnah of the Prophet ﷺ and yet another station where supplications are accepted, so you should lengthen your du’a here.
                    If you can’t reach the Multazam due to the crowds, you may face it and supplicate from a distance.
                </Text>
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ihram')}>
                    <Text style={styles.navigationText}>Ihram</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('sai')}>
                    <Text style={styles.navigationText}>Sa'i</Text>
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

export default TawafScreen;
