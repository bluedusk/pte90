import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Dimensions, TextInput } from 'react-native';
import { Picker, Segment, Container, Header, Title, Spinner, Item, Label, Input, Form, Text, Button, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { expNew } from '../../actions/positionAction';
import styles from '../../styles/itemsMainStyle';

const deviceWidth = Dimensions.get('window').width;

// new position transfer post
class ExpNew extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bodyText: '',
      request: {},
      transferType: 0,
      btnStatus: [true,false,false]
    }

  }

  rightBtn(){
    if (this.state.process === 1) {
      return(
        <Button transparent><Spinner color="blue"/></Button>
      );
    }
    return(
      <Button transparent onPress={this.onSubmitHandler.bind(this)}><Text>提交</Text></Button>
    );
  }

  onSubmitHandler(){
    this.setState({process:1});
    let item = {};
    item.text = this.state.bodyText;
    item.type = this.props.transferType;
    console.log(item);
    this.props.positionNew(item);
  }

  onPressButton (id) {
    switch (id) {
      case 0:
        this.setState({
            btnStatus : [true,false,false],
            transferType: 1
        });
        break;
      case 1:
        this.setState({
            btnStatus : [false,true,false],
            transferType: 2
        });
        break;
      case 2:
        this.setState({
            btnStatus : [false,false,true],
            transferType: 3
        });
        break;
    }
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
              <Title>经验分享</Title>
            </Body>
            <Right>
              {this.rightBtn()}
            </Right>
        </Header>

        <Content padder>
        <Card>
          <Form>
            <Item regular>
              <Input style={{height:300, backgroundColor:'white'}}
                  multiline={true}
                  numberOfLines={40}
                  placeholder=''
                  onChangeText={(bodyText) => this.setState({bodyText})}
                />
            </Item>
          </Form>
        </Card>
        <Segment>
            <Button first active={this.state.btnStatus[0]} onPress={this.onPressButton.bind(this,0)}><Text>考试回忆</Text></Button>
            <Button active={this.state.btnStatus[1]} onPress={this.onPressButton.bind(this,1)}><Text>经验分享</Text></Button>
        </Segment>
          <Text numberOfLines={40}>
            {this.state.bodyText}
          </Text>
        </Content>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ expNew }, dispatch);
}

export default connect(null,mapDispatchToProps)(ExpNew);
