import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**----导入外部的组件----**/
import Main from './XMGMain';
const launchimage = require('../images/launchimage.png');

export default class Launch extends Component {
    render() {
        return (
            <Image source={launchimage} style={styles.launchImageStyle}/>
        );
    }

    // 复杂的操作:定时器\网络请求
    componentDidMount(){
        // 定时: 隔2s切换到Main
        setTimeout(()=>{
            // 页面的切换
            this.props.navigator.replace({
                component: Main, // 具体路由的版块
            });
        }, 1200);
    }
}


const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1
    }
});
