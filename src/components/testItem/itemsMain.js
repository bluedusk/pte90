import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View } from 'react-native';
import { Header, Container, Content, Card, CardItem, Icon, Left, Title, Body, Button, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchItems } from '../../actions/itemsAction';

import styles from '../../styles/itemsMainStyle';

// Entrance of Test Items, show menu
class ItemsMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggle:0
    }

  }

  onToggle(index){
    if (index === this.state.toggle) {
      this.setState({toggle:0})
      return;
    }
    this.setState({toggle:index})
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
              <Button transparent onPress={()=>{Actions['readAloudAdd']()}}><Text>Add</Text></Button>
            </Right>
        </Header>
      <Content padder>

        <Card style={styles.mb}>
          <CardItem header bordered button onPress={()=>this.onToggle(1)}>
            <Icon active name="logo-facebook" style={{ color: '#3B579D' }} />
            <Text>
              Speaking
            </Text>
            <Right>
              <Icon name={this.state.toggle === 1 ? "arrow-down" : "arrow-forward"} />
            </Right>
          </CardItem>
          <View style={this.state.toggle === 1 ? {} : {height: 0, opacity: 0}}>

          <CardItem button onPress={()=>{this.props.fetchItems('ra')}}>
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

        </Card>

        <Card style={styles.mb}>
          <CardItem header bordered button onPress={()=>this.onToggle(2)}>
            <Icon active name="logo-linkedin" style={{ color: '#007BB6' }} />
            <Text>
              Writing
            </Text>
            <Right>
              <Icon name={this.state.toggle === 2 ? "arrow-down" : "arrow-forward"} />
            </Right>
          </CardItem>
          <View style={this.state.toggle === 2 ? {} : {height: 0, opacity: 0}}>
            <CardItem>
              <Text>Summarize Written Text</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Essay</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </View>
        </Card>

        <Card style={styles.mb}>
          <CardItem header bordered button onPress={()=>this.onToggle(3)}>
            <Icon active name="logo-youtube" style={{ color: '#D62727' }} />
            <Text>
              Reading
            </Text>
            <Right>
              <Icon name="arrow-down" />
            </Right>
          </CardItem>
          <View style={this.state.toggle === 3 ? {} : {height: 0, opacity: 0}}>
            <CardItem>
              <Text>Single Choice</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Multi Choice</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Reorder</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem button onPress={()=>{this.props.fetchItems('fib')}}>
              <Text>Fill in blanks</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </View>
        </Card>

        <Card style={styles.mb}>
          <CardItem header bordered button onPress={()=>this.onToggle(4)}>
            <Icon active name="logo-youtube" style={{ color: '#D62727' }} />
            <Text>
              Lisening
            </Text>
            <Right>
              <Icon name={this.state.toggle === 4 ? "arrow-down" : "arrow-forward"} />
            </Right>
          </CardItem>
          <View style={this.state.toggle === 4 ? {} : {height: 0, opacity: 0}}>
            <CardItem>
              <Text>Single Choice</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Multi Choice</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Select Missing Word</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>YouTube</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>YouTube</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Dictation</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </View>
        </Card>


      </Content>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchItems:fetchItems
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ItemsMain);
