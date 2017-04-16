import React from 'react';
import { Header, Icon, Title, Text, Button, Container, Content, Card, CardItem, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/itemsMainStyle';

class PointsRule extends React.Component {

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
              <Title>积分规则</Title>
            </Body>
            <Right>
            </Right>
        </Header>
        <Content padder>
          <Card style={styles.mb}>
                <CardItem bordered>
                        <Body>
                          <Text>注册用户 + 100</Text>
                          <Text>分享软件 + 50</Text>
                          <Text>学习一天 - 10</Text>
                        </Body>
                </CardItem>

                <CardItem style={{paddingTop:0, paddingBottom:0}}>
                  <Left></Left>
                    <Body>
                      {/* <Button full bordered danger style={{marginLeft:20,marginRight:20,marginTop:10}}>
                          <Text>分享</Text>
                      </Button> */}
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon active name="share" />
                        <Text> 分享得积分</Text>
                      </Button>
                    </Right>
                </CardItem>
           </Card>
        </Content>
      </Container>

    );
  }

}

export default PointsRule;
