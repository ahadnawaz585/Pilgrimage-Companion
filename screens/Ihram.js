import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import QuranicText from '../components/quranicText';
const IhramScreen = ({ navigation }) => {


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>IHRAM</Text>
                <Image source={require('../assets/Images/Guide/ihram.jpg')} style={styles.image} />
                <Text style={styles.subTitle}>1.Physical Purity</Text>
                <Text style={styles.paragraph}>
                    Before getting changed into the Ihram garments, take care of your personal hygiene by clipping your nails and removing the hair under your armpits and beneath the navel. You should then do ghusl, a highly emphasized sunnah for those intending to enter into a state of Ihram. If you can’t perform ghusl, doing wudhu will suffice. Men may apply attar/perfume to their heads/beards, ensuring not to get any on the Ihram garments. This should all be carried out at your place of residence before your journey.
                </Text>
                <Text style={styles.subTitle}>2.Ihram Garments</Text>
                <Text style={styles.paragraph}>
                    You will then get changed into your Ihram garments, which, for men, consist of two normally white, clean, seamless pieces of cloth. The sheet that wraps around the waist and covers the lower body is known as the izar, and the sheet that is draped over the upper body like a shawl is known as the rida. Sandals shouldn’t cover the heel and ankle. The Hanafi school of thought stipulates that the top part of the foot should also remain exposed.
                    Ensure you put on your Ihram attire before crossing the designated Miqat. Where you wear the garments depends on your point of departure and your destination.
                    If you’re traveling to Makkah via Jeddah on an airplane, it is advisable to get changed into your Ihram at home or the airport before departure or during a stopover if you have one. At the airport, you can check in first and get changed in the prayer room or bathroom. Alternatively, you can put on your Ihram in-flight although bear in mind that airplane bathrooms are usually very limited in space, and there may well be a rush of people intending to do the same thing as the Miqat approaches. If you decide to change into your Ihram attire on the plane, do so at least an hour before the Miqat is crossed. Opting to get changed mid-flight is the least recommended option.
                    If you’re going to Madinah before Makkah, you don’t need to enter into the state of Ihram and may wear regular clothing during your stay there. Before leaving for Makkah, you should don the Ihram at your hotel in Madinah or the designated Miqat for Madinah, Masjid Dhul Hulayfah. The taxi/coach will stop at the mosque on the way, so you can enter Ihram there if you need to do so. If you’re taking the train to Makkah, you should put on your Ihram at the hotel or the train station prior to departure.
                    You may delay making your intention until the Miqat approaches. Just before crossing, remove any articles of clothing you may still be wearing that violate the conditions of Ihram, such as socks, headwear and underwear. On planes, trains and coaches, you will hear an announcement regarding the upcoming Miqat as you approach the designated point.
                    Women aren’t required to conform to a specific dress code. Clothing should be normal modest Islamic dress with a head covering of any colour. Hands and faces must remain exposed, although socks may be worn.
                </Text>
                <Text style={styles.subTitle}>3.Salah al-Ihram</Text>
                <Text style={styles.paragraph}>It’s sunnah to perform two rak’ahs of salah before entering into the state of Ihram. This can be performed at home, after getting changed at the airport or in-flight before crossing the Miqat, provided there are prayer facilities on board.  If you’re in Madinah, you can perform the prayer in your hotel, in Masjid Nabawi, at the designated Miqat point or on the train. Observe the prayer with the intention of performing two rak’ahs nafl for Ihram.
                    Since you’re not yet in the spiritual state of Ihram, the prayer may be observed with the head covered. It is recommended to recite Surah al-Kafirun (Surah 109) in the first rak’ah and Surah al-Ikhlas (Surah 112) in the second, although other surahs may be read. Don’t forget to make du’a after this salah.</Text>
                <Text style={styles.subTitle}>4.Niyyah</Text>
                <Text style={styles.paragraph}>The niyyah for Umrah should be made at the Miqat or close to it as you move in its direction. Ideally, you should delay making the intention until the last moment so you aren’t restricted by its prohibitions for longer than need be. It is recommended (mustahabb) that you make the intention verbally, as well as reiterating it internally.
                    Following are three examples of intentions that may be uttered in Arabic:
                </Text>
                <QuranicText arabicText="لَبَّيْكَ اَللَّهُمَّ عُمْرَةً ❁" englishTranslation="O Allah, here I am to perform Umrah." />
                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ ❁" englishTranslation="O Allah, I intend to perform Umrah." />
                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي ❁" englishTranslation="O Allah, I intend to perform Umrah, so make it easy for me and accept it from me." />

                <Text style={styles.subTitle}>5.Talbiyah</Text>
                <Text style={styles.paragraph}>After making your niyyah, you must recite the Talbiyah to validate your intention and enter into the state of Ihram. The utterance of the Talbiyah is wajib according to the Hanafi and Maliki schools of thought. The Shafi’i and Hanbali schools consider it a sunnah.
                    The sunnah method of reciting the Talbiyah is to briefly pause at four places, indicated by the dashes. The prayer is as follows:
                </Text>
                <QuranicText arabicText="لَبَّيْكَ اَللَّهُمَّ لَبَّيْكَ – لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ – إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ – لَا شَرِيكَ لَكَ – ❁" englishTranslation="At Your service, Allah, at Your service. At Your service, You have no partner, at Your service. Truly all praise, favour and sovereignty are Yours. You have no partner." />

                <Text style={styles.paragraph}>After uttering the Talbiyah, you will now be in the state of Ihram and be known as a Muhrim. Make sure you’re well aware of the prohibitions of Ihram and ensure you don’t fall foul of its rules. If a rule of Ihram is violated, Damm or Sadaqah will be required as expiation.
                    It is recommended to send Salawat on the Prophet ﷺ after reciting the Talbiyah and to make du’a for yourself and others. Continue reciting the Talbiyah for the rest of your journey until you reach one of the doors of Masjid al-Haram prior to performing Tawaf.</Text>
                <Text style={styles.subTitle}>6.Haram of Makkah</Text>
                <Text style={styles.paragraph}>The Haram of Makkah is a sacred area that extends several miles around Masjid al-Haram in all directions. In this area, it is forbidden to:
                    Cut or damage grass, trees or any other type of vegetation.
                    Harm or kill wild animals. This includes scaring away pigeons and other birds.
                    Carry weapons.
                    Fight or behave in a way that will violate the sanctity of this area.
                    Although you’re unlikely to breach one of these rules, keep in mind the sanctity of Makkah.
                </Text>
                <Text style={styles.note}> Note: If you intend to perform an additional Umrah later on, you must assume Ihram outside the boundary of the Haram before going back to Masjid al-Haram to perform Umrah. Many choose to enter into Ihram at Masjid Aisha, which is the nearest and most convenient location from Masjid al-Haram. Transportation to get there is available near the mosque.</Text>
                <Text style={styles.subTitle}>7.Entering Makkah</Text>
                <Text style={styles.paragraph}>As you reach the limits of the Haram, constantly recite the Talbiyah, do dhikr and send Salawat upon the Prophet ﷺ. Recital of the following du’a is recommended upon entering the Haram:
                </Text>
                <QuranicText arabicText="اَللَّهُمَّ هَذَا حَرَمُكَ وَأَمْنُكَ فَحَرِّمْنِي عَلَى النَّارِ ❁ وَأَمِنِّي مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ ❁ وَاجْعَلْنِي مِنْ أَوْلِيَائِكَ وَأَهْلِ طَاعَتِكَ ❁" englishTranslation="O Allah, this is Your sanctuary and security, so make me unlawful to the hellfire, make me safe from Your punishment on the day You resurrect Your servants, and make me one of Your friends and one of the people who obey You." />


                <Text style={styles.paragraph}>After arriving at your accommodation in Makkah, you may want to freshen up or take a rest before making your way to Masjid al-Haram to perform Tawaf al-Umrah. If you decide to shower, ensure you don’t use any items prohibited in the state of Ihram, e.g. scented soap or shampoo. It is recommended you present yourself at Masjid al-Haram as soon as possible.
                    When you’re ready, decide which of your belongings you want to take with you, bearing in mind there are thieves that operate in the mosque.
                </Text>
                <Text style={styles.subTitle}>8.Entering Masjid al-Haram</Text>
                <Text style={styles.paragraph}>It is sunnah to enter Masjid al-Haram via Bab al-Salam (the Gate of Peace). This may not be possible as the authorities have designated entrances to the mosque for pilgrims performing Umrah. Proceed through one of these entrances. Step through with your right foot first and recite the supplication for entering a mosque. Either or both of these supplications may be recited:
                </Text>

                <QuranicText arabicText="بِسْمِ اللهِ ❁ اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ ❁ اللّٰهُمَّ اغْفِرْ لِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ ❁" englishTranslation="In the name of Allah, send prayers upon Muhammad ﷺ. O Allah, forgive me and open for me the doors of Your Mercy." />
                <QuranicText arabicText="أَعُوذُ بِاللهِ الْعَظِيمِ ❁ وَبِوَجْهِهِ الْكَرِيمِ ❁ وَسُلْطَانِهِ الْقَدِيمِ ❁ مِنَ الشَّيْطَانِ الرَّجِيمِ ❁" englishTranslation="I seek protection in Allah the Tremendous, His Noble Countenance, and His pre-eternal Sovereign Might from Shaytan the rejected." />
                <QuranicText arabicText="اللّٰهُ أَكْبَرُ ❁ اللّٰهُ أَكْبَرُ ❁ لَآ اِلَهَ اِلَّا اللّٰهُ ❁" englishTranslation="Allāhu akbar. Allāhu akbar. Lā ilāha illa Llāh.Allah is the Greatest. Allah is the Greatest. There is no God except Allah." />


                <Text style={styles.note}> Notes: Don’t perform Tahiyyat al-Masjid (the Prayer for Greeting the Mosque) if you intend to; your Tawaf will suffice as the “greeting” for Masjid al-Haram.
                    If you don’t have the intention of performing Tawaf immediately, you may perform Tahiyyat al-Masjid.
                    In Masjid al-Haram, it is permissible for anyone to walk across those performing salah. However, their place of prostration should be avoided.
                </Text>
                <Text style={styles.subTitle}>9.First Sight of the Kaaba</Text>
                <Text style={styles.paragraph}>After entering the mosque, keep your gaze lowered until you reach the mataf area, which is the open space where Tawaf takes place. When you’re ready, with humility, awe and reverence, lift your gaze to set sight on the beatific vision of the Holy Kaaba.
                    Upon seeing the Kaaba for the first time, raise your hands and make du’a with the utmost concentration and sincerity, as this is among those places where prayers are answered. Remember to recite Salawat upon the Prophet ﷺ when making du’a. Umar ibn al-Khattab I narrated:
                    Du’a is suspended between heaven and earth and none of it is taken up until you send blessings upon your Prophet ﷺ.
                    [Narrated in Sunan al-Tirmidhi]</Text>
                <Text style={styles.note}> Imam Abu Hanifa I would use this opportunity to make du’a to Allah that he be among those whose supplications are always accepted.</Text>

                <Text style={styles.paragraph}>It’s a sunnah to recite the following du’as:</Text>
                <QuranicText arabicText="اَللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفاً وَتَعْظِيماً وَتَكْرِيماً وَمَهَابَةً ❁ وَزِدْ مَنْ شَرَّفَهُ وَكَرَّمَهُ مِمَّنْ حَجَّهُ أَوْ اعْتَمَرَهُ تَشْرِيفاً وَتَكْرِيماً وَتَعْظِيماً وَبِرّاً ❁" englishTranslation="Allah, increase this House in honour, esteem, respect and reverence. And increase those who honour and respect it—of those who perform Hajj or Umrah—in honour, respect, esteem and piety." />

                <QuranicText arabicText="اَللَّهُمَّ أَنْتَ السَّلاَمُ ❁ وَمِنْكَ السَّلَامُ ❁ حَيِّنَا رَبَّنَا بِالسَّلاَمِ ❁" englishTranslation="O Allah, You are Peace and from You is peace. Make us live, Lord, in peace." />
                <Text style={styles.paragraph}>Do dhikr, make du’a and send Salawat upon the Prophet ﷺ in abundance here. Make the most of this opportunity before you begin your Tawaf, especially if it’s the first time you’ve set eyes on the Kaaba.</Text>
                

            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('guaidance')}>
                    <Text style={styles.navigationText}>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('tawaf')}>
                    <Text style={styles.navigationText}>Tawaf al-Umrah</Text>
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

export default IhramScreen;
