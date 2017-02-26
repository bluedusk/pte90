import React from 'react';
import { connect } from 'react-redux';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';


// Entrance of Test Items, show menu
class RLDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggle:0
    }
  }

  renderList(){
    //console.log(this.props);
    const { item } = this.props;
    if(!item){
      return <Text>{this.props.itemId}</Text>

    }
    return(
      <Card style={styles.mb}>
        <CardItem content bordered>
          <Body>
            <Text>{item.itemText}</Text>
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
        </Content>
      </Container>


    );
  }

}

const mapStateToProps = (state) => {
  return { currentItem : state.currentItem };
}

export default connect(mapStateToProps)(RLDetail);
