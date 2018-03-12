import React, { Component } from 'react';
import { About } from './About';
import { LayoutAnimation } from 'react-native';

export default class AboutContainer extends Component {
  state = {
    data: [],
    isLoading: true,
    shown: null
  };

  static route = {
    navigationBar: {
      title: 'About'
    }
  };

  animator = {
    duration: 500,
    update: {
      type: 'easeInEaseOut'
    }
  };

  itemExpander = i => {
    LayoutAnimation.configureNext(this.animator);
    if (this.state.shown === i) {
      this.setState({ shown: null });
    } else {
      this.setState({ shown: i });
    }
  };

  componentWillMount() {
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <About
        conductData={this.state.data ? this.state.data : []}
        itemExpander={id => this.itemExpander(id)}
        shown={this.state.shown}
        isLoading={this.state.isLoading}
      />
    );
  }
}
