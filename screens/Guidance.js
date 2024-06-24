import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function GuidanceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Images/kabah.jpg')} style={styles.image} />
      <Text style={styles.title}>Here you can have guidance about Hajj and Umrah</Text>
      <Button mode="outlined" style={styles.button} onPress={() => navigation.navigate('ihram')}>
        Ihram
      </Button>
      <Button mode="outlined" style={styles.button} onPress={() => navigation.navigate('tawaf')}>
        Tawaf al-Umrah
      </Button>
      <Button mode="outlined" style={styles.button} onPress={() => navigation.navigate('sai')}>
        Sa’i
      </Button>
      <Button mode="outlined" style={styles.button} onPress={() => navigation.navigate('halqtaqsir')}>
        Halq or Taqsir
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    marginVertical: 8,
    width: '80%',
  },
});
