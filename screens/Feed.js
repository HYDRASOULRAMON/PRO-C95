import React, { Component } from "react";
import { Text, View , TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Feed extends Component {
   constructor(props) {
    super(props);
    this.state = {
      shopName:"",
      contact_no:"",
      address:""

    }
    };
  call=()=>{alert("calling 911")}
getShopInfo= ()=> {
    db.collection("shops")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            shopName: doc.data().shop,
           phoneNumber:doc.data().contact_no,
           address:doc.data().address
          

          });
        });
      });
  };
render(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <ImageBackground source={require("../assets/siu.png")} resizeMode="cover" style={styles.image} >
      <Text>Siuu shop</Text>
      <TouchableOpacity
              
              onPress={() => this.call()}
            >
      <Text>9878788767</Text>
      </TouchableOpacity>
       <TouchableOpacity
              style={[styles.button, { marginTop: 25 }]}
              onPress={this.getShopInfo}
            >
              <Text style={styles.buttonText}>shop details</Text>
            </TouchableOpacity>
     </ImageBackground> 
    </View>
    
  );
  
}

}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: "100%"
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  },
   button: {
    width: "43%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },

})







