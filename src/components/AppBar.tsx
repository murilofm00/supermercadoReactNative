import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

export default class Titulo extends Component {
  render() {
    return (
      <View style={styles.appBar}>
        <Image
          source={{
            uri:
              "https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False",
            width: 30,
            height: 30,
          }}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#3D8AF7",
    height: 55,
  },
  image: {
    backgroundColor: "white",
    margin: 10,
  },
});
