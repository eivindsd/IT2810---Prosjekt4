import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAge } from "../actions/ageActions";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { Button } from "react-native-elements";
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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sortings: { [id: string]: string } = {
    "0": "Sort age: No sort",
    "-1": "Descending",
    "1": "Ascending",
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
        placeholder="Select club"
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

  //   if (isOpen) {
  //     return (
  //       <View>
  //         <DropDownPicker
  //           items={[
  //             { value: "0", label: "No sort" },
  //             { value: "-1", label: "Descending" },
  //             { value: "1", label: "Ascending" },
  //           ]}
  //           placeholder="Select position"
  //           defaultValue={""}
  //           containerStyle={{ height: 40 }}
  //           style={{ backgroundColor: "#2089dc", borderColor: "#2089dc" }}
  //           itemStyle={{
  //             justifyContent: "flex-start",
  //           }}
  //           dropDownStyle={{ backgroundColor: "#fafafa" }}
  //           onChangeItem={(item) => handleClick(item.value)}
  //         />
  //       </View>
  //     );
  //   } else {
  //     return <Button title={"Sort Age: " + sortings[value]} onPress={toggle} />;
  //   }
};
