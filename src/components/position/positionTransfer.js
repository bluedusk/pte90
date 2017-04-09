import React from 'react';
import { connect } from 'react-redux';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AlertIOS } from 'react-native';
import _ from 'lodash';

import styles from '../../styles/itemsMainStyle';


class PositionTransfer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      array:[]
    }
  }

  componentWillReceiveProps(props){
    this.setState({array:props.positions.array})
  }

  onDeleteItem(id){
    //console.log(id);
    AlertIOS.alert(
     ' 确认删除 ?',
     '',
     [
       {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: '删除', onPress: () => this.onDeleteConform(id)},
     ],
    );
    // this.props.delItem(id);
  }

  onDeleteConform(id){
    console.log(id);
    // remove item from listview
    console.log(this.state.array);
    let array = this.state.array;
    let result = _.remove(array,function(item){ return item._id == id});
    //console.log(result);
    this.setState({array:array});
    // call remove action
    // this.props.delItem(id);

  }

  renderList(){
    //console.log(this.props);
    const { array } = this.state;
    if(!array || array.length == 0){
      return <Text>loading...</Text>
    }
    let res = array.map(item =>{
      let type = '';
      let shadowStyle = {};
      switch (item.type) {
        case 1:
          type = '转';
          shadowStyle = {shadowColor:'orange'};
          break;
        case 2:
          type = '换'
          shadowStyle = {shadowColor:'green'};
          break;
        case 3:
          type = '求'
          shadowStyle = {shadowColor:'blue'};
          break;
        default:

      }
      return(
        <Card style={styles.mb} key={item._id} style={shadowStyle}>
          <CardItem content bordered>
            <Body>
              <Text>{item.text}</Text>
            </Body>
          </CardItem>
          <CardItem style={{paddingVertical: 0, marginVertical:0}}>
            <Left>
              <Button transparent onPress={()=>this.onDeleteItem(item._id)}>
                <Text>删除</Text>
              </Button>
            </Left>
            <Body>
            </Body>
            <Right>
              <Text style={{fontSize:10,color:'grey'}}>{type} - 1天前</Text>
            </Right>
          </CardItem>
          {/* <CardItem style={{paddingVertical: 0}}>
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
          </CardItem> */}
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
              <Title>考位转让</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['positionNew']()}}><Text>Add</Text></Button>
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
  return { positions : state.positions };
}

export default connect(mapStateToProps)(PositionTransfer);
