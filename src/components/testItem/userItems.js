import React from 'react';
import { connect } from 'react-redux';
import { AlertIOS, ListView } from 'react-native';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { iMap } from '../../config/config';
import styles from '../../styles/itemsMainStyle';
import _ from 'lodash';

class UserItems extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      array:[],
      dataSource:{}
    }
  }
  componentWillMount() {
    this.createDataSource(this.props.itemList.array);
  }
  componentWillReceiveProps(props){
    console.log("componentWillReceiveProps");
    //console.log(props.itemList.array);
    this.setState({array:props.itemList.array})

    this.createDataSource(props.itemList.array)

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
    let array = this.state.array;
    let result = _.remove(array,function(item){ return item.itemId == id});
    this.createDataSource(this.state.array);
  }

  createDataSource(items) {
    console.log(items);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    //console.log(this);
    this.setState({array:items,dataSource:ds.cloneWithRows(items)});
  }
  renderRow(item){
    //console.log(this);
    return(
      <Card style={styles.mb}>
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
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>  {item.tested} 考过</Text>
            </Button>
          </Left>
          <Body style={{alignItems:'center',justifyContent:'center'}}>
            <Button transparent
              style={{alignItems:'center',justifyContent:'center'}}
              onPress={()=>this.onDeleteItem(item.itemId)}
              >
              <Text>删除</Text>
            </Button>
          </Body>
          <Right>
            <Button transparent>
              <Text> 讨论</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }

  renderList(){
    /// hello
    // console.log(this.props.itemList.array);
    const { array } = this.state;
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
          <ListView
            initialListSize={1}
            pageSize={3}
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </Content>
        {/* <Content padder>
          { this.renderList() }
        </Content> */}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { itemList : state.userItems };
}

export default connect(mapStateToProps)(UserItems);
