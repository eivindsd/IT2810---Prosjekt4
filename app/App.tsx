import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Search } from "./components/SearchBar";
import { Provider } from "react-redux";
import store from "./store/store";
import { Scroller } from "./components/Scroller";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri:
              "https://i.pinimg.com/originals/19/1b/6d/191b6d669f008bfaf3950dd3e71ec2ca.jpg",
          }}
        >
          <View style={styles.search}>
            <Search />
            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </View>
      <Scroller />
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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  search: {
    flex: 5,
    width: "70%",
    marginLeft: "15%",
    marginBottom: "20%",
  },
});
