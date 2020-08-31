import React from 'react';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Following from './pages/Following';
import CommingSoon from './pages/CommingSoon';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: { height: Platform.OS === 'android' ? 60 : 80, backgroundColor: colors.tag, borderTopWidth: 0 },
        tabStyle: { alignItems: 'center', justifyContent: 'center' },
        iconStyle: {
          flex: 0,
          width: 25,
          height: 25,
          marginTop: Platform.OS === 'android' ? 0 : 10,
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <Ionicons name="md-heart" size={size} color={focused ? colors.purple : colors.black} />;
          },
        }}
      />
      <Screen
        name="Discover"
        component={CommingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <MaterialCommunityIcons name="compass-outline" size={size} color={focused ? colors.purple : colors.black} />;
          },
        }}
      />
      <Screen
        name="Browse"
        component={CommingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <Ionicons name="md-browsers" size={size} color={focused ? colors.purple : colors.black} />;
          },
        }}
      />
      <Screen
        name="Esports"
        component={CommingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <MaterialCommunityIcons name="trophy-outline" size={size} color={focused ? colors.purple : colors.black} />;
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
