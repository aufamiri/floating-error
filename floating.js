import React, { Component } from 'react';
import {
  Container, Content, Item, Label, Input,
} from 'native-base';

export default class floating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testValue: '',
      test2Value: '',
    };
  }

  componentDidMount = () => {
    this.setState({ testValue: 'an experiment', test2Value: 'another experiment' });
  }

  render() {
    const { testValue, test2Value } = this.state;
    return (
      <Container>
        <Content>
          <Item floatingLabel>
            <Label>Test</Label>
            <Input value={testValue} />
          </Item>
          <Item floatingLabel>
            <Label>Test2</Label>
            <Input value={test2Value} editable={false} />
          </Item>

        </Content>
      </Container>
    );
  }
}
