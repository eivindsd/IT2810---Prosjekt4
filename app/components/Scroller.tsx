import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState, IPlayer } from "../interfaces";
import {
  View,
  Text,
  Modal,
  Image,
  ImageBackground,
  TouchableHighlight,
  TextStyle,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { Button } from "react-native-elements";
import images from "../images/images";
import { getPlayers } from "../actions/playerActions";
import axios from "axios";
import { setModal } from "../actions/modalActions";

export const Scroller = () => {
  const [modal, setCardModal] = useState(false);
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

  const limit = 9;

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
    setCardModal(true);
  };

  //update the score on buttonclick
  const changeScore = (inputScore: number) => {
    let updatedScore = score + inputScore;
    setScore(updatedScore);
    axios
      .put("http://it2810-77.idi.ntnu.no:3000/api/players/" + id, {
        score: updatedScore,
      })
      .then((res) => {});
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

  const pmodal = useSelector((state: IAppState) => state.pmodal);

  const exit = () => {
    dispatch(setModal(false));
    setSkip(0);
  };

  return (
    <View>
      <Modal visible={pmodal} animationType="slide">
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri:
              "https://i.pinimg.com/originals/19/1b/6d/191b6d669f008bfaf3950dd3e71ec2ca.jpg",
          }}
        >
          <TouchableHighlight
            style={{ ...styles.closeButton, backgroundColor: "#2196F3" }}
            onPress={() => exit()}
          >
            <Text style={styles.buttonText}> X </Text>
          </TouchableHighlight>
          <View style={styles.scrollerStyle}>
            {players.players.map(({ ...players }: IPlayer, i: number) => (
              <View key={i}>
                <Button
                  buttonStyle={{
                    backgroundColor: "#336699",
                    borderRadius: 15,
                    marginBottom: 15,
                    width: "80%",
                    marginLeft: "10%",
                  }}
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
                  title={players.name + " " + players.rating}
                ></Button>
              </View>
            ))}
          </View>

          <View style={styles.centeredView}>
            <Modal visible={modal} animationType="slide">
              <ImageBackground
                style={styles.backgroundImage}
                source={{
                  uri:
                    "https://i.pinimg.com/originals/19/1b/6d/191b6d669f008bfaf3950dd3e71ec2ca.jpg",
                }}
              >
                {/* <Button onPress={() => changeScore(1)}>Upvote</Button>
        <Button onPress={() => changeScore(-1)}>Downvote</Button> */}
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

                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "green" }}
                      onPress={() => changeScore(1)}
                    >
                      <Text style={styles.modalButtonText}>Upvote</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "red" }}
                      onPress={() => changeScore(-1)}
                    >
                      <Text style={styles.modalButtonText}>Downvote</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={{
                        ...styles.openButton,
                        backgroundColor: "#2196F3",
                      }}
                      onPress={() => setCardModal(!modal)}
                    >
                      <Text style={styles.modalButtonText}> Exit </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </ImageBackground>
            </Modal>
          </View>
          {!isFirstRun.current && (
            <View style={styles.button}>
              <Button
                style={styles.skipButton}
                disabled={skip === 0 ? true : false}
                onPress={previousPage}
                title="Previous page"
                buttonStyle={{
                  width: 150,
                  marginLeft: "18%",
                }}
              ></Button>
              <Button
                style={styles.skipButton}
                onPress={nextPage}
                title="Next Page"
                disabled={players.players.length < 5 ? true : false}
                buttonStyle={{ width: 150 }}
              ></Button>
            </View>
          )}
        </ImageBackground>
      </Modal>
    </View>
  );
};

interface Styles {
  centeredView: ViewStyle;
  modalView: ViewStyle;
  openButton: ViewStyle;
  imageStyle: ImageStyle;
  textStyle: TextStyle;
  modalText: TextStyle;
  backgroundImage: ImageStyle;
  button: ViewStyle;
  closeButton: ViewStyle;
  buttonText: TextStyle;
  modalButtonText: TextStyle;
  skipButton: ViewStyle;
  scrollerStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    marginTop: 5,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    marginLeft: "88 %",
    marginBottom: "10%",
  },
  modalButtonText: {
    textAlign: "center",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: -5,
  },
  textStyle: {
    color: "black",
    textAlign: "left",
    marginBottom: 10,
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  imageStyle: {
    width: 250,
    height: 250,
    marginTop: 30,
    marginBottom: 5,
    overflow: "visible",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    width: "80%",
  },
  skipButton: {
    width: "100%",
  },

  scrollerStyle: {
    height: "70%",
  },
});
