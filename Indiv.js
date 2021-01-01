import React from "react";
import axios from "axios";
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
      <View style={{backgroundColor:'#8FBC8F'}}>  
      <table>
        <thead>
          <tr>
            <th>  Country </th>
            <th> New Confirmed </th>
            <th> Total recovered </th>
            <th> Total Deaths </th>
          </tr>
        </thead>
        <tbody>
          {this.state.countries.map(country => (
            <Countries countries = {country} key ={country.Country}/>  
          ))}
        </tbody>
      </table>
      </View>
    )
  }
}

export default Details;