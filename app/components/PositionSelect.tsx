import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { ListItem, Button } from "react-native-elements";

export const PositionSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const optionPosition = [
    { value: "", label: "All positions" },
    { value: "GK", label: "Goalkeeper" },
    { value: "RB", label: "Right Back" },
    { value: "CB", label: "Center Back" },
    { value: "LB", label: "Left Back" },
    { value: "CDM", label: "Central Defensive Midfielder" },
    { value: "RM", label: "Right Midfielder" },
    { value: "CM", label: "Central Midfielder" },
    { value: "LM", label: "Left Midfielder" },
    { value: "CAM", label: "Central Attacking Midfielder" },
    { value: "RW", label: "Right Wing" },
    { value: "LW", label: "Left Wing" },
    { value: "CF", label: "Center Forward" },
    { value: "ST", label: "Striker" },
  ];

  const handleClick = () => {
    Alert.alert("Hei");
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <ScrollView>
        <Button title="Positions" onPress={toggle} />
        {optionPosition.map((l, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <Button title={l.label} onPress={handleClick} />
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <Button title="Positions" onPress={toggle} />
      </ScrollView>
    );
  }
};
