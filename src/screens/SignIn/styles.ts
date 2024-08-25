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

  headerTitle: {
    color: colors.COLORS.WHITE,
  },

  headerSubtitle: {
    color: colors.COLORS.GRAY_100,
  },

  form: {
    marginTop: 70,
    alignItems: 'center',
    paddingHorizontal: 54,
  },

  formTitle: {
    alignItems: 'center',
    color: colors.COLORS.WHITE,
    fontSize: colors.FONT_SIZE.MD,
  },

  input: {
    width: '100%',
    marginTop: 20,
    padding: 10,
    borderRadius: 4,
    fontSize: colors.FONT_SIZE.MD,
    backgroundColor: colors.COLORS.GRAY_600,
  },

  footer: {
    alignItems: 'center',
    marginTop: 90,
    paddingHorizontal: 54,
  },

  footerTitle: {
    color: colors.COLORS.WHITE,
  }
});