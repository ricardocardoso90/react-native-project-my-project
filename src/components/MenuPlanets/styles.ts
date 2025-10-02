import theme from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: theme.COLORS.GRAY_600,
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 40,
    marginRight: 10
  },

  spaceCardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.COLORS.GRAY_200,
    textTransform: 'uppercase'
  }
});