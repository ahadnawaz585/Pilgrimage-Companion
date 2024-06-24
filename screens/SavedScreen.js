import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import colors from '../Utils/colors';
import TranslationResult from '../components/TranslationResult'; // Import TranslationResult component

export default function SavedScreen() {

  const savedItems = useSelector(state => state.savedItems.items);

  if (savedItems.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>Nothing saved yet !!!</Text>
        </View>
        <View style={[styles.exampleCard, styles.rotatedCard]}>
          <Text style={styles.exampleOriginalText}>Hello</Text>
          <Text style={styles.exampleTranslatedText}>Bonjour</Text>
          <Text style={styles.exampleLanguage}>en-fr</Text>
          <View style={styles.starIcon}>
            <Ionicons name="star" size={30} color="red" style={styles.growStar} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={savedItems.slice().reverse()}
        renderItem={itemData => {
          return <TranslationResult itemId={itemData.item.id} />;
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.greyBackground,
    padding: 10,
  },
  noItemsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  noItemsText: {
    fontFamily: 'regular',
    color: colors.primary,
    // transform: [{ rotate: '-3deg' }],
    fontSize: 18,
    letterSpacing: 0.3,
    opacity: 0.6,
  },
  exampleCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    opacity: 0.6,
  },
  rotatedCard: {
    // transform: [{ rotate: '-3deg' }],
  },
  exampleOriginalText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  exampleTranslatedText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666666',
  },
  exampleLanguage: {
    fontSize: 12,
    color: '#999999',
  },
  starIcon: {
    position: 'absolute',
    top: 12,
    right: 15,
    zIndex: 1, 
    // transform: [{ rotate: '-3deg' }],
  },
  growStar: {
    transform: [{ scale: 2.3 }],
  },
});

