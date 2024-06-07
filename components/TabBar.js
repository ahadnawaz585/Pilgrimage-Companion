import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SavedScreen from '../screens/SavedScreen';
import { Entypo,Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigator (){
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon:(props)=><Entypo name='home' size={props.size} color={props.color}/>
          }}
        />
        <Tab.Screen name='Saved'
          component={SavedScreen}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon:(props)=><Entypo name='star' size={props.size} color={props.color}/>
          }}
        />
        <Tab.Screen name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon:(props)=><Ionicons name='settings' size={props.size} color={props.color}/>
          }}
        />
      </Tab.Navigator>
    )
  }