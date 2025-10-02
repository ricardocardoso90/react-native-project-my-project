
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home";
import { History } from "../screens/History";
import { Profile } from "../screens/Profile";

import theme from "../styles/theme";
import { Platform } from "react-native";

type AppRoutesProps = {
  home: undefined;
  history: undefined;
  profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: theme.COLORS.GRAY_600,
        height: Platform.OS === "ios" ? 96 : 70,
      }
    }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused
              ? <Ionicons name="home" size={27} color={theme.COLORS.BLUE_100} />
              : <Ionicons name="home-outline" size={27} color={color} />
          )
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused
              ? <Ionicons name='time' size={27} color={theme.COLORS.BLUE_100} />
              : <Ionicons name='time-outline' size={27} color={color} />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused
              ? <Ionicons name='person' size={27} color={theme.COLORS.BLUE_100} />
              : <Ionicons name='person-add-outline' size={27} color={color} />
          )
        }}
      />
    </Navigator>
  )
}