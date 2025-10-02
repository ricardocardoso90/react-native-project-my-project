import theme from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_500
  },

  PlanetsCarsBox: {
    flex: 1,
    marginLeft: 10,
    marginRight: 15
  },

  PlanetsCarsTitle: {
    color: theme.COLORS.WHITE
  },

  PlanetsCarsSubtitle: {
    fontWeight: 'bold',
    color: theme.COLORS.WHITE
  }
});