import React from 'react';
import { Header, Icon, Title, Text, Button, Container, Content, Card, CardItem, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { View, AsyncStorage } from 'react-native';
import styles from '../../styles/itemsMainStyle';
import * as WeChat from 'react-native-wechat';
import { connect } from 'react-redux';
import { pointsUpdate } from '../../actions/userAction';
import { bindActionCreators } from 'redux';


class PointsRule extends React.Component {

// wx7152258bd87002b3
  constructor(props) {
      super(props);
      this.state = {
        apiVersion: 'waiting...',
        wxAppInstallUrl: 'waiting...',
        isWXAppSupportApi: 'waiting...',
        isWXAppInstalled: 'waiting...',
      };
    }

    async componentDidMount() {
      try {
          // await WeChat.registerApp('wx60a1c4562b04c471');
          this.setState({
            apiVersion: await WeChat.getApiVersion(),
            wxAppInstallUrl: await WeChat.getWXAppInstallUrl(),
            isWXAppSupportApi: await WeChat.isWXAppSupportApi(),
            isWXAppInstalled: await WeChat.isWXAppInstalled()
          });
          console.log(this.state);
        } catch (e) {
          console.error(e);
        }
        // console.log('getApiVersion', typeof WeChat.getApiVersion);
        // console.log('getWXAppInstallUrl', typeof WeChat.getWXAppInstallUrl);
        // console.log('sendRequest', typeof WeChat.sendRequest);
        // console.log('registerApp', typeof WeChat.registerApp);
        // console.log('sendErrorCommonResponse', typeof WeChat.sendErrorCommonResponse);
        // console.log('sendErrorUserCancelResponse', typeof WeChat.sendErrorUserCancelResponse);
        // console.log('sendAuthRequest', typeof WeChat.sendAuthRequest);
        // console.log('getWXAppInstallUrl', typeof WeChat.getWXAppInstallUrl);
        // console.log('openWXApp', typeof WeChat.openWXApp);
        // console.log('registerAppWithDescription', typeof WeChat.registerAppWithDescription);
        // console.log('isWXAppSupportApi', typeof WeChat.isWXAppSupportApi);
        // console.log('isWXAppInstalled', typeof WeChat.isWXAppInstalled);
    }

    async _onShare(){
      let Today = new Date();
      let todayStr = Today.getFullYear() +"-"+ (Today.getMonth()+1) +"-"+ Today.getDate();
      let shareAward = await AsyncStorage.getItem('@shareAward:key');
      if (shareAward == todayStr) {
        return;
      } else {
        await AsyncStorage.setItem('@shareAward:key', todayStr);
      }
      let { user } = this.props;
      user.points += 50;
      this.props.pointsUpdate(user);
    }

async _openWXApp() {
  await WeChat.openWXApp();
}
async _sendAuthRequest() {
  let code = await WeChat.sendAuthRequest("snsapi_userinfo", "123");
  console.log(code);
}
async _shareToTimeline(type) {
  switch (type) {
    case 'imageUrl':
        try {
        let result = await WeChat.shareToTimeline({
          type: 'imageUrl',
          title: 'web image',
          description: 'share web image to time line',
          mediaTagName: 'email signature',
          messageAction: undefined,
          messageExt: undefined,
          imageUrl: 'http://www.ncloud.hk/email-signature-262x100.png'
        });
        console.log('share image url to time line successful:', result);
        } catch (e) {
          console.log('share image url to time line failed with:', e);
        }
      break;
    case 'url':
        try {
          let result = await WeChat.shareToTimeline({
            type: 'news',
            title: 'PTE90考试助手,免费,全面,实时的机经考位信息。',
            description: 'share web image to time line',
            mediaTagName: 'email signature',
            messageAction: undefined,
            messageExt: undefined,
            webpageUrl: 'http://pte90.coding.me',
            thumbImage: 'https://dn-qianlonglaile.qbox.me/static/pcQianlong/images/buy_8e82463510d2c7988f6b16877c9a9e39.png'
          });
          // console.log(result);
          // TODO award points
          let { user } = this.props;
          user.points += 50;
          this.props.pointsUpdate(user,1);
        } catch (e) {
          console.log(e);
          if(e==-2){
            console.warn('user cancelled share');
            return;
          }
          console.error('share text message to time line failed with:', e);
        }
      break;
    case 'text':
        try {
          let result = await WeChat.shareToTimeline({
            type: 'text',
            description: 'hello, wechat'
          });
          console.log('share text message to time line successful:', result);
        } catch (e) {
          console.error('share text message to time line failed with:', e);
        }
      break;
    default:
  }
}



  render() {
    return (
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>积分规则</Title>
            </Body>
            <Right>
            </Right>
        </Header>
        <Content padder>
          <Card style={styles.mb}>
                <CardItem bordered>
                        <Body>
                          <Text>注册用户 + 100</Text>
                          <Text>分享软件 + 50</Text>
                          <Text>学习一天 - 10</Text>
                        </Body>
                </CardItem>

                <CardItem style={{paddingTop:0, paddingBottom:0}}>
                  <Left></Left>
                    <Body>
                      {/* <Button full bordered danger style={{marginLeft:20,marginRight:20,marginTop:10}}>
                          <Text>分享</Text>
                      </Button> */}
                    </Body>
                    <Right>
                      <Button transparent
                        // onPress={()=>this._shareToTimeline('url')}>
                        onPress={()=>this._shareToTimeline('url')}>
                        <Icon active name="share" />
                        <Text> 分享得积分</Text>
                      </Button>
                    </Right>
                </CardItem>
           </Card>
           <View>
            <Text>api版本：{this.state.apiVersion}</Text>
            <Text>微信注册url：{this.state.wxAppInstallUrl}</Text>
            <Text>是否支持api：{String(this.state.isWXAppSupportApi)}</Text>
            <Text>是否安装微信：{String(this.state.isWXAppInstalled)}</Text>
            <Button
              title="分享"
              onPress={this._onShare.bind(this)}>
              <Text>
                share
              </Text>
            </Button>
            <Button
              title="打开微信"
              onPress={this._openWXApp}>
              <Text>
                打开微信
              </Text>
            </Button>
            <Button
              title="微信登录"
              onPress={this._sendAuthRequest}>
              <Text>
                微信登录
              </Text>
            </Button>
            <Button
              title="分享图片链接"
              onPress={()=>this._shareToTimeline('imageUrl')}>
              <Text>分享图片链接</Text>
            </Button>
            <Button
              title="分享文本"
              onPress={()=>this._shareToTimeline('text')}>
              <Text>分享文本</Text>
            </Button>
            <Button
              title="分享url"
              onPress={()=>this._shareToTimeline('url')}>
              <Text>分享url</Text>
            </Button>
            <Button
              onPress={this.onShare}
              title="Share"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </Content>
      </Container>

    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ pointsUpdate }, dispatch);
}

export default connect(null, mapDispatchToProps)(PointsRule);
