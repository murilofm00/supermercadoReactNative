import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Products Bela Vista - 2021</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#606060",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 14,
  },
});
