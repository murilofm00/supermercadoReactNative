import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AppBar from "./src/components/AppBar";
import Footer from "./src/components/Footer";
import ProdutoCard from "./src/components/ProdutoCard";
import Produto from "./src/models/Produto";

interface IProps {}
interface IState {
  produtos: Produto[];
}

export default class App extends Component<IProps,   IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      produtos:   [
        {
          nome: "Arroz",
          valor: 20,
          quantidade: 12,
          marca: "Vasconcelos",
          referencia: 1,
          desconto: 10,
          atacado: "Leve 5 pague 4",
        },
        {
          nome: "Feijão",
          valor: 10,
          quantidade: 15,
          marca: "Vasconcelos",
          referencia: 2,
          desconto: 15,
          atacado: "Leve 6 pague 5",
        },
        {
          nome: "Detergente",
          valor: 1.99,
          quantidade: 100,
          marca: "Ypê",
          referencia: 405,
          desconto: 20,
          atacado: "Pague 10 Leve 9",
        },
        {
          nome: "Bolacha",
          valor: 8,
          quantidade:25,
          marca: "Mabel",
          referencia: 123,
          desconto: 8,
          atacado: "Pague 8 Leve 7",
        },
        {
          nome: "Pizza",
          valor: 10,
          quantidade:5,
          marca: "Adidas",
          referencia: 74,
          desconto: 15,
          atacado: "Pague 5 Leve 5",
        },
        {
          nome: "Café",
          valor: 10.5,
          quantidade:60,
          marca: "Kibom",
          referencia: 777,
          desconto: 25,
          atacado: "Pague 40 Leve 45",
        }
      ],
    };
  }

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppBar />
          <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Lista de Produtos</Text>
            <FlatList
              data={this.state.produtos}
              keyExtractor={(item) => item.referencia.toString()}
              renderItem={({ item }) => <ProdutoCard produto={item}></ProdutoCard>}
              extraData={this.state}
            ></FlatList>
          </ScrollView>
          <Footer />
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    // alignSelf: 'stretch',
    flexWrap: 'wrap'
  },
  titulo: {
    color: "#1DA1F2",
    fontSize: 25,
    fontWeight: "bold",
  },
});
