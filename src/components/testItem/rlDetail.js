import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';


class RLDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemIndex: -1
    }
  }

  componentWillMount(){
    console.log(this.props.id);
    console.log(this.props.itemList.array.length);
    const { array } = this.props.itemList;
    // const item = test[this.state.toggle];
    const index = _.findIndex(array, (o) => o.itemId == this.props.id )
    this.setState({itemIndex:index});
  }

  renderList(){
    const { array } = this.props.itemList;
    if(!this.state.itemIndex === -1){
      return <Text>loading...</Text>
    }
    return(
      <Card style={styles.mb}>
        <CardItem content bordered>
          <Body>
            <Text>{array[this.state.itemIndex].itemText}</Text>
          </Body>
        </CardItem>
        <CardItem style={{paddingVertical: 0}}>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>  {array[this.state.itemIndex].tested} 考过</Text>
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
              <Title>Retell Lecture</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['readAloudAdd']()}}><Text>Add</Text></Button>
            </Right>
        </Header>
        <Content padder>
          { this.renderList() }
          <Button onPress={()=>this.setState({itemIndex: this.state.itemIndex+1})}>
          <Text>hi</Text></Button>
        </Content>
      </Container>


    );
  }

}

const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps)(RLDetail);
