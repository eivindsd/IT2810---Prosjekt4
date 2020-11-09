import React from "react";
import { View } from "react-native";
import { PositionSelect } from "./PositionSelect";
import { NationSelect } from "./NationSelect";
import { ClubSelect } from "./ClubSelect";

export const Filter = () => {
  return (
    <View>
      <PositionSelect />
      <NationSelect />
      <ClubSelect />
    </View>
  );
};
