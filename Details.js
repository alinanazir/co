import React from "react";
import axios from "axios";
import Summary from "./Summary"
import Countries from "./Countries"
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

class Details extends React.Component{

  state = {
    countries : [],
    global : [],
    currentDate: null,
    loading: true
  }

  async componentDidMount(){
    const res = await axios.get("https://api.covid19api.com/summary")
    console.log(res);
    this.setState({countries: res.data.Countries});
    this.setState({global: res.data.Global});
    this.setState({currentDate: res.data.Date});
    this.setState({loading: false});
  }

  render(){
    
    if(this.state.loading){
      return <h1>Loading...</h1>
    }
    return(
      
      <View style={styles.container}>
      <Summary summary = {this.state.global} currentDate = {this.state.currentDate}  />
      </View>
    )
  }
}

export default Details;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8FBC8F',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

