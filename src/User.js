import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'

class User extends React.Component {
  static propTypes = {
    abc: PropTypes.number.isRequired,
    b: PropTypes.number,
    onPress: PropTypes.func
  }

  state = {
    name: 'wangyinghui',
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.abc}</Text>
        <Text>{this.props.abc}</Text>
        <Text>{this.state.name}</Text>
      </TouchableOpacity>
    )
  }
}

export default User;