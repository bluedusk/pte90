import React from 'react';
import { Button, Icon, Text} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testedItem, unTestedItem } from '../../actions/itemsAction';


class TestedBtn extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      active:props.active,
      tested:props.tested,
      clicked:false
    }
  }
  onTestedBtnPress(){
    this.setState({active:!this.state.active});
    if(this.state.active){
      this.setState({tested:this.state.tested - 1});
      this.props.unTestedItem(this.props.itemId);
    }
    else{
      this.setState({tested:this.state.tested + 1});
      this.props.testedItem(this.props.itemId);
    }
  }
  render(){
    return(
      <Button transparent onPress={this.onTestedBtnPress.bind(this)}>
        <Icon active={this.state.active} name="thumbs-up" />
        <Text>  {this.state.tested} 考过</Text>
      </Button>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ testedItem, unTestedItem }, dispatch);
}

export default connect(null, { testedItem, unTestedItem })(TestedBtn);
