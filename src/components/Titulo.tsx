import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

interface IProps {
  texto: string;
}
export default class Titulo extends Component<IProps> {
  render() {
    return <Text>{this.props.texto}</Text>;
  }
}

const styles = StyleSheet.create({
  titulo: {
    color: "#1DA1F2",
    fontSize: 20,
  },
});
