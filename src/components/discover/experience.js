import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/styles';

class ExpList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedItemId:''
    }
  }

  onItemPress(item){
    Actions.expDetail({exp:item});
  }

  renderList(){
    const { array } = this.props.expList;
    if(!array || array.length == 0 ){
      return <Text>loading...</Text>
    }
    return (
      <List
        dataArray={array} renderRow={data =>
          <ListItem button onPress={()=>this.onItemPress(data)}>
            <Text>{data.title}</Text>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        }
      />
    );
    //console.log(res);
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
              {/* <Button transparent onPress={()=>{Actions['newItem']()}}><Icon name="search" /></Button> */}
              <Button transparent onPress={()=>{Actions['expNew']()}}><Text>Add</Text></Button>
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
  return { expList : state.exps };
}

export default connect(mapStateToProps)(ExpList);
