import * as React from 'react';
import {Ionicons} from "@expo/vector-icons";
import Icon from 'react-native-ionicons';
import Details from './Details';
import Indiv from './Indiv'
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
import {createStackNavigator} from '@react-navigation/stack';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );

}

function mains({navigation}){
  return(
    <div className="App">
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <View style={styles.openmenubutton} >
    <Icon name="camera" size={40} color="white" />
    </View>
    </TouchableOpacity>
   
    <Details />
    </div>
  );
}

function mainindv({navigation}){
  return(
    <div className="App">
    
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <View style={styles.openmenubutton} >
    <Icon name="camera" size={40} color="white" />
    </View>
    </TouchableOpacity>
    <Indiv />
    </div>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
     
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}
    drawerStyle={{
      backgroundColor: 'white',
      margine: 5,
      padding: 5
    }}
    >    
    <Drawer.Screen name="World Statistics Screen" component={mains} options=      {{
      drawerLabel : "World Statistics Screen",
      drawerIcon : () =>  <Ionicons name="md-home" size={32} color="red" />
    }} />
    <Drawer.Screen name="Countries Statistic Screen" component={mainindv} options=      {{
      drawerLabel : "World Statistics Screen",
      drawerIcon : () =>  <Ionicons name="md-home" size={32} color="red" />
    }} />
    </Drawer.Navigator>

  )
}



export default function  App(){
  return(
    <NavigationContainer>
    <MyDrawer />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  openmenubutton:{
    justifyContent: 'center',
    backgroundColor: '#8FBC8F',
    padding : 10,
  }
});

