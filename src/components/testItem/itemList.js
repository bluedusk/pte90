import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchCurrItem } from '../../actions/currItemAction'
import { iMap } from '../../config/config';
import styles from '../../styles/styles';

// const datas = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Alberto Moreno', 'Emre Can', 'Joe Allen', 'Phil Coutinho'];
// Common component for item list [rl,swt,sst,fib]
class ItemList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedItemId:''
    }
  }
  // click on an item, go to itemDetail
  onItemPress(id){
    if (this.props.header == 'Reorder') {
      Actions.reorder({id:id,header:this.props.header});
    }
    else{
      Actions.itemDetail({id:id,header:this.props.header});
    }
    // this.props.fetchCurrItem(id);
  }

  renderList(){
    const { array } = this.props.itemList;
    if(!array || array.length == 0 ){
      return <Text>loading...</Text>
    }
    return (
      <List
        dataArray={array} renderRow={data =>
          <ListItem button onPress={()=>this.onItemPress(data.itemId)}>
            <Text>{data.topic}</Text>
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
              <Button transparent onPress={()=>{Actions['newItem']({itemType:this.props.itemType})}}><Text>Add</Text></Button>
            </Right>
        </Header>
        <Content padder>
          { this.renderList() }
        </Content>
      </Container>


    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchCurrItem:fetchCurrItem
  }, dispatch);
}
const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
