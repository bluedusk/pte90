import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { Segment, List, ListItem, Header, Title, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchExps } from '../../actions/expAction'

import styles from '../../styles/styles';

// const datas = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Alberto Moreno', 'Emre Can', 'Joe Allen', 'Phil Coutinho'];
// Common component for item list [rl,swt,sst,fib]
class Discover extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedItemId:''
    }
  }

  onBtnPress(id){
    if (id==1) {
      Actions.expList({header:"经验分享"});
    }
    else{
      Actions.itemShare({header:"机经分享"});
    }
    // this.props.fetchCurrItem(id);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>PTE90</Title>
          </Left>
          <Body>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content padder>
          {/* { this.renderList() } */}
          <Card style={styles.mb}>
            <CardItem header bordered button onPress={()=>this.onToggle(1)}>
              <Icon active name="paper" style={{ color: '#3B579D' }} />
              <Text>机经</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem header bordered button onPress={()=>this.onBtnPress(1)}>
              <Icon active name="navigate" style={{ color: 'red' }} />
              <Text>经验</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchExps:fetchExps
  }, dispatch);
}
const mapStateToProps = (state) => {
  return { expList : state.exps };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
