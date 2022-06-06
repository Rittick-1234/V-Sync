import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "starred"
  },
  {
    type: "contact",
    name: "Pam",
    photo: require("../assets/photocontact.png")
  },
  {
    type: "contact",
    name: "Rachel",
    photo: require("../assets/photocontact.png")
  },
  {
    type: "contact",
    name: "Jim",
    photo: require("../assets/photocontact.png")
  }
];
function Contacts() {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.Image} />
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}
export default Contacts;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center"
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  text: {
    color: "#efefef",
    paddingLeft: 15,
    fontSize: 18
  },
  Image: {
    width: 55,
    height: 55,
    borderRadius: 20
  }
});
