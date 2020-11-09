import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SearchBar, Text, Button } from "react-native-elements";
import { Filter } from "./Filter";
import { type } from "os";
import { getPlayers } from "../actions/playerActions";
import { IAppState } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";

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

  const handleSubmit = () => {
    console.log("Hei");
    getPlayers(name, pos, nat, clu, ag, scor, dispatch, 10, 0);
  };

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
        style={styles.button}
        title="SEARCH"
        onPress={handleSubmit}
        type="solid"
      />
      {console.log(name)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 60,
    fontStyle: "italic",
    color: "#940000",
    textAlign: "center",
    flex: 1,
    marginTop: 100,
  },
  searchbar: {
    flex: 1,
  },
  filter: {
    flex: 7,
  },
  button: {
    flex: 1,
  },
});
