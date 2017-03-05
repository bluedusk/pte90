import React from 'react';
import _ from 'lodash';
import { Subtitle, Footer, Header, Title, Text, Button, Container, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { PagerBtnSet } from '../common/pagerBtnSet';


import styles from '../../styles/itemsMainStyle';

const test = "Photo taken on Feb 24, 2017 shows a# partly melted ice sculpture at the Ice and Snow World in Harbin,# capital of Northeast China's Heilongjiang province, Feb 24, 2017. Ice# sculptures began to melt as temperature rose recently. [Photo/Xinhua]";
const test1 = "<Text style={{color:'red'}}>Photo</Text> <Text>taken on Feb 24, 2017 shows a partly melted ice sculpture at the Ice and Snow World in Harbin, capital of Northeast China's Heilongjiang province, Feb 24, 2017. Ice sculptures began to melt as temperature rose recently. [Photo/Xinhua]</Text>";
const test2  = _.split(test, "#");

class EssaySamples extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     itemIndex: -1,
  //     arrayLength:-1
  //   }
  // }

  // componentWillMount(){
  //   console.log(this.props.id);
  //   console.log(this.props.itemList.array.length);
  //   const { array } = this.props.itemList;
  //   const index = _.findIndex(array, (o) => o.itemId == this.props.id )
  //   this.setState({itemIndex:index, arrayLength:array.length});
  // }

  renderList(){
    const { samples } = this.props;
    console.log(samples);
    // const itemArray = test2;
     return samples.map((item)=>{
       return(
         <Card style={styles.mb} key={_.uniqueId()}>
           <CardItem content bordered>
             <Body>
               <Text>
                 {item}
               </Text>
             </Body>
           </CardItem>
         </Card>
       );
      }
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
              <Title>{"Essay"}</Title>
              <Subtitle>{"Samples"}</Subtitle>
            </Body>
            <Right></Right>
        </Header>
        <Content padder>
          { this.renderList() }
        </Content>

      </Container>

    );
  }

}


export default EssaySamples;
