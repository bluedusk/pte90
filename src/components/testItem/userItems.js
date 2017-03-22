import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AlertIOS, ListView, AsyncStorage } from 'react-native';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { iMap } from '../../config/config';
import { fetchUserItems } from '../../actions/itemsAction';
import moment from 'moment';

import styles from '../../styles/itemsMainStyle';
import { delItem } from '../../actions/itemsAction';

import _ from 'lodash';

class UserItems extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      array:[],
      dataSource:{},
      user:{}
    }
  }

  // get current user from AsyncStorage
  _loadInitialState = async () => {
   try {


   }catch (error){
     console.log(error)
   }
 };

  async componentWillMount() {
    console.log("componentWillMount");
    this.createDataSource(this.props.itemList.array);

    var value = await AsyncStorage.getItem('@user:key');
    this.setState({user:JSON.parse(value)});
    console.log("user: "+this.state.user.name);
    // take props.user, display all/current user items
    // Discover -> user = user -> display all user items;
    // Me -> user = currentUser -> display current user items
    // Delete button will depend on this.state.user.name
    console.log(this.props);
    this.props.fetchUserItems(this.props.user.id);

  }
  componentDidMount(){
    console.log("componentDidMount");
    // TODO hardcode user.name
  }
  componentWillReceiveProps(props){
    console.log("componentWillReceiveProps");
    //console.log(props.itemList.array);
    this.setState({array:props.itemList.array})
    this.createDataSource(props.itemList.array)

  }
  createDataSource(items) {
    console.log(items);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    //console.log(this);
    this.setState({array:items,dataSource:ds.cloneWithRows(items)});
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
    let array = this.state.array;
    let result = _.remove(array,function(item){ return item.itemId == id});
    this.createDataSource(this.state.array);

    // call remove action
    this.props.delItem(id);

  }


  // only show Delete button to current user
  renderDeleteBtn(item){
    if(item.contributor == this.state.user.id){
      return (
        <Body style={{alignItems:'center',justifyContent:'center'}}>
          <Button transparent
            style={{alignItems:'center',justifyContent:'center'}}
            onPress={()=>this.onDeleteItem(item.itemId)}
            >
            <Text>删除</Text>
          </Button>
        </Body>
      );
    }
  }
  renderRow(item){
    // console.log(moment(item.updatedAt).fromNow());
    return(
      <Card style={styles.mb}>
        <CardItem content bordered>
          <Body>
            <Text>{iMap[item.itemType].long}</Text>
            <Text style={{color:'pink',fontSize:10}}>by {item.contributor.name}, {moment(item.updatedAt).fromNow()}</Text>
          </Body>
        </CardItem>
        <CardItem  bordered>
          <Body>
            <Text>{item.itemText}</Text>
          </Body>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>  {item.tested} 考过</Text>
            </Button>
          </Left>
            { this.renderDeleteBtn(item) }
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
    //console.log(this.props.itemList.array);
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
              <Text style={{color:'pink',fontSize:10}}>by {item.contributor.name}, 1天前</Text>
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
            // initialListSize={5}
            // pageSize={10}
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ delItem, fetchUserItems },dispatch);
}

const mapStateToProps = (state) => {
  return { itemList : state.userItems };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserItems);
