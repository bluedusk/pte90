import React from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';

const deviceWidth = Dimensions.get('window').width;

// Entrance of Test Items, show menu
class ReadAloud extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggle:0
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
              <Title>Read Aloud</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['readAloudAdd']()}}><Text>Add</Text></Button>
            </Right>
        </Header>
        <Content padder>

          <Card style={styles.mb}>

            <CardItem content bordered>
              <Body>
                <Text>
                  <Text style={{color:'red'}}>fff</Text>
                NativeBase is a free and, source framework that enables developers
                to build high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.{'\n'}{'\n'}
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
              </Body>
            </CardItem>
            <CardItem style={{paddingVertical: 0}}>
              <Right>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>  126 考过</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>

            <CardItem content bordered>
              <Body>
                <Text>
                NativeBase is a free and, source framework that enables developers
                to build high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
              </Body>
            </CardItem>
            <CardItem style={{paddingVertical: 0}}>
              <Right>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>  126 考过</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>

            <CardItem content bordered>
              <Body>
                <Text>
                NativeBase is a free and, source framework that enables developers
                to build high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
              </Body>
            </CardItem>
            <CardItem style={{paddingVertical: 0}}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>  126 考过</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text> 讨论</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>


    );
  }

}

export default connect()(ReadAloud);
