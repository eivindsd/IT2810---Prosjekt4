import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAge } from "../actions/ageActions";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { Button } from "react-native-elements";

export const SortAge = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState("0");

  const handleClick = (value: string) => {
    setValue(value);
    dispatch(setAge(Number(value)));
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sortings: { [id: string]: string } = {
    "0": "No sort",
    "-1": "Descending",
    "1": "Ascending",
  };

  if (isOpen) {
    return (
      <View>
        <Button
          title={"Sort Age: " + sortings[value]}
          onPress={toggle}
          type="solid"
        />
        <RadioButton.Group
          onValueChange={(value) => handleClick(value)}
          value={value}
        >
          <RadioButton.Item label="No sort" value="0" />
          <RadioButton.Item label="Ascendig" value="1" />
          <RadioButton.Item label="Descending" value="-1" />
        </RadioButton.Group>
      </View>
    );
  } else {
    return <Button title={"Sort Age: "} onPress={toggle} />;
  }
};
