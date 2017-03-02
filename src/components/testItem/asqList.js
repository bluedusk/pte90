import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import styles from '../../styles/itemsMainStyle';


class ASQList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggle:0
    }
  }

  renderListView(){
    const datas = ["item1","item2","item3","item4","item5","item1","item1","item1","item1","item1","item1","item1","item1","item1","item1","item1","item1","item1","item1","item1","item1","item22"];
    const chunkSize = 3;
    const result = _.chunk(datas, chunkSize);
    //console.log(this.props);
    const { array } = this.props.itemList;
    if(!array || array.length == 0){
      return <Text>loading...</Text>
    }

    let returnValue = [];
    var start = 1;
    var end = 1;
    for (var i = 0; i < result.length; i++) {
      end = start + result[i].length - 1;
      const listTo = result[i];
      returnValue.push(
        <ListItem button onPress={()=>{Actions['asq']({list:listTo})}} key={i}>
          <Text>{ start == end ? start : start+" - "+end}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      )
      start = end+1

    }
    return returnValue;

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

const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps)(ASQList);
