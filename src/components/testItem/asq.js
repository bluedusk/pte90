import React from 'react';
import { List, ListItem, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';


class ASQ extends React.Component {

  renderListView(){
    const datas = this.props.list;
    return(
      <List
        dataArray={datas} renderRow={data =>
          <Card style={styles.mb} >
            <CardItem content bordered>
              <Body>
                <Text>{data}</Text>
              </Body>
            </CardItem>
            <CardItem style={{paddingVertical: 0}}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>  {data} 考过</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        }
      />
    );
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
              <Title>Answer Short Question</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['readAloudAdd']()}}><Text>Add</Text></Button>
            </Right>
        </Header>
        <Content padder>
          { this.renderListView() }
        </Content>
      </Container>
    );
  }
}


export default ASQ;
