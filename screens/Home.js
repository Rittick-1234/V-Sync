import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuBar from "../components/MenuBar";
import Contacts from "../components/Contacts";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <MenuBar navigation={navigation} />
      <Contacts />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    height: "100%",
    padding: 15
  }
});
