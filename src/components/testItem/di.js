import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Footer, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { PagerBtnSet } from '../common/pagerBtnSet';
import TestedBtn from '../common/testedBtn';

import styles from '../../styles/itemsMainStyle';

// Image.getSize(myUri, (width, height) => {this.setState({width, height});

class DI extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemIndex: -1,
      arrayLength:-1
    }
  }

  componentWillMount(){
    // console.log(this.props.id);
    // console.log(this.props.itemList.array.length);
    const { item, filterArray } = this.props;
    const index = _.findIndex(filterArray, (o) => o.itemId == item.itemId )
    this.setState({itemIndex:index, arrayLength:filterArray.length});
  }

  renderList(){
    const array  = this.props.filterArray;
    //console.log(array);
    if(!array || array.length === 0){
      return <Text>loading...</Text>
    }
    return(
      <Card style={styles.mb}>

        <CardItem style={{flex:1,}}>
          <Image style={{resizeMode: 'contain', height:500, flex:1, marginTop:20,transform:[{scale:1.5},{rotate: '90 deg'}]}}
            source={{uri:array[this.state.itemIndex].imageSrc}}
//             source={[
//   {uri: 'https://facebook.github.io/react/img/logo_small.png', width: 38, height: 38},
//   {uri: 'https://facebook.github.io/react/img/logo_small_2x.png', width: 76, height: 76},
//   {uri: 'https://facebook.github.io/react/img/logo_og.png', width: 400, height: 400}
// ]}
          />
        </CardItem>
        <CardItem style={{paddingVertical: 0}}>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>  {array[this.state.itemIndex].tested} 考过</Text>
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
              <Title>Describe Image</Title>
            </Body>
            <Right>
              {/* <Button transparent onPress={()=>{Actions['newItem']()}}><Text>Add</Text></Button> */}
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

}


const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps)(DI);
