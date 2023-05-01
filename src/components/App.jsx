import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';

export default class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };
  render() {
    const { textSearch } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Layout></Layout>

        <GlobalStyle />
      </>
    );
  }
}
