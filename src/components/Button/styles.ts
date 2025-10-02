import theme from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.BLUE_500,
  },

  container2: {
    height: 50,
    width: '100%',
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.COLORS.BLUE_100,
  }
});