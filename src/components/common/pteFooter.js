
import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';


class PTEFooter extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    });
    Actions['tab1']();
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    });
    Actions['tab2']();
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    });
    Actions['tab3']();
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    });
    Actions['tab4']();
  }


  render() {
    return (
           <Footer >
               <FooterTab>
                 <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
                   <Icon active={this.state.tab1} name="apps" />
                   <Text>机经</Text>
                 </Button>
                 <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
                   <Icon active={this.state.tab2} name="camera" />
                   <Text>发现</Text>
                 </Button>
                 <Button active={this.state.tab3} onPress={() => this.toggleTab3()} >
                   <Icon active={this.state.tab3} name="compass" />
                   <Text>考位</Text>
                 </Button>
                 <Button active={this.state.tab4} onPress={() => this.toggleTab4()} >
                   <Icon active={this.state.tab4} name="contact" />
                   <Text>我</Text>
                 </Button>
               </FooterTab>
           </Footer>
    );
  }
}



export default PTEFooter;
