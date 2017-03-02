import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Footer, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { PagerBtnSet } from '../common/pagerBtnSet';

import styles from '../../styles/itemsMainStyle';

const cardImage = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488300471032&di=c256f60a5ddad340223a6b5b27798b8b&imgtype=0&src=http%3A%2F%2Fnews.k618.cn%2Froll%2F201702%2FW020170227613160890035.png";
class DI extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemIndex: 0,
      arrayLength:-1
    }
  }

  componentWillMount(){
    // console.log(this.props.id);
    // console.log(this.props.itemList.array.length);
    // const { array } = this.props.itemList;
    // const index = _.findIndex(array, (o) => o.itemId == this.props.id )
    // this.setState({itemIndex:index, arrayLength:array.length});
  }

  renderList(){
    const { array } = this.props.itemList;
    console.log(array);
    if(!array || array.length === 0){
      return <Text>loading...</Text>
    }
    return(
      <Card style={styles.mb}>
        <CardItem header bordered>
          <Left>
          </Left>
          <Body>
            <Title>{array[this.state.itemIndex].topic}</Title>
          </Body>
          <Right>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={{uri:cardImage}} />
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
              <Title>Retell Lecture</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>{Actions['readAloudAdd']()}}><Text>Add</Text></Button>
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
