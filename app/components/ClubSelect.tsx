import React from "react";
import { useDispatch} from "react-redux";
import { setClub } from "../actions/clubActions";
import DropDownPicker from "react-native-dropdown-picker";

export const ClubSelect = () => {
  const dispatch = useDispatch();

  //set club to chosen club from DropDownPicker
  const handleClick = (clu: string) => {
    dispatch(setClub(clu));
  };

  //used DropDownPicker to choose club to filter on
  return (
    <DropDownPicker
      items={[
        { value: "", label: "All clubs" },
        { value: "Arsenal", label: "Arsenal" },
        { value: "Atalanta", label: "Atalanta" },
        { value: "Atletico Madrid", label: "Atletico Madrid" },
        { value: "Barcelona", label: "Barcelona" },
        { value: "Bayern Munich", label: "Bayern Munich" },
        { value: "Borussia Dortmund", label: "Borussia Dortmund" },
        {
          value: "Borussia Mönchengladbach",
          label: "Borussia Mönchengladbach",
        },
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
      ]}
      labelStyle={{ color: "black", textAlign: "center" }}
      selectedLabelStyle={{ color: "white" }}
      placeholder="Select club"
      placeholderStyle={{ color: "white" }}
      arrowColor="white"
      defaultValue={""}
      containerStyle={{ height: 40 }}
      style={{
        backgroundColor: "#2089dc",
        borderColor: "#2089dc",
      }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      onChangeItem={(item) => handleClick(item.value)}
    />
  );
};
