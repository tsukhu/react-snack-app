import React, { Component } from 'react';
import Aux from '../../hoc/AuxComponent';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

 sideDrawerClosedHandler = () => {
  this.setState({showSideDrawer: false});
 }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer 
        closed={this.sideDrawerClosedHandler}
        open={this.state.showSideDrawer}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
