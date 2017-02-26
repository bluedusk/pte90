
import React, { Component } from 'react';
import { View, BackAndroid, StatusBar, NavigationExperimental, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button, Icon, Header, Left, Right, Title, Body, Container, Content, StyleProvider, getTheme, variables, Drawer } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';
import { Actions, Router, Scene } from 'react-native-router-flux';

import ItemsMain from './components/testItem/itemsMain';
import PTEFooter from './components/common/pteFooter';
import Tab2 from './components/tab2';
import Tab3 from './components/tab3';
import Tab4 from './components/tab4';
import ReadAloud from './components/testItem/readAloud';
import ReadAloudAdd from './components/testItem/readAloudAdd';
import UserCenter from './components/me/userCenter';


// import ItemsMain from '.././js/components/Header/1';

// https://github.com/aksonov/react-native-router-flux/blob/master/docs/REDUX_FLUX.md
// RNRF to use redux
const RouterWithRedux = connect()(Router);

class AppRoutes extends Component {

  render(){
    return(
      <StyleProvider style={getTheme((this.props.themeState === 'material') ? material : undefined)}>

        <Container>
          {/* <StatusBar /> */}

          {/* <Content padder /> */}

          <RouterWithRedux>
            <Scene key="root">
              <Scene key="tab1" component={ItemsMain} hideNavBar title="机经" initial={true} />
              <Scene key="tab2" component={Tab2} title="Tab2" />
              <Scene key="tab3" component={Tab3} title="Tab3" />
              <Scene key="tab4" component={UserCenter} title="Tab4" />
              <Scene key="readAloud" component={ReadAloud} title="Tab4" />
              <Scene key="readAloudAdd" component={ReadAloudAdd} title="Tab4" />
              <Scene key="userCenter" component={UserCenter} title="Tab4" />
            </Scene>
          </RouterWithRedux>
          <PTEFooter />
        </Container>
      </StyleProvider>
    );
  }
}

export default connect()(AppRoutes);
