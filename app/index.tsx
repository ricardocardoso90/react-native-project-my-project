import {
  StyleSheet,
  View
} from "react-native";

import { Routes } from "../Routes";

export default function Index() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});