import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { getScore } from "../actions/scoreAction";
import DropDownPicker from "react-native-dropdown-picker";

export const SortScore = () => {
  const dispatch = useDispatch();

  //sets score (to -1, 0 or 1) to specify sort
  const handleClick = (value: string) => {
    dispatch(getScore(Number(value)));
  };

  //Used DropDownPicker to choose sorting on score
  return (
    <View>
      <DropDownPicker
        items={[
          { value: "0", label: "No sort on score" },
          { value: "-1", label: "Descending score" },
          { value: "1", label: "Ascending score" },
        ]}
        labelStyle={{ color: "black", textAlign: "center" }}
        selectedLabelStyle={{ color: "white" }}
        placeholder="Sort score"
        placeholderStyle={{ color: "white" }}
        arrowColor="white"
        defaultValue={""}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#2089dc", borderColor: "#2089dc" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => handleClick(item.value)}
      />
    </View>
  );
};
