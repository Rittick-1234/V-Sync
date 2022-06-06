import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState();

  const joinRoom = () => {
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    //const API_URL = "https://356b-103-220-210-164.in.ngrok.io";
    socket = io("https://81f4-103-220-210-164.in.ngrok.io");
    socket.on("connection", () => console.log("connected"));
    socket.on("all-users", users => {
      console.log("Active Users");
      console.log(users);
      setActiveUsers(users);
    });
  }, []);
  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1
  }
});
