import React from 'react';
import { Root } from 'native-base';
import { Font, AppLoading } from 'expo';
import Floating from './floating';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  async componentDidMount() {
    this.setState({ isLoaded: false });
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isLoaded: true });
  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) { return <AppLoading />; }
    return (
      <Root>
        <Floating />
      </Root>
    );
  }
}
