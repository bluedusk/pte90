import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Dimensions, TextInput } from 'react-native';
import { Toast, Segment, Container, Header, Title, Spinner, Item, Label, Input, Form, Text, Button, Content, Card, CardItem, Icon, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { newItem } from '../../actions/newItemAction';
import { _getUser } from '../../service/localStorage';
import { iMap } from '../../config/config';

import styles from '../../styles/itemsMainStyle';

const deviceWidth = Dimensions.get('window').width;

// Entrance of Test Items, show menu
class NewItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bodyText: '',
      process: 0,
      request: {},
      user:{}
    }

  }
  // can i use async in lifecycle method ?
  async componentWillMount(){
    let user = await _getUser();
    this.setState({user:user})
  }

  componentWillReceiveProps(nextProps){
    console.log(123456);
    console.log(nextProps.newItemData);
    // add item success, then go to useritems page
    if (nextProps.newItemData.success) {
      this.setState({process:0});
      Actions['userItems']({user:this.state.user,header:"我的分享",popNum:2});
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
    console.log(Toast);
    if (this.state.bodyText.trim().length == 0) {
      return Toast.show({
              text: 'Wrong password!',
              position: 'bottom',
              buttonText: 'Okay'
      });
    }
    item.itemText = this.state.bodyText;
    item.itemType = this.props.itemType;
    item.contributor = this.state.user.id;
    item.tested = 1;
    item.official = false;
    console.log(item);
    this.props.newItem(item);
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
              <Title>{iMap[this.props.itemType].long}</Title>
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
                  autoCorrect={false}
                  onChangeText={(bodyText) => this.setState({bodyText})}
                />
            </Item>
          </Form>
        </Card>
        <Segment>
            <Button first onPress={()=> Toast.show({
              text: 'Wrong password!',
              position: 'bottom',
              buttonText: 'Okay'
            })}><Text>原文</Text></Button>
            <Button last active><Text>答案</Text></Button>
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
  return bindActionCreators({ newItem }, dispatch);
}

const mapStateToProps = (state)=>{
  return { newItemData: state.newItem };
}

export default connect(mapStateToProps,mapDispatchToProps)(NewItem);
