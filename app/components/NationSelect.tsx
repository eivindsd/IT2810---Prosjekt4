import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { ListItem, Button } from "react-native-elements";

export const NationSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClick = () => {
    Alert.alert("Halla");
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <ScrollView>
        <Button title="Nation" onPress={toggle} />
        {optionNation.map((l, i) => (
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
        <Button title="Nation" onPress={toggle} />
      </ScrollView>
    );
  }
};
