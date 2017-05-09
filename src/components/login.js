import React from 'react';
import { Text, Button } from 'native-base';
import { Image, View, TouchableOpacity } from 'react-native';
import { Actions  } from 'react-native-router-flux';


class Login extends React.Component {


  _onPressButton(){
    Actions['tab1']();
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent: 'center', marginTop: 200}}>

        <Text style={{fontSize: 30, color: "darkblue"}}>PTE90学习助手</Text>
        <Text style={{fontSize: 10, color: "lightblue", marginTop: 5}}>机经大全，考位交流，经验分享</Text>

        <View style={{paddingTop: 50}}>

          <View style={{alignItems:'center', borderTopWidth: 0.5, borderColor: 'lightblue', width: 200, padding: 10, marginTop: 250}}>

            <TouchableOpacity onPress={this._onPressButton}>
              <Image
                style={{width: 40, height: 40}}
                source={{uri:'http://7xkckh.com1.z0.glb.clouddn.com/pte90/app/tencent-wechat.png'}}
              />

            </TouchableOpacity>
            <Text style={{color: 'lightblue', textAlign: 'center', alignItems: 'center', fontSize: 12}}> 微信登录 </Text>

          </View>

        </View>
      </View>
    );
  }

}

export default Login;
