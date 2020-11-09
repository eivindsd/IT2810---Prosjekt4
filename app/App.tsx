import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Search } from "./components/SearchBar";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Search />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
