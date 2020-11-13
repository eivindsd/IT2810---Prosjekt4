import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setNation } from "../actions/nationActions";
import { IAppState } from "../interfaces";
import DropDownPicker from "react-native-dropdown-picker";

export const NationSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const optionNation = [
    { value: "", label: "All nations" },
    { value: "Argentina", label: "Argentina" },
    { value: "Austria", label: "Austria" },
    { value: "Belgium", label: "Belgium" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Brazil", label: "Brazil" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Egypt", label: "Egypt" },
    { value: "England", label: "England" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Gabon", label: "Gabon" },
    { value: "Germany", label: "Germany" },
    { value: "Hungary", label: "Hungary" },
    { value: "Italy", label: "Italy" },
    { value: "Ivory Coast", label: "Ivory Coasy" },
    { value: "Mexico", label: "Mexico" },
    { value: "Morocco", label: "Morocco" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Norway", label: "Norway" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Romania", label: "Romania" },
    { value: "Scotland", label: "Scotland" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "South Korea", label: "South Korea" },
    { value: "Soviet Union", label: "Soviet Union" },
    { value: "Spain", label: "Spain" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Ukrain", label: "Ukraine" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Wales", label: "Wales" },
  ];

  const handleClick = (nat: string) => {
    console.log(nat);
    dispatch(setNation(nat));
    setIsOpen(!isOpen);
  };

  const nation = useSelector((state: IAppState) => state.nation);

  return (
    <View>
      <DropDownPicker
        items={[
          { value: "", label: "All nations" },
          { value: "Argentina", label: "Argentina" },
          { value: "Austria", label: "Austria" },
          { value: "Belgium", label: "Belgium" },
          { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
          { value: "Brazil", label: "Brazil" },
          { value: "Costa Rica", label: "Costa Rica" },
          { value: "Croatia", label: "Croatia" },
          { value: "Czech Republic", label: "Czech Republic" },
          { value: "Denmark", label: "Denmark" },
          { value: "Egypt", label: "Egypt" },
          { value: "England", label: "England" },
          { value: "Finland", label: "Finland" },
          { value: "France", label: "France" },
          { value: "Gabon", label: "Gabon" },
          { value: "Germany", label: "Germany" },
          { value: "Hungary", label: "Hungary" },
          { value: "Italy", label: "Italy" },
          { value: "Ivory Coast", label: "Ivory Coasy" },
          { value: "Mexico", label: "Mexico" },
          { value: "Morocco", label: "Morocco" },
          { value: "Netherlands", label: "Netherlands" },
          { value: "Norway", label: "Norway" },
          { value: "Poland", label: "Poland" },
          { value: "Portugal", label: "Portugal" },
          { value: "Romania", label: "Romania" },
          { value: "Scotland", label: "Scotland" },
          { value: "Senegal", label: "Senegal" },
          { value: "Serbia", label: "Serbia" },
          { value: "Slovakia", label: "Slovakia" },
          { value: "Slovenia", label: "Slovenia" },
          { value: "South Korea", label: "South Korea" },
          { value: "Soviet Union", label: "Soviet Union" },
          { value: "Spain", label: "Spain" },
          { value: "Switzerland", label: "Switzerland" },
          { value: "Ukrain", label: "Ukraine" },
          { value: "Uruguay", label: "Uruguay" },
          { value: "Wales", label: "Wales" },
        ]}
        placeholder="Select nation"
        labelStyle={{ color: "black", textAlign: "center" }}
        selectedLabelStyle={{ color: "white" }}
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

interface Styles {
  text: TextStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    padding: 0,
  },
  text: {
    color: "white",
  },
});
