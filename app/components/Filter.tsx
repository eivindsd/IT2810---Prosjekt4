import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { PositionSelect } from "./PositionSelect";
import { NationSelect } from "./NationSelect";
import { ClubSelect } from "./ClubSelect";
import { SortAge } from "./SortAge";
import { SortScore } from "./SortScore";

export const Filter = () => {
  return (
    <View>
      <View style={styles.button}>
        <PositionSelect />
      </View>
      <View style={styles.button}>
        <NationSelect />
      </View>
      <View style={styles.button}>
        <ClubSelect />
      </View>
      <View style={styles.button}>
        <SortAge />
      </View>
      <View style={styles.button}>
        <SortScore />
      </View>
    </View>
  );
};

interface Styles {
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    marginTop: 10,
    flex: 0,
  },
});
