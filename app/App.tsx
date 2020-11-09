import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Search } from "./components/SearchBar";
import { Provider } from "react-redux";
import store from "./store/store";
import { Scroller } from "./components/Scroller";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Search />
        <StatusBar style="auto" />
      </View>
      <ScrollView>
        <Scroller />
      </ScrollView>
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
