import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState, IPlayer } from "../interfaces";
import { View, Text, Modal, Image, TouchableHighlight, TextStyle, StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { Button } from "react-native-elements";
import images from "../media/images/images";
import { getPlayers } from "../actions/playerActions";
import axios from "axios";

export const Scroller = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [nation, setNation] = useState("");
  const [club, setClub] = useState("");
  const [rating, setRating] = useState(0);
  const [skip, setSkip] = useState(0);
  const [score, setScore] = useState(0);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  //get global state variables from the Redux store
  const players = useSelector((state: IAppState) => state.players);
  const pos = useSelector((state: IAppState) => state.position);
  const nat = useSelector((state: IAppState) => state.nation);
  const clu = useSelector((state: IAppState) => state.club);
  const ag = useSelector((state: IAppState) => state.age);
  const scor = useSelector((state: IAppState) => state.score);
  const query = useSelector((state: IAppState) => state.query);

  const limit = 10;

  const toggle = (
    playername: string,
    playerage: string,
    playerposition: string,
    playernation: string,
    playerclub: string,
    rating: number,
    id: string,
    score: number
  ) => {
    setName(playername);
    setAge(playerage);
    setPosition(playerposition);
    setNation(playernation);
    setClub(playerclub);
    setRating(rating);
    setId(id);
    setScore(score);
    setModal(!modal);
  };

  //update the score on buttonclick
  const changeScore = (inputScore: number) => {
    let updatedScore = score + inputScore;
    setScore(updatedScore);
    axios.put("http://it2810-77.idi.ntnu.no:3000/api/players/" + id, { score: updatedScore }).then((res) => {
      console.log("PLAYERS", res);
    });
  };

  //to get the "next" players from the database on "next page" click
  const nextPage = () => {
    setSkip(skip + limit);
  };

  //to get the "previous" players from the database on "previous page" click
  const previousPage = () => {
    skip === 0 ? setSkip(0) : setSkip(skip - limit);
  };

  //get players every time query, skip or limit changes
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    getPlayers(query, pos, nat, clu, ag, scor, dispatch, limit, skip);
  }, [query, dispatch, skip, limit]);

  const imgSrc = images[name];

  return (
    <View>
      {players.players.map(({ ...players }: IPlayer) => (
        <View>
          <Button
            style={styles.buttonStyle}
            key={players.name}
            onPress={() =>
              toggle(
                players.name,
                players.age,
                players.position,
                players.nation,
                players.club,
                players.rating,
                players.id,
                players.score
              )
            }
            title={players.name}
          ></Button>
        </View>
      ))}
      <View style={styles.centeredView}>
        <Modal visible={modal} animationType="slide">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{name}</Text>
              <Text style={styles.textStyle}>Age: {age} </Text>
              <Text style={styles.textStyle}>Position: {position} </Text>
              <Text style={styles.textStyle}>Club: {club}</Text>
              <Text style={styles.textStyle}>Nation: {nation}</Text>
              <Text style={styles.textStyle}>Rating: {rating}</Text>
              <Text style={styles.textStyle}>Score: {score}</Text>

              <Image
                style={styles.imageStyle}
                source={{
                  uri: imgSrc,
                }}
              />

              <TouchableHighlight style={{...styles.openButton, backgroundColor: "green"}} onPress={() => changeScore(1)}>
                <Text>Upvote</Text>
              </TouchableHighlight>

              <TouchableHighlight style={{...styles.openButton, backgroundColor: "red"}} onPress={() => changeScore(-1)}>
                <Text>Downvote</Text>
              </TouchableHighlight>

              <TouchableHighlight style={{...styles.openButton, backgroundColor: "#2196F3"}} onPress={() => setModal(!modal)}>
                <Text>Hide </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
      {!isFirstRun.current && (
        <View>
          <Button
            style={styles.buttonStyle}
            disabled={skip === 0 ? true : false}
            onPress={previousPage}
            title="Previous page"
          ></Button>
          <Button
            style={styles.buttonStyle}
            onPress={nextPage}
            title="Next Page"
            disabled={players.players.length < 5 ? true : false}
          ></Button>
        </View>
      )}
    </View>
  );
};

interface Styles {
  centeredView: ViewStyle
  modalView: ViewStyle
  openButton: ViewStyle
  imageStyle: ImageStyle
  textStyle: TextStyle
  modalText: TextStyle
  buttonStyle: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 90,
    alignItems: 'center'
  },
  textStyle: {
    color: "black",
    textAlign: "left",
    marginBottom: 10,
    fontSize: 15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  imageStyle: {
     width: 250, 
     height: 250, 
     marginTop: 30,
     marginBottom: 5,
     overflow: 'visible'
  },
  buttonStyle: {
    marginLeft: '10%', 
    marginRight: '10%'
  }
})