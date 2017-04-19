import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Dimensions, TextInput } from 'react-native';
import { Toast, Picker, Segment, Container, Header, Title, Spinner, Item, Label, Input, Form, Text, Button, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { positionNew } from '../../actions/positionAction';
import styles from '../../styles/itemsMainStyle';

const deviceWidth = Dimensions.get('window').width;

// new position transfer post
class PositionNew extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bodyText: '',
      request: {},
      transferType: 1,
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
    if (this.state.bodyText.trim().length < 10) {
       Toast.show({
              text: '亲，内容太短啦。',
              position: 'bottom',
              buttonText: '[确定]',
              type:'danger',
              duration:5000
      });
      return;
    }
    this.setState({process:1});
    let item = {};
    item.text = this.state.bodyText;
    item.type = this.state.transferType;
    console.log(this.props.user);
    item._creator = this.props.user.id;
    console.log(item);
    // add new position information, if success, call fetchPosition & go back
    this.props.positionNew(item);
    Actions.pop();
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
              <Title>考位交换</Title>
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
                  placeholder='请输入考场信息，日期，联系方式，下边选择交易方式'
                  onChangeText={(bodyText) => this.setState({bodyText})}
                />
            </Item>
          </Form>
        </Card>
        <Segment>
            <Button first active={this.state.btnStatus[0]} onPress={this.onPressButton.bind(this,0)}><Text>转让</Text></Button>
            <Button active={this.state.btnStatus[1]} onPress={this.onPressButton.bind(this,1)}><Text>交换</Text></Button>
            <Button last active={this.state.btnStatus[2]} onPress={this.onPressButton.bind(this,2)}><Text>求</Text></Button>
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
  return bindActionCreators({ positionNew }, dispatch);
}

export default connect(null,mapDispatchToProps)(PositionNew);
