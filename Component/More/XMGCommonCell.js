import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Switch
} from 'react-native';


export default class CommonCell extends Component {
    constructor(props) {
      super(props);

      this.state = {
          isOn:false
      };
    }

    render() {
        return (
          <TouchableOpacity onPress={()=>{alert('点了')}}>
            <View style={styles.container}>
                {/*左边*/}
                <Text style={{marginLeft:8}}>{this.props.title}</Text>
                {/*右边*/}
                {this.renderRightView()}
            </View>
          </TouchableOpacity>
        );
    }

    // cell右边显示的内容
    renderRightView(){
      // 判断
       if (this.props.isSwitch){ // true
           return(
              <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight:8}} />
           )
       }else{
           return(
             <View style={{flexDirection:'row', alignItems:'center'}}>
               {this.rightTitle()}
               <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8}}/>
             </View>
           )
       }
    }

    rightTitle(){
        if('rightTitle' in this.props){
            return(
                <Text style={{color:'gray', marginRight:3}}>{this.props.rightTitle}</Text>
            )
        }
    }
};


const styles = StyleSheet.create({
    container:{
        height:Platform.OS == 'ios' ? 40: 30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 垂直居中
        alignItems:'center'
    }
});
