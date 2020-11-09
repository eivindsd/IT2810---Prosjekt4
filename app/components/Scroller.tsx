import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState, IPlayer } from "../interfaces";
import { View, Text, Modal, Image, TouchableHighlight } from "react-native";
import { Button } from "react-native-elements";
import images from "../media/images/images";
import { getPlayers } from "../actions/playerActions";

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
      <View>
        <Modal visible={modal} animationType="slide">
          {/* <Button onPress={() => changeScore(1)}>Upvote</Button>
        <Button onPress={() => changeScore(-1)}>Downvote</Button> */}
          <View style={{ marginLeft: 150, marginTop: 300 }}>
            <View>
              <Text> Age: {age} </Text>

              <Text>Position: {position} </Text>

              <Text>Club: {club}</Text>

              <Text> Nation: {nation}</Text>

              <Text>Rating: {rating}</Text>

              <Text> Score: {score}</Text>

              <Image
                style={{ width: 150, height: 150 }}
                source={{
                  uri: imgSrc,
                }}
              />
              <TouchableHighlight onPress={() => setModal(!modal)}>
                <Text> Hide modal </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
      {!isFirstRun.current && (
        <View>
          <Button
            // id={skip === 0 ? "disable" : ""}
            // className="prevnext"
            // color="primary"
            // disabled={skip === 0 ? true : false}
            onPress={previousPage}
            title="Previous page"
          ></Button>
          <Button
            // id={players.players.length < 5 ? "disable" : ""}
            // className="prevnext"
            // color="primary"
            onPress={nextPage}
            title="Next Page"
            // disabled={players.players.length < 5 ? true : false}
          ></Button>
        </View>
      )}
    </View>
  );
};
