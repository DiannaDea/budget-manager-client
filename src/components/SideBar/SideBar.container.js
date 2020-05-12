/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import SideBarView from './SideBar.view';

export default class SideBar extends Component {
  state = {
    activeItem: 'banks',
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname } } = this.props;
    const { location: { pathname: prevPathname } } = prevProps;

    if (pathname !== prevPathname) {
      this.changeActiveItem(pathname);
    }
  }

  changeActiveItem = (pathname) => {
    this.setState({
      activeItem: pathname.slice(1),
    });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <SideBarView activeItem={activeItem} />
    );
  }
}
