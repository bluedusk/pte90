import React from 'react';
import { Button, CardItem, Icon, Right, Left, Body } from 'native-base';

// class PagerBtnSet extends React.Component {

export const PagerBtnSet = ({currIndex, endIndex, onPress1, onPress2}) => {

    if (currIndex === 0) {
      return(
        <CardItem style={{paddingVertical: 0}} bordered>
          <Left>
            <Button light disabled style={{width:100, paddingLeft:20}} transparent onPress={onPress1}>
              <Icon  sytle={{color:"red"}} name="arrow-back" />
            </Button>
          </Left>
          <Right>
            <Button style={{width:100, paddingRight:20, justifyContent:"flex-end"}} transparent onPress={onPress2}>
              <Icon active name="arrow-forward" style={{justifyContent:"flex-end"}}/>
            </Button>
          </Right>
        </CardItem>
      );
    }
    if (currIndex === endIndex-1) {
      return(
        <CardItem style={{paddingVertical: 0}} bordered>
          <Left>
            <Button  style={{width:100, paddingLeft:20}} transparent onPress={onPress1}>
              <Icon  sytle={{color:"red"}} name="arrow-back" />
            </Button>
          </Left>
          <Right>
            <Button light disabled style={{width:100, paddingRight:20, justifyContent:"flex-end"}} transparent onPress={onPress2}>
              <Icon active name="arrow-forward" style={{justifyContent:"flex-end"}}/>
            </Button>
          </Right>
        </CardItem>
      );
    }
    return(
      <CardItem style={{paddingVertical: 0}} bordered>
        <Left>
          <Button  style={{width:100, paddingLeft:20}} transparent onPress={onPress1}>
            <Icon  sytle={{color:"red"}} name="arrow-back" />
          </Button>
        </Left>
        <Right>
          <Button style={{width:100, paddingRight:20, justifyContent:"flex-end"}} transparent onPress={onPress2}>
            <Icon active name="arrow-forward" style={{justifyContent:"flex-end"}}/>
          </Button>
        </Right>
      </CardItem>
    );


}

// export default PagerBtnSet;
