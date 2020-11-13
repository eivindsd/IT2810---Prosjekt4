import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SearchBar, Text, Button } from "react-native-elements";
import { Filter } from "./Filter";
import { getPlayers } from "../actions/playerActions";
import { IAppState } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../actions/modalActions";

export const Search = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  //set local state name to whatever the user is typing in the searchbar
  const handleChange = (name: string) => {
    setName(name);
  };

  //get global state variables
  const pos = useSelector((state: IAppState) => state.position);
  const nat = useSelector((state: IAppState) => state.nation);
  const clu = useSelector((state: IAppState) => state.club);
  const ag = useSelector((state: IAppState) => state.age);
  const scor = useSelector((state: IAppState) => state.score);

  //on submit, get players from database, and show modal with results
  const handleSubmit = (show: boolean) => {
    getPlayers(name, pos, nat, clu, ag, scor, dispatch, 9, 0);
    dispatch(setModal(show));
  };

  return (
    <View>
      <Text style={styles.header}> FutHeader</Text>
      <View style={{ marginBottom: "5%" }}>
        <SearchBar
          placeholder="Search for FUT-players"
          value={name}
          onChangeText={handleChange}
          style={{ zIndex: 1 }}
        />
      </View>
      <View style={styles.filter}>
        <Filter />
      </View>

      <Button
        buttonStyle={{ borderRadius: 0 }}
        style={styles.button}
        title="SEARCH"
        onPress={() => handleSubmit(true)}
        type="solid"
      />
    </View>
  );
};

//interfaces to specify styles for the searchbar 
interface Styles {
  header: TextStyle;
  button: ViewStyle;
  page: ViewStyle;
  filter: ViewStyle;
}

//stylesheet for the different react native elements in Searchbar
const styles = StyleSheet.create<Styles>({
  header: {
    fontSize: 50,
    fontStyle: "italic",
    color: "#940000",
    textAlign: "center",
    marginTop: "30%",
    marginBottom: "5%",
  },

  button: {
    marginTop: "0%",
  },
  page: {
    height: "100%",
  },
  filter: {
    marginBottom: "38%",
  },
});
