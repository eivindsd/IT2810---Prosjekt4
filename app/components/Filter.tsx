import React from "react";
import { View, ViewStyle, StyleSheet, Platform } from "react-native";
import { PositionSelect } from "./PositionSelect";
import { NationSelect } from "./NationSelect";
import { ClubSelect } from "./ClubSelect";
import { SortAge } from "./SortAge";
import { SortScore } from "./SortScore";

export const Filter = () => {
  return (
    <View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 11,
            marginBottom: 15,
          }),
        }}
      >
        <PositionSelect />
      </View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 10,
            marginBottom: 15,
          }),
        }}
      >
        <NationSelect />
      </View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 9,
            marginBottom: 15,
          }),
        }}
      >
        <ClubSelect />
      </View>
      <View
        style={{
          marginBottom: 15,
          zIndex: 8,
        }}
      >
        <SortAge />
      </View>
      <View
        style={{
          marginBottom: 12,
          zIndex: 7,
        }}
      >
        <SortScore />
      </View>
    </View>
  );
};

// interface Styles {
//   button: ViewStyle;
// }

// const styles = StyleSheet.create<Styles>({
//   button: {
//     marginTop: 10,
//     flex: 0,
//     zIndex: 10000,
//   },
// });
