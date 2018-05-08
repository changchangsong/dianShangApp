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
   View
 } from 'react-native';

import {Navigator} from "react-native-deprecated-custom-components";

 /**-------导入外部的组件类---------**/
import LaunchImage from './Component/Main/XMGLaunchImage';

export default class XMGBuy extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{name:'启动页',component:LaunchImage,}}
          configureScene={()=>{
                       return Navigator.SceneConfigs.PushFromRight;
                  }}
          renderScene={(route,navigator)=>{
                     let Component = route.component;
                     return <Component {...route.passProps} navigator={navigator}/>;
                  }}
      />
    );
  }
}
