import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
// import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import TabNavigator from './components/TabBar';
import colors from './Utils/colors';
import LanguageSelectScreen from './screens/LanguageSelectScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from './store/Store';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

// AsyncStorage.clear();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } catch (e) {
        console.error('Error loading fonts:', e);
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <View onLayout={onLayout} style={{ flex: 1 }}>
            <Stack.Navigator
              screenOptions={{
                headerTitleStyle: {
                  fontFamily: 'medium',
                  color: 'white'
                },
                headerStyle: {
                  backgroundColor: colors.primary
                }
              }}>
              <Stack.Group>
                <Stack.Screen
                  name='Main'
                  component={TabNavigator}
                  options={{
                    headerTitle: 'Translate',
                  }}
                />
              </Stack.Group>
              <Stack.Group

                screenOptions={{
                  presentation: 'containedModal',

                }}>
                <Stack.Screen
                  name='languageSelector'
                  component={LanguageSelectScreen}
                />
              </Stack.Group>
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
