
import React, { Component } from 'react';
import {  Footer, FooterTab, Button, Icon, Text } from 'native-base';
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
    // Actions.pop();
    Actions['tab1']();
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    });
    // Actions.pop();
    //
    Actions['discover']();
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    });
    // Actions.pop();
    //
    Actions['position']();
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    });
    // Actions.pop();

    Actions['tab4']();
  }


  render() {
    return (
           <Footer >
               <FooterTab>
                 <Button active={this.props.tab == 1 ? true : false} onPress={() => this.toggleTab1()} >
                   <Icon active={this.props.tab == 1 ? true : false} name="apps" />
                   <Text>机经</Text>
                 </Button>
                 <Button active={this.props.tab == 2 ? true : false} onPress={() => this.toggleTab2()} >
                   <Icon active={this.props.tab == 2 ? true : false} name="camera" />
                   <Text>发现</Text>
                 </Button>
                 <Button active={this.props.tab == 3 ? true : false} onPress={() => this.toggleTab3()} >
                   <Icon active={this.props.tab == 3 ? true : false} name="compass" />
                   <Text>考位</Text>
                 </Button>
                 <Button active={this.props.tab == 4 ? true : false} onPress={() => this.toggleTab4()} >
                   <Icon active={this.props.tab == 4 ? true : false} name="contact" />
                   <Text>我</Text>
                 </Button>
               </FooterTab>
           </Footer>
    );
  }
}



export default PTEFooter;
