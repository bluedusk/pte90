import React from 'react';
import { connect } from 'react-redux';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';

// Common component for item list [ra,choice,wfd]
class ItemListContent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggle:0
    }
  }

  renderList(){
    //console.log(this.props);
    var someText = {text:"Hi~   \n\\n  this is a test message."};
    const { array } = this.props.itemList;
    if(!array || array.length == 0){
      return <Text>loading...</Text>
    }
    //console.log(array);
    let res = array.map(item =>{
      return(
        <Card style={styles.mb} key={item.itemId}>
          <CardItem content bordered>
            <Body>
              <Text>{item.itemText}</Text>
              <Text>{someText.text}</Text>
            </Body>
          </CardItem>
          <CardItem content bordered>
            <Body>
              <Text>{someText.text}</Text>
            </Body>
          </CardItem>
          <CardItem style={{paddingVertical: 0}}>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>  {item.tested} 考过</Text>
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
    });
    //console.log(res);
    return res;
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
              <Title>{this.props.header}</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['newItem']({type:'ra'})}}><Text>Add</Text></Button>
            </Right>
        </Header>
        <Content padder>
          { this.renderList() }
        </Content>
      </Container>


    );
  }

}

const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps)(ItemListContent);
