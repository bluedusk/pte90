
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Platform, Text } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, ListItem, Badge, Left, Right, Body, Switch, Radio, Picker, Separator } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchUser } from '../../actions/userAction';
import { fetchPositions } from '../../actions/positionAction';

import styles from '../../styles/styles';

const Item = Picker.Item;

const {
  popRoute,
} = actions;

class UserCenter extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: [],
      },
    };
  }

  componentWillMount(){
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
        this.props.fetchPositions('userid');
        break;
      default:
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            {/* <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button> */}
          </Left>
          <Body>
            <Title>我</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered noTopBorder />
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#5855D6' }}>
                <Icon active name="moon" />
              </Button>
            </Left>
            <Body>
              <Text>我的积分</Text>
            </Body>
            <Right>
              <Text>{this.props.user.info.points}</Text>
            </Right>
          </ListItem>
          <ListItem icon button onPress={()=>{}}>
            <Left>
              <Button style={{ backgroundColor: '#5855D6' }}>
                <Icon active name="moon" />
              </Button>
            </Left>
            <Body>
              <Text>积分规则</Text>
            </Body>
            <Right>
              {(Platform.OS === 'ios') && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon button onPress={()=>{}}>
            <Left>
              <Button style={{ backgroundColor: '#5855D6' }}>
                <Icon active name="moon" />
              </Button>
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
              <Button style={{ backgroundColor: '#5855D6' }}>
                <Icon active name="moon" />
              </Button>
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
              <Button style={{ backgroundColor: '#FF9501' }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>离线模式</Text>
            </Body>
            <Right>
              <Switch value={false} onTintColor="#50B948" />
            </Right>
          </ListItem>


          <ListItem icon last>
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
          </ListItem>

        </Content>
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
