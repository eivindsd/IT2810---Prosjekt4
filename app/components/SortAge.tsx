import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAge } from "../actions/ageActions";
import { View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export const SortAge = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState("0");

  const handleClick = (value: string) => {
    setValue(value);
    dispatch(setAge(Number(value)));
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <DropDownPicker
        items={[
          { value: "0", label: "No sort on age" },
          { value: "-1", label: "Descending age" },
          { value: "1", label: "Ascending age" },
        ]}
        labelStyle={{ color: "black", textAlign: "center" }}
        selectedLabelStyle={{ color: "white" }}
        placeholder="Sort age"
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
