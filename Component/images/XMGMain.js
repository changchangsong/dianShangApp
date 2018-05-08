import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
} from 'react-native';

//引入tabbar支持包
import TabNavigator from 'react-native-tab-navigator';

const TabNavigatorItem =TabNavigator.Item;

const icon_tabbar_homepage = require('./images/icon_tabbar_homepage.png');
const icon_tabbar_merchant_normal = require('./images/icon_tabbar_merchant_normal.png');
const icon_tabbar_mine = require('./images/icon_tabbar_mine.png');
const icon_tabbar_misc = require('./images/icon_tabbar_misc.png');

const icon_tabbar_homepage_selected = require('./images/icon_tabbar_homepage_selected.png');
const icon_tabbar_merchant_selected = require('./images/icon_tabbar_merchant_selected.png');
const icon_tabbar_mine_selected = require('./images/icon_tabbar_mine_selected.png');
const icon_tabbar_misc_selected = require('./images/icon_tabbar_misc_selected.png');

export default class Mian extends Component {

  constructor(){
    super();
    this.state={
      selectedTab:'Home',
    }
  }

  /**
  tab点击方法
  **/
  onPress(tabName){
    if(tabName){
      this.setState(
        {
          selectedTab:tabName,
        }
      );
    }
  }
   /**
   渲染每项
   **/
   renderTabView(title,tabName,tabContent,isBadge){
     var tabNomal;
     var tabPress;
     switch (tabName) {
       case 'Home':
         tabNomal=icon_tabbar_homepage;
         tabPress=icon_tabbar_homepage_selected;
         break;
     case 'Video':
       tabNomal=icon_tabbar_merchant_normal;
       tabPress=icon_tabbar_merchant_selected;
       break;
     case 'Follow':
       tabNomal=icon_tabbar_mine;
       tabPress=icon_tabbar_mine_selected;
       break;
     case 'Mine':
       tabNomal=icon_tabbar_misc;
       tabPress=icon_tabbar_misc_selected;
       break;
       default:
     }
     return(
       <TabNavigatorItem
        title={title}
        renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
        renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
        selected={this.state.selectedTab===tabName}
        selectedTitleStyle={{color:'#f85959'}}
        onPress={()=>this.onPress(tabName)}
        renderBadge={()=>isBadge?<View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null}
       >
       {
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{tabContent}</Text></View>
       }
       </TabNavigatorItem>
     );
   }

   /**
   自定义tabbar
   **/
  tabBarView(){
    return (
      <View style={{flex:1}}>
      <TabNavigator
       tabBarStyle={styles.tab}
      >
      {this.renderTabView('头条','Home','头条板块',true)}
      {this.renderTabView('视频','Video','视频板块',false)}
      {this.renderTabView('关注','Follow','关注板块',false)}
      {this.renderTabView('我的','Mine','我的板块',false)}
      </TabNavigator>
      </View>
    );
  }


  render() {
    var tabBarView=this.tabBarView();
    return (
      <View style={styles.container}>
        {tabBarView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab:{
    height: 52,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width:25,
    height:25,
  },
  badgeView:{
    width:22,
    height:14,
    backgroundColor:'#f85959',
    borderWidth:1,
    marginLeft:10,
    marginTop:5,
    borderColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  badgeText:{
    color:'#fff',
    fontSize:8,
  }
});
