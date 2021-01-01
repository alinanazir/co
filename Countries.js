import React, { useState , useEffect, useLayoutEffect} from 'react';
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

class Countries extends React.Component{

  render(){
    const {countries} = this.props;
    const [fav, setfav] = [];

    const favadd =(e)=>{
      setfav([
                ...fav,
                {key: Math.random().toString(), count: e}
                ])
    }

    return(
      <tr>
        <td>
        <TouchableOpacity onPress={()=> favadd(countries.Country)}>
        {countries.Country}
        </TouchableOpacity> 
        </td>
        <td>
        {countries.NewConfirmed} </td>
        <td>{countries.TotalRecovered} </td>
        <td>{countries.TotalDeaths} </td>

      </tr>
    )
  }

}

export default Countries;