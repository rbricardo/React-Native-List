/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from 'react-native';

import { NavigationActions } from 'react-navigation';


import List from './src/List';

export default class FlatListt extends Component {

  constructor() {
    super();

     this.state = {
        nome: '',
        sobrenome: '',
        email: '',
        endereco: '',
        whatsapp: ''
    };
  }

  changeNome(nome){
    this.setState({nome})
  }

  changeSobrenome(sobrenome){
    this.setState({sobrenome})
  }

  changeEmail(email){
    this.setState({email})
  }

  changeEndereco(endereco){
    this.setState({endereco})
  }

  changeWhatsapp(whatsapp){
    this.setState({whatsapp})
  }

  buttonPressed(){
    if (this.state.nome && this.state.sobrenome && this.state.email && this.state.endereco && this.state.whatsapp) {

      let arrayData = [];

      const data = {
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        email: this.state.email,
        endereco: this.state.endereco,
        whatsapp: this.state.whatsapp
      }

      arrayData.push(data);

      try {
        AsyncStorage.getItem('database_form').then((value) => {
          if (value !== null) {
            const d = JSON.parse(value);
            d.push(data)
            
          } else {
            AsyncStorage.setItem('database_form', JSON.stringify(arrayData)).then(() => {
              // this.props.navigation.navigate('List')
              this.props.n/avigator.push({
                title: 'Lista de cadastro',
                component: List
              })
            }).
            catch((data) => {
              console.log(data)
            })
          }
        })
      } catch(err) {
        console.log(err)
      }

    } else {
      Alert.alert("Erro!", "Acho que você esqueceu de digitar algum campo :)")
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View>

          <Text style={styles.title}> Formulário de Cadastro </Text>
        
          <TextInput 
          style={styles.input}
            placeholder="Nome"
            value={this.state.nome}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(nome) => this.changeNome(nome)}
          />

         <TextInput 
            style={styles.input}
            placeholder="Sobrenome"
            value={this.state.sobrenome}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(sobrenome) => this.changeSobrenome(sobrenome)}
          />

         <TextInput 
            style={styles.input}
            placeholder="Email"
            value={this.state.email}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(email) => this.changeEmail(email)}
          />

         <TextInput 
            multiline={true}
            style={[styles.input, styles.textArea]}
            placeholder="Endereço"
            value={this.state.endereco}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(endereco) => this.changeEndereco(endereco)}
          />

         <TextInput 
            style={styles.input}
            placeholder="WhatsApp"
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.whatsapp}
            onChangeText={(whatsapp) => this.changeWhatsapp(whatsapp)}
          /> 

          <TouchableHighlight style={styles.button} onPress={() => this.buttonPressed()}>
            <Text style={styles.textButton}> Cadastrar </Text>
          </TouchableHighlight>
        
        </View>
      </View>

    
    );
  }
}

var styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },

  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15
  },

  textButton: {
    textAlign: 'center',
    color: '#FFFFFF' 
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  },

  textArea: {
    height: 60
  }

});


AppRegistry.registerComponent('FlatListt', () => FlatListt);
