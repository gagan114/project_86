import React, { Component } from 'react';
import{Text, View} from 'react-native';

export default class DashbordScreen extends Components {
  render(){
    return(
      <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}>
      <Text>Dashbord</Text>
      </View>
    )
  }
}