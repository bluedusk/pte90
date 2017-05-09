import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, AsyncStorage } from 'react-native';
import { Header, Container, Content, Card, CardItem, Icon, Left, Title, Body, Button, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchItems } from '../../actions/itemsAction';
import { userLogin } from '../../actions/userAction';
import PTEFooter from '../common/pteFooter';

// import styles from '../../styles/itemsMainStyle';

// Entrance of Test Items, show menu
class ItemsMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggle:0
    }

  }

  componentWillMount(){

    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
   try {
     // TODO
    //  let user = {name:"dan",id:"58d13a531163837a9f9debeb"};
     //
    //  let promise = await AsyncStorage.setItem('@user:key', JSON.stringify(user));
     //
     this.props.userLogin();
     var value = await AsyncStorage.getItem('@user:key');

   }catch (error){

   }
 };

  onToggle(index){
    if (index === this.state.toggle) {
      this.setState({toggle:0})
      return;
    }
    this.setState({toggle:index})
  }

  renderSpeaking(){
    if(this.state.toggle === 1){
      return (
        <View>
        <CardItem button onPress={()=> {Actions['readAloud']({itemType:"ra",header:'Read Aloud'})}}>
        {/* <CardItem button onPress={()=>{this.props.fetchItems('ra')}}> */}
          <Text>Read Aloud</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('rl')}}>
          <Text>Retell Lecture</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('di')}}>
          <Text>Describe Image</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('rs')}}>
          <Text>Repeat Sentence</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('asq')}}>
          <Text>Answer Short Question</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </View>
    );
    }
    else{
      return;
    }
  }
  renderWriting(index){
    if(this.state.toggle === 2){
      return(
      <View>
        <CardItem button onPress={()=>{this.props.fetchItems('swt')}}>
          <Text>Summarize Written Text</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('essay')}}>
          <Text>Essay</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </View>
    );
    } else {
      return;
    }
  }
  renderReading(index){
    if(this.state.toggle === 3){
      return(
      <View>
        <CardItem button onPress={()=>{this.props.fetchItems('rsc')}}>
          <Text>Single Choice</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('rmc')}}>
          <Text>Multi Choice</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('reorder')}}>
          <Text>Reorder</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('rfib')}}>
          <Text>Fill in blanks</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>

      </View>
    );
    } else {
      return;
    }
  }
  renderListening(index){
    if(this.state.toggle === 4){
      return(
      <View>
        <CardItem button onPress={()=>{this.props.fetchItems('dic')}}>
          <Text>Dictation</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('sst')}}>
          <Text>Summarize Spoken Text</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('lsc')}}>
          <Text>Single Choice</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('lmc')}}>
          <Text>Multi Choice</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('smw')}}>
          <Text>Select Missing Word</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('scs')}}>
          <Text>Select Correct Summary</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('lfib')}}>
          <Text>Fill in Blanks</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem button onPress={()=>{this.props.fetchItems('siw')}}>
          <Text>Select Incorrect Words</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </View>
    );
    } else {
      return;
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>PTE90</Title>
          </Left>
            <Body>
            </Body>
            <Right>
            </Right>
        </Header>
      <Content padder>

        <Card>
          <CardItem header bordered button onPress={()=>this.onToggle(1)}>
            <Icon active name="microphone" style={{ color: '#3B579D' ,fontSize:25}} />
            <Text>
              Speaking
            </Text>
            <Right>
              <Icon name={this.state.toggle === 1 ? "arrow-down" : "arrow-forward"} />
            </Right>
          </CardItem>
          {this.renderSpeaking()}
        </Card>

        <Card>
          <CardItem header bordered button onPress={()=>this.onToggle(2)}>
            <Icon active name="grid" style={{ color: '#007BB6' , fontSize:25}} />
            <Text>
              Writing
            </Text>
            <Right>
              <Icon name={this.state.toggle === 2 ? "arrow-down" : "arrow-forward"} />
            </Right>
          </CardItem>
          {this.renderWriting()}
        </Card>

        <Card>
          <CardItem header bordered button onPress={()=>this.onToggle(3)}>
            <Icon active name="paper" style={{ color: '#D62727',fontSize:25 }} />
            <Text>
              Reading
            </Text>
            <Right>
              <Icon name="arrow-down" />
            </Right>
          </CardItem>
          {this.renderReading()}
        </Card>

        <Card>
          <CardItem header bordered button onPress={()=>this.onToggle(4)}>
            <Icon active name="play" style={{ color: '#D62727',fontSize:25 }} />
            <Text>
              Lisening
            </Text>
            <Right>
              <Icon name={this.state.toggle === 4 ? "arrow-down" : "arrow-forward"} />
            </Right>
          </CardItem>
          {this.renderListening()}
        </Card>
      </Content>
      <PTEFooter tab="1"/>
    </Container>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchItems:fetchItems,
    userLogin:userLogin
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ItemsMain);
