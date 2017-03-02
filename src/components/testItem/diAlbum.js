import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Image, View, TouchableHighlight } from 'react-native';
import { Picker, Item, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';

const cardImage = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488300471032&di=c256f60a5ddad340223a6b5b27798b8b&imgtype=0&src=http%3A%2F%2Fnews.k618.cn%2Froll%2F201702%2FW020170227613160890035.png";
class DIAlbum extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedItem: undefined,
          selectedIndex: 'pie',
          selectedItems: []

      }
  }
  onValueChange (value: string) {
      this.setState({
          selectedIndex : value
      });
  }

//   componentWillMount(){
// console.log("componentWillMount");
//
//   }
//
//   componentWillReceiveProps(){
//     console.log("componentWillReceiveProps");
//     const { array } = this.props.itemList;
//     const filterArray = _.filter(array, function(o) { return o.imageType === this.state.selectedIndex; });
//     this.setState({selectedItems:filterArray});
//   }
  onPressButton(){
    Actions['di']();
  }

  renderList(){
    const { array } = this.props.itemList;
    if(!array || array.length == 0){
      return <Text style={{alignSelf:"flex-start"}}>loading...</Text>
    }
    console.log(this);
    let index = this.state.selectedIndex;
    const filterArray = _.filter(array, function(o) { return o.imageType === index; });
    console.log(filterArray);
    let res = filterArray.map(item =>{
      const imageSrouce = item.imageSrc;
      return(
        <TouchableHighlight key={item.itemId} onPress={this.onPressButton}
          style={{borderColor:"red", borderWidth:1,height: 100, marginBottom:10}}>
          <Image

            source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488376258536&di=cdfe93e717a22e6ef941b98905553943&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fthumb180%2F005Y2C0vjw1eul1y6maruj30hs0hsgnx.jpg"}}
            style={{
              resizeMode: 'cover',
              width: 100,
              height: 100,
              // padding: 20,
            }}
          />
        </TouchableHighlight>
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
              <Title>Retell Lecture</Title>
            </Body>
            <Right>

                <Picker
                    iosHeader="Image Type"
                    mode="dropdown"
                    selectedValue={this.state.selectedIndex}
                    onValueChange={this.onValueChange.bind(this)}>
                    <Item label="Pie" value="pie" textColor="red"/>
                    <Item label="Bar" value="bar" color="blue"/>
                    <Item label="Line" value="line" style={{backgroundColor:"blue"}}/>
                    <Item label="Map" value="map" style={{backgroundColor:"blue"}}/>
                    <Item label="Picture" value="key4" />
                 </Picker>

             </Right>
        </Header>
        <Content padder>
          <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}} >
            { this.renderList() }

          </View>
        </Content>

      </Container>

    );
  }

}


const mapStateToProps = (state) => {
  return { itemList : state.items };
}

export default connect(mapStateToProps)(DIAlbum);
