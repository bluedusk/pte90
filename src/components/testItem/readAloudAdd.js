import React from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, TextInput } from 'react-native';
import { Segment, Container, Header, Title, Spinner, Item, Label, Input, Form, Text, Button, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';

const deviceWidth = Dimensions.get('window').width;

// Entrance of Test Items, show menu
class ReadAloud extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bodyText: '',
      process: 0,
      request: {}
    }

  }

  rightBtn(){
    if (this.state.process === 1) {
      return(
        <Button transparent><Spinner color="blue"/></Button>
      );
    }
    return(
      <Button transparent onPress={this.onSubmitHandler.bind(this)}><Text>提交</Text></Button>
    );
  }

  onSubmitHandler(){
    this.setState({process:1});
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
              <Title>Read Aloud</Title>
            </Body>
            <Right>
              {this.rightBtn()}
            </Right>
        </Header>

        <Content padder>
        <Card>
          <Form>
            <Item regular>
              <Input style={{height:300, backgroundColor:'white'}}
                  multiline={true}
                  numberOfLines={40}
                  onChangeText={(bodyText) => this.setState({bodyText})}
                />
            </Item>
          </Form>
        </Card>
        <Segment>
            <Button first><Text>原文</Text></Button>
            <Button last active><Text>答案</Text></Button>
        </Segment>
          <Text numberOfLines={40}>
            {this.state.bodyText}
          </Text>

        </Content>

      </Container>


    );
  }

}

export default connect()(ReadAloud);
