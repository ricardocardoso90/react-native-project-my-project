import { styles } from "./styles";
import theme from "@/src/styles/theme";
import { Text, TouchableOpacity, View } from "react-native";

import { UserPhoto } from "../UserPhoto";
import Ionicons from "@expo/vector-icons/Ionicons";

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <UserPhoto size={64} />

      <View style={styles.boxProfile}>
        <Text style={styles.boxTitle}>Olá,</Text>
        <Text style={styles.boxSubtitle}>Ricardo Cardoso</Text>
      </View>

      <TouchableOpacity>
        <Ionicons
          size={30}
          name="log-out-outline"
          color={theme.COLORS.GRAY_300}
        />
      </TouchableOpacity>
    </View>
  )
};