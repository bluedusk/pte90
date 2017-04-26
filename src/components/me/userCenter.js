
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Platform, Text, AsyncStorage } from 'react-native';
// import { actions } from 'react-native-navigation-redux-helpers';
import { Thumbnail, Container, Header, Title, Content, Button, Icon, ListItem, Badge, Left, Right, Body, Switch, Radio, Picker, Separator } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchUser } from '../../actions/userAction';
import { fetchPositions } from '../../actions/positionAction';
import PTEFooter from '../common/pteFooter';

import styles from '../../styles/styles';

const Item = Picker.Item;

// const {
//   popRoute,
// } = actions;

class UserCenter extends Component {


  constructor(props) {
    super(props);
    this.state = {
      user:{},
      results: {
        items: [],
      },
    };
  }
  async componentWillMount() {
    console.log("user center componentWillUnmount");

    var value = await AsyncStorage.getItem('@user:key');
    this.setState({user:JSON.parse(value)});
    console.log(this.state.user);
  // query user info
  //  this.props.fetchUser();
  }

  componentDidMount(){
    console.log("user center componentDidMount");
  // query user info
    this.props.fetchUser();
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value,
    });
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  onItemPress(type){
    switch (type) {
      case 'position':
        Actions.positionTransfer();
        this.props.fetchPositions(this.state.user.id);
        break;
      case 'items':
        // TODO hardcode user
        Actions.userItems({header:'我的分享',user:this.state.user});
        break;
      case 'points':
        // TODO hardcode user
        Actions.pointsRule({user:this.state.user});
        break;
      default:
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          </Left>
          <Body>
            <Text>{this.props.user.user.name}</Text>
          </Body>
          <Right />
        </Header>

        <Content>
          <Thumbnail style={{width: 100, height: 100, borderRadius: 50, alignSelf:'center', marginTop: 20, marginBottom: 5}} source={{uri:"http://www.izhufu.net/uploads/userup/150731/bd_14383313661746.jpg"}} />
          <Text style={{alignSelf:'center',color:'grey', marginBottom:10}}>积分:{this.props.user.user.points}</Text>

          <Separator bordered noTopBorder/>
          {/* <ListItem avatar>
                 <Left>
                     <Thumbnail size={80} source={{uri:"http://www.izhufu.net/uploads/userup/150731/bd_14383313661746.jpg"}} />
                 </Left>
                 <Body>
                     <Text>{this.props.user.user.name}</Text>
                     <Text note>points:{this.props.user.user.points}</Text>
                 </Body>
                 <Right>
                     <Button transparent>
                         <Text>View</Text>
                     </Button>
                 </Right>
             </ListItem>
             <Separator bordered noTopBorder /> */}

          {/* <ListItem icon>
            <Left>
                <Icon active name="body" style={{color:'#5855D6'}}/>
            </Left>
            <Body>
              <Text>我的积分</Text>
            </Body>
            <Right>
              <Text>{this.props.user.user.points}</Text>
            </Right>
          </ListItem> */}
          <ListItem icon button onPress={this.onItemPress.bind(this,'points')}>
            <Left>
                <Icon name="bulb" style={{color:'#5855D6'}}/>
            </Left>
            <Body>
              <Text>积分规则</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon button onPress={this.onItemPress.bind(this,'items')}>
            <Left>
                <Icon name="copy" style={{color:'#5855D6'}}/>
            </Left>
            <Body>
              <Text>我的机经</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon button onPress={this.onItemPress.bind(this,'position')}>
            <Left>
                <Icon name="moon" style={{color:'#5855D6'}}/>
            </Left>
            <Body>
              <Text>我的考位</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Icon name="plane" style={{color:'#5855D6'}}/>
            </Left>
            <Body>
              <Text>离线模式</Text>
            </Body>
            <Right>
              <Switch value={false} onTintColor="#50B948" />
            </Right>
          </ListItem>
          <ListItem icon button onPress={this.onItemPress.bind(this,'quit')}>
            <Left>
                <Icon name="paper-plane" style={{color:'red'}}/>
            </Left>
            <Body>
              <Text style={{color:'red'}}>退出登录</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>

{/*
              <Button full bordered danger style={{marginLeft:20,marginRight:20,marginTop:10}}>
                  <Text>退出登录</Text>
              </Button> */}


          {/* <ListItem icon last>
            <Left>
              <Button style={{ backgroundColor: '#4CDA64' }}>
                <Icon active name="phone-portrait" />
              </Button>
            </Left>
            <Body>
              <Text>Mobile Data</Text>
            </Body>
            <Right>
              <Radio selected />
            </Right>
          </ListItem>


          <Separator bordered />

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#FD3C2D' }}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
              <Text>Notifications</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#8F8E93' }}>
                <Icon active name="switch" />
              </Button>
            </Left>
            <Body>
              <Text>Control Center</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon last>
            <Left>
              <Button style={{ backgroundColor: '#5855D6' }}>
                <Icon active name="moon" />
              </Button>
            </Left>
            <Body>
              <Text>Do Not Disturb</Text>
            </Body>
            <Right>
              <Text>Yes</Text>
            </Right>
          </ListItem>
          <Separator bordered />
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#4CDA64' }}>
                <Icon name="arrow-dropdown" />
              </Button>
            </Left>
            <Body>
              <Text>Pick SIM</Text>
            </Body>
            <Right>
              <Picker
                note
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label="TATA" value="key0" />
                <Item label="AIRTEL" value="key1" />
              </Picker>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#8F8E93' }}>
                <Icon active name="cog" />
              </Button>
            </Left>
            <Body>
              <Text>Software Update</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: '#FD3C2D' }}><Text>2</Text></Badge>
            </Right>
          </ListItem>
          <ListItem last icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="hand" />
              </Button>
            </Left>
            <Body>
              <Text>Privacy</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem> */}

        </Content>
        <PTEFooter tab="4"/>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUser, fetchPositions }, dispatch);
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
