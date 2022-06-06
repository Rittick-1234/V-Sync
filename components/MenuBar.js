import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Navigation from "../Navigation";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#F14A16"
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join"
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule"
  },
  {
    id: 4,
    name: "upload",
    title: "Screen-Share"
  }
];

function MenuBar({ navigation }) {
  const openMeeting = () => {
    navigation.navigate("room");
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => openMeeting()}
            style={{
              ...styles.button,

              backgroundColor: item.customColor ? item.customColor : "#35589A"
            }}
          >
            <FontAwesome name={item.name} size={23} color={"#efefef"} />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}
export default MenuBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingTop: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#35589A",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  menuText: {
    color: "#efefef",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600"
  }
});
