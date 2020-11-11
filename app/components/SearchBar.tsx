import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
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

  const handleChange = (name: string) => {
    setName(name);
  };

  const pos = useSelector((state: IAppState) => state.position);
  const nat = useSelector((state: IAppState) => state.nation);
  const clu = useSelector((state: IAppState) => state.club);
  const ag = useSelector((state: IAppState) => state.age);
  const scor = useSelector((state: IAppState) => state.score);

  const handleSubmit = (show: boolean) => {
    getPlayers(name, pos, nat, clu, ag, scor, dispatch, 10, 0);
    dispatch(setModal(show));
    console.log(pmodal);
  };

  const pmodal = useSelector((state: IAppState) => state.pmodal);

  return (
    <ScrollView>
      <Text style={styles.header}> FutHeader</Text>
      <SearchBar
        placeholder="Search for FUT-players"
        value={name}
        onChangeText={handleChange}
        style={styles.searchbar}
      />
      <Filter />
      <Button
        buttonStyle={{ borderRadius: 0 }}
        style={styles.button}
        title="SEARCH"
        onPress={() => handleSubmit(true)}
        type="solid"
      />

      {console.log(name)}
    </ScrollView>
  );
};

interface Styles {
  header: TextStyle;
  searchbar: ViewStyle;
  filter: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  header: {
    fontSize: 60,
    fontStyle: "italic",
    color: "#940000",
    textAlign: "center",
    flex: 1,
    marginTop: 150,
    marginBottom: 20,
  },
  searchbar: {
    flex: 1,
  },
  filter: {
    flex: 7,
  },
  button: {
    flex: 1,
    marginTop: 10,
  },
});
