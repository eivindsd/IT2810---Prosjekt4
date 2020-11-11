import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { setClub } from "../actions/clubActions";
import { IAppState } from "../interfaces";

export const ClubSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const optionClub = [
    { value: "", label: "All clubs" },
    { value: "Arsenal", label: "Arsenal" },
    { value: "Atalanta", label: "Atalanta" },
    { value: "Atletico Madrid", label: "Atletico Madrid" },
    { value: "Barcelona", label: "Barcelona" },
    { value: "Bayern Munich", label: "Bayern Munich" },
    { value: "Borussia Dortmund", label: "Borussia Dortmund" },
    { value: "Borussia Mönchengladbach", label: "Borussia Mönchengladbach" },
    { value: "Cagliari", label: "Cagliari" },
    { value: "Chelsea", label: "Chelsea" },
    { value: "Inter Milan", label: "Inter Milan" },
    { value: "Juventus", label: "Juventus" },
    { value: "Lazio", label: "Lazio" },
    { value: "Legends", label: "Legends" },
    { value: "Leicester", label: "Leicester" },
    { value: "Liverpool", label: "Liverpool" },
    { value: "Manchester City", label: "Manchester City" },
    { value: "Manchester United", label: "Manchester United" },
    { value: "Napoli", label: "Napoli" },
    { value: "PSG", label: "PSG" },
    { value: "Real Madrid", label: "Real Madrid" },
    { value: "Real Socidad", label: "Real Socidad" },
    { value: "Red Bull Leipzig", label: "Red Bull Leipzig" },
    { value: "Tottenham", label: "Tottenham" },
    { value: "Villareal", label: "Villareal" },
  ];

  const handleClick = (clu: string) => {
    dispatch(setClub(clu));
    setIsOpen(!isOpen);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const club = useSelector((state: IAppState) => state.club);

  if (isOpen) {
    return (
      <ScrollView>
        <Button title={"Club: " + club} onPress={toggle} />
        {optionClub.map((l, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <Button title={l.label} onPress={() => handleClick(l.value)} />
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <Button title={"Club: " + club} onPress={toggle} />
      </ScrollView>
    );
  }
};
