import React from 'react';
import { connect } from 'react-redux';
import { AlertIOS } from 'react-native';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { iMap } from '../../config/config';
import styles from '../../styles/itemsMainStyle';

class UserItems extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggle:0
    }
  }

  onDeleteItem(id){
    console.log(id);
    AlertIOS.alert(
     'Update available',
     'Keep your app up to date to enjoy the latest features',
     [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'Delete', onPress: () => console.log('Install Pressed')},
     ],
    );
    // this.props.delItem(id);
  }

  renderList(){
    //console.log(this.props);
    const { array } = this.props.itemList;
    if(!array || array.length == 0){
      return <Text>loading...</Text>
    }
    let res = array.map(item =>{
      return(
        <Card style={styles.mb} key={item.itemId}>
          <CardItem content bordered>
            <Body>
              <Text>{iMap[item.itemType].long}</Text>
              <Text style={{color:'pink',fontSize:10}}>by {item.contributor}, 1天前</Text>
            </Body>
          </CardItem>
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
            <Body style={{alignItems:'center',justifyContent:'center'}}>
              <Button transparent
                style={{alignItems:'center',justifyContent:'center'}}
                onPress={this.onDeleteItem.bind(this,item.itemId)}
                >
                {/* <Icon active name="thumbs-up" /> */}
                <Text>删除</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                {/* <Icon active name="thumbs-up" /> */}
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
              {/* <Button transparent onPress={()=>{Actions['newItem']({itemType:'ra'})}}><Text>Add</Text></Button> */}
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
  return { itemList : state.userItems };
}

export default connect(mapStateToProps)(UserItems);
