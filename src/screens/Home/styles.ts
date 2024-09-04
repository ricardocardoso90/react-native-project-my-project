import theme from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700
  },

  groupPlanets: {
    paddingTop: 30,
    paddingBottom: 30,
    maxHeight: 100,
  },

  cardPlanetas: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  cardPlanetasTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.COLORS.GRAY_200
  },

  cardPlanetasSubtitle: {
    color: theme.COLORS.GRAY_200
  }
});