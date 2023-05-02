import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Layout></Layout>

        <GlobalStyle />
      </>
    );
  }
}
