import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAge } from "../actions/ageActions";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Button } from "react-native-elements";
import { getScore } from "../actions/scoreAction";
import DropDownPicker from "react-native-dropdown-picker";

export const SortScore = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState("0");

  const handleClick = (value: string) => {
    setValue(value);
    dispatch(getScore(Number(value)));
    setIsOpen(!isOpen);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sortings: { [id: string]: string } = {
    "0": "No sort",
    "-1": "Descending",
    "1": "Ascending",
  };

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
  //   if (isOpen) {
  //     return (
  //       <View>
  //         <Button
  //           title={"Sort Score: " + sortings[value]}
  //           onPress={toggle}
  //           type="solid"
  //         />
  //         <RadioButton.Group
  //           onValueChange={(value) => handleClick(value)}
  //           value={value}
  //         >
  //           <RadioButton.Item label="No sort" value="0" />
  //           <RadioButton.Item label="Ascendig" value="1" />
  //           <RadioButton.Item label="Descending" value="-1" />
  //         </RadioButton.Group>
  //       </View>
  //     );
  //   } else {
  //     return <Button title={"Sort Score: " + sortings[value]} onPress={toggle} />;
  //   }
};
