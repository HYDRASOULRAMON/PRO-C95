import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stacknavigator";
import Profile from "../screens/Profile";
const Drawer = createDrawerNavigator();
import firebase from 'firebase'
import CustomSideBarMenu from "./CustomSideBarMenu"
import Logout from "../screens/Logout";
export default class DrawerTabNavigator extends Component {



 constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
      isUpdated: false
    };
  }



  render(){

let props = this.props



  return (
    <Drawer.Navigator 
    
    drawerContentOptions= {{

activeTintColor : "red",
inactiveTintColor :"blue",
itemStyle:{marginVertical:5}




    }}
    drawerContent = {(props)=><CustomSideBarMenu{...props}/>}
    
    
    useLegacyImplementation screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="MyHome"
        component={StackNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
  }
};

