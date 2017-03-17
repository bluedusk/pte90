import React from 'react';
import { connect } from 'react-redux';
import { Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchItems } from '../../actions/itemsAction';
import { bindActionCreators } from 'redux';
import { InteractionManager } from 'react-native';

import styles from '../../styles/itemsMainStyle';


class ReadAloud extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      array:[],
      loading:true
    }
  }

  componentWillMount(){
    // requestAnimationFrame(()=>this.props.fetchItems('ra'),1000) ;
    // setTimeout(()=>this.props.fetchItems('ra'),500);
    InteractionManager.runAfterInteractions(() => {
     // ...long-running synchronous task...
     this.props.fetchItems('ra');
    });

  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    let response = nextProps.itemList;
    this.setState({array: response.array, loading: response.loading})
  }

  renderList(){
    //console.log(this.props);
    const { array } = this.state;
    //console.log(this.props.itemList);
    if(this.state.loading && array.length == 0){
      return <Text>loading...</Text>
    }
    let res = array.map(item =>{
      return(
        <Card style={styles.mb} key={item.itemId}>
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
              <Button transparent onPress={()=>{Actions['newItem']({itemType:'ra'})}}><Text>Add</Text></Button>
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
    fetchItems:fetchItems
  }, dispatch);
}

const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps,mapDispatchToProps)(ReadAloud);
