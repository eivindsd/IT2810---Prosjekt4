import React from "react";
import { View, Platform } from "react-native";
import { PositionSelect } from "./PositionSelect";
import { NationSelect } from "./NationSelect";
import { ClubSelect } from "./ClubSelect";
import { SortAge } from "./SortAge";
import { SortScore } from "./SortScore";

//mostly styling for the different selectors, and used zIndex to control which 
//selectors that should be placed over the others
export const Filter = () => {
  return (
    <View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 10,
          }),
          marginBottom: 15,
        }}
      >
        <PositionSelect />
      </View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 9,
          }),
          marginBottom: 15,
        }}
      >
        <NationSelect />
      </View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 8,
          }),
          marginBottom: 15,
        }}
      >
        <ClubSelect />
      </View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 7,
          }),
          marginBottom: 15,
        }}
      >
        <SortAge />
      </View>
      <View
        style={{
          ...(Platform.OS !== "android" && {
            zIndex: 6,
          }),
        }}
      >
        <SortScore />
      </View>
    </View>
  );
};
