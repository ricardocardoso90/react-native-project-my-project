import colors from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLORS.GRAY_700,
  },
  header: {
    marginTop: 70,
    alignItems: 'center',
  },
  title: {
    color: colors.COLORS.GRAY_100,
  },
  subtitle: {
    color: colors.COLORS.GRAY_200
  },

  form: {
    marginTop: 70,
    paddingHorizontal: 54,
  },
  input: {
    width: '100%',
    backgroundColor: colors.COLORS.GREEN_500,
    fontSize: 18,
    marginTop: 20,
    padding: 10,
    borderRadius: 4
  },

  footer: {
    alignItems: 'center',
    marginTop: 90,
    paddingHorizontal: 54,
  }


});