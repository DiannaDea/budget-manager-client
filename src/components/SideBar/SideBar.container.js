/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import SideBarView from './SideBar.view';

const urlRegex = /\/manager\/(?<activeItem>[\w-]+)/;

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
    if (urlRegex.test(pathname)) {
      const { groups: { activeItem } } = urlRegex.exec(pathname);
      this.setState({
        activeItem,
      });
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <SideBarView activeItem={activeItem} />
    );
  }
}
