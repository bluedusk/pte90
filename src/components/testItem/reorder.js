import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Footer, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { PagerBtnSet } from '../common/pagerBtnSet';


import styles from '../../styles/itemsMainStyle';

const test = "Photo taken on Feb 24, 2017 shows a# partly melted ice sculpture at the Ice and Snow World in Harbin,# capital of Northeast China's Heilongjiang province, Feb 24, 2017. Ice# sculptures began to melt as temperature rose recently. [Photo/Xinhua]";
const test1 = "<Text style={{color:'red'}}>Photo</Text> <Text>taken on Feb 24, 2017 shows a partly melted ice sculpture at the Ice and Snow World in Harbin, capital of Northeast China's Heilongjiang province, Feb 24, 2017. Ice sculptures began to melt as temperature rose recently. [Photo/Xinhua]</Text>";
const test2  = _.split(test, "#");

class ReorderDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemIndex: -1,
      arrayLength:-1
    }
  }

  componentWillMount(){
    //console.log(this.props.id);
    //console.log(this.props.itemList.array.length);
    const { array } = this.props.itemList;
    const index = _.findIndex(array, (o) => o.itemId == this.props.id )
    this.setState({itemIndex:index, arrayLength:array.length});
  }

  renderList(){
    const { array } = this.props.itemList;
    const item = array[this.state.itemIndex];
    const itemArray = _.split(item.itemText, "#");
    // const itemArray = test2;
    const reorderText = [];
    itemArray.forEach((item)=>{
        reorderText.push(
          <CardItem content bordered key={_.uniqueId()}>
            <Body>
              <Text>
                {item}
              </Text>
            </Body>
          </CardItem>
        );
      }
    );

    if(!this.state.itemIndex === -1){
      return <Text>loading...</Text>
    }
    return(
      <Card style={styles.mb}>
        <CardItem header bordered>
          <Left>
          </Left>
          <Body>
            <Title>{item.topic}</Title>
          </Body>
          <Right>
          </Right>
        </CardItem>

        {reorderText}

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
              <Title>{this.props.header}</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['newItem']()}}><Text>Add</Text></Button>
            </Right>
        </Header>
        <Content padder>
          { this.renderList() }
        </Content>
        <PagerBtnSet
          currIndex = {this.state.itemIndex}
          endIndex = {this.state.arrayLength}
          onPress1 = {()=>this.setState({itemIndex: this.state.itemIndex-1})}
          onPress2 = {()=>this.setState({itemIndex: this.state.itemIndex+1})}
        />
      </Container>

    );
  }

  onPress1(){
    this.setState({itemIndex: this.state.itemIndex-1});
  }
}


const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps)(ReorderDetail);
