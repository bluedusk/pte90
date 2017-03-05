import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { Segment, List, ListItem, Header, Title, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchCurrItem } from '../../actions/currItemAction'

import styles from '../../styles/styles';

// const datas = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Alberto Moreno', 'Emre Can', 'Joe Allen', 'Phil Coutinho'];
// Common component for item list [rl,swt,sst,fib]
class Discover extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedItemId:''
    }
  }

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
            <Title>PTE90</Title>
          </Left>
            <Body>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['newItem']()}}><Text>Add</Text></Button>
            </Right>
        </Header>
        <Content padder>
          {/* { this.renderList() } */}
          <Card style={styles.mb}>
            <CardItem header bordered button onPress={()=>this.onToggle(1)}>
              <Icon active name="paper" style={{ color: '#3B579D' }} />
              <Text>机经</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem header bordered button onPress={()=>this.onToggle(1)}>
              <Icon active name="navigate" style={{ color: 'red' }} />
              <Text>经验</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
