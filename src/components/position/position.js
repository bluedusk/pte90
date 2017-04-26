import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Linking } from 'react-native';
import { Segment, List, ListItem, Header, Title, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchPositions } from '../../actions/positionAction'
import PTEFooter from '../common/pteFooter';

import styles from '../../styles/styles';

// const datas = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Alberto Moreno', 'Emre Can', 'Joe Allen', 'Phil Coutinho'];
// Common component for item list [rl,swt,sst,fib]
class Position extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedItemId:''
    }
  }

  onItemPress1(id){
    if (id == 'query') {
      Actions.positionQuery();
    }
    if(id == 'transfer'){
      Actions.positionTransfer();
      this.props.fetchPositions();
    }
    // this.props.fetchCurrItem(id);
  }
  onItemPress(){
    Actions.positionTransfer();
    this.props.fetchPositions();
  }


  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
            <Body>
              <Title>考位</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
          {/* { this.renderList() } */}
          <Card style={styles.mb}>
            <CardItem header bordered button onPress={() => Linking.openURL("http://pearsonvue.com/Dispatcher?application=SeatSearch&action=actStartApp&v=W2L&clientCode=PEARSONLANGUAGE")}>
              <Icon active name="disc" style={{ color: '#3B579D' }} />
              <Text>考位查询</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem header bordered button onPress={this.onItemPress.bind(this)}>
              <Icon active name="shuffle" style={{ color: 'red' }} />
              <Text>考位转让</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
        <PTEFooter tab="3"/>
      </Container>


    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchPositions:fetchPositions
  }, dispatch);
}


export default connect(null, mapDispatchToProps)(Position);
