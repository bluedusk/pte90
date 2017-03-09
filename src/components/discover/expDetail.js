import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Footer, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';


import styles from '../../styles/itemsMainStyle';

class ExpDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemIndex: -1,
      arrayLength:-1
    }
  }

  render() {
    const item = this.props.exp;

    return (
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>经验分享</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
            <Card style={styles.mb}>
              <CardItem header bordered>
                <Body>
                  <Text>{item.title}</Text>
                </Body>
              </CardItem>
              <CardItem content bordered>
                <Body>
                  <Text>
                    {item.text}
                  </Text>
                </Body>
              </CardItem>
            </Card>
        </Content>
        {/* <PagerBtnSet
          currIndex = {this.state.itemIndex}
          endIndex = {this.state.arrayLength}
          onPress1 = {()=>this.setState({itemIndex: this.state.itemIndex-1})}
          onPress2 = {()=>this.setState({itemIndex: this.state.itemIndex+1})}
        /> */}
      </Container>
    );
  }
}

export default ExpDetail;
