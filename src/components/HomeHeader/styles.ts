import theme from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 30,
    backgroundColor: theme.COLORS.GRAY_600,
  },

  boxProfile: {
    flex: 1,
    marginLeft: 10,
  },

  boxTitle: {
    color: theme.COLORS.WHITE
  },

  boxSubtitle: {
    fontWeight: 'bold',
    color: theme.COLORS.WHITE
  }
});