
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
import NewItem from './components/testItem/newItem';
import RetellLecture from './components/testItem/retellLecture';
import DI from './components/testItem/di';
import DIAlbum from './components/testItem/diAlbum';
import RLDetail from './components/testItem/rlDetail';
import ASQ from './components/testItem/asq';
import ASQList from './components/testItem/asqList';
import ItemDetail from './components/testItem/itemDetail';
import ItemList from './components/testItem/itemList';
import RepeatSentence from './components/testItem/rs';
import ItemListContent from './components/testItem/itemListContent';
import ReorderDetail from './components/testItem/reorder';
import EssayList from './components/testItem/essayList';
import EssaySamples from './components/testItem/essaySamples';
import UserCenter from './components/me/userCenter';
import Discover from './components/discover/discover';
import Position from './components/position/position';
import PositionTransfer from './components/position/positionTransfer';
import PositionQuery from './components/position/positionQuery';


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
              <Scene key="readAloud" component={ReadAloud} title="ReadAloud" />
              <Scene key="newItem" component={NewItem} title="NewItem" />
              <Scene key="retellLecture" component={RetellLecture} title="RetellLecture" />
              <Scene key="rlDetail" component={RLDetail} title="RLDetail" />
              <Scene key="di" component={DI} title="DI" />
              <Scene key="diAlbum" component={DIAlbum} title="DIAlbum" />
              <Scene key="asq" component={ASQ} title="ASQ" />
              <Scene key="asqList" component={ASQList} title="ASQList" />
              <Scene key="rs" component={RepeatSentence} title="RepeatSentence" />
              <Scene key="itemList" component={ItemList} title="ItemList" />
              <Scene key="itemListContent" component={ItemListContent} title="ItemListContent" />
              <Scene key="itemDetail" component={ItemDetail} title="ItemDetail" />
              <Scene key="reorder" component={ReorderDetail} title="ReorderDetail" />
              <Scene key="essayList" component={EssayList} title="essayList" />
              <Scene key="essaySamples" component={EssaySamples} title="essaySamples" />
              <Scene key="userCenter" component={UserCenter} title="Tab4" />
              <Scene key="discover" component={Discover} title="Discover" />
              <Scene key="position" component={Position} title="Position" />
              <Scene key="positionTransfer" component={PositionTransfer} title="PositionTransfer" />
              <Scene key="positionQuery" component={PositionQuery} title="PositionQuery" />
            </Scene>
          </RouterWithRedux>
          <PTEFooter />
        </Container>
      </StyleProvider>
    );
  }
}

export default connect()(AppRoutes);
