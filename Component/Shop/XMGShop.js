import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

const icon_shop_local = require('../images/icon_shop_local.png');
const icon_shop_search = require('../images/icon_shop_search.png');

export default class Shop extends Component {
    constructor(props) {
      super(props);

      this.state = {
        detailUrl: 'https://km.meituan.com/'
      };
    }

    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }

    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
                    <Image source={icon_shop_local} style={styles.navImageStyle}/>
                </TouchableOpacity>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>商家</Text>
                <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.rightViewStyle}>
                    <Image source={icon_shop_search} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        flex:1
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    navImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,
    },

    leftViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },

    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },

    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },
});
