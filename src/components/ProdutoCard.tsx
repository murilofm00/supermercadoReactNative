import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Produto from "../models/Produto";

interface IProps {
  produto: Produto;
}

export default class ProdutoCard extends Component<IProps> {
  render() {
    return (
      <View style={styles.produto}>
        <Text style={styles.nome}>{this.props.produto.nome}</Text>
        <View style={styles.linha}>
          <Text style={styles.info}>
            Valor: R$ {this.props.produto.valor.toFixed(2)}
          </Text>
          <Text style={styles.info}>Marca: {this.props.produto.marca}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.info}>
            Quantidade: {this.props.produto.quantidade}
          </Text>
          <Text style={styles.info}>Ref: {this.props.produto.referencia}</Text>
        </View>
        <View style={[styles.linha, styles.botoes]}>
          <Text style={[styles.botao, styles.botaoVerde]}>
            {this.props.produto.desconto}% de desconto
          </Text>
          <Text style={[styles.botao, styles.botaoLaranja]}>
            {this.props.produto.atacado}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  produto: {
    backgroundColor: "#C2C2C2",
    margin: 10,
  },
  nome: {
    margin: 8,
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  linha: {
    flex: 1,
    flexDirection: "row",
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 4,
    color: "white",
  },
  botoes: {
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  botao: {
    fontSize: 14,
    color: "white",
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 8,
    padding: 3,
  },
  botaoVerde: {
    backgroundColor: "#00FF7F",
  },
  botaoLaranja: {
    backgroundColor: "#FF8C00",
  },
});
