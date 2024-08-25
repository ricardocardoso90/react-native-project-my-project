import colors from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.COLORS.GREEN_700,
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
    borderColor: colors.COLORS.GREEN_500,
  }
});