import theme from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
  },

  header: {
    marginTop: 70,
    alignItems: 'center',
  },

  headerTitle: {
    color: theme.COLORS.WHITE,
  },

  headerSubtitle: {
    color: theme.COLORS.GRAY_100,
  },

  form: {
    marginTop: 70,
    alignItems: 'center',
    paddingHorizontal: 54,
  },

  formTitle: {
    alignItems: 'center',
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MD,
  },

  input: {
    width: '100%',
    marginTop: 15,
    padding: 10,
    color: theme.COLORS.WHITE,
    borderRadius: 4,
    fontSize: theme.FONT_SIZE.MD,
    backgroundColor: theme.COLORS.GRAY_600,
  },

  footer: {
    alignItems: 'center',
    marginTop: 90,
    paddingHorizontal: 54,
  },

  footerTitle: {
    color: theme.COLORS.WHITE,
  }
});