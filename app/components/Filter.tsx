import React from "react";
import { View } from "react-native";
import { PositionSelect } from "./PositionSelect";
import { NationSelect } from "./NationSelect";
import { ClubSelect } from "./ClubSelect";
import { SortAge } from "./SortAge";
import { SortScore } from "./SortScore";

export const Filter = () => {
  return (
    <View>
      <PositionSelect />
      <NationSelect />
      <ClubSelect />
      <SortAge />
      <SortScore />
    </View>
  );
};
