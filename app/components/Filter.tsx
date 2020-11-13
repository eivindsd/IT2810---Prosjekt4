import React from "react";
import { View } from "react-native";
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
          zIndex: 11,
          marginBottom: 15,
        }}
      >
        <PositionSelect />
      </View>
      <View
        style={{
          zIndex: 10,
          marginBottom: 15,
        }}
      >
        <NationSelect />
      </View>
      <View
        style={{
          zIndex: 9,
          marginBottom: 15,
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
