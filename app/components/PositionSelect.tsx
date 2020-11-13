import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "../actions/positionActions";
import { IAppState } from "../interfaces";
import DropDownPicker from "react-native-dropdown-picker";

export const PositionSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

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

  const handleClick = (pos: string) => {
    dispatch(setPosition(pos));
    setIsOpen(!isOpen);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const position = useSelector((state: IAppState) => state.position);

  return (
    <DropDownPicker
      items={[
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
      ]}
      labelStyle={{ color: "black", textAlign: "center" }}
      selectedLabelStyle={{ color: "white" }}
      placeholder="Select position"
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
  );
};

//   if (isOpen) {
//     return (
//       <ScrollView>
//         <Button title={"Positions: " + position} onPress={toggle} />
//         {optionPosition.map((l, i) => (
//           <ListItem key={i}>
//             <ListItem.Content>
//               <Button title={l.label} onPress={() => handleClick(l.value)} />
//             </ListItem.Content>
//           </ListItem>
//         ))}
//       </ScrollView>
//     );
//   } else {
//     return (
//       <View>
//         <Button title={"Positions: " + position} onPress={toggle} />
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   button: {
//     marginBottom: "10%",
//   },
// });
