import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from "prop-types";
import styles from './ImageButton.styles';

class ImageButton extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageName: PropTypes.string,
    onPress: PropTypes.func
  };

  render() {
    return (
      <TouchableOpacity style={styles.rootView} onPress={this.props.onPress}>
        <Text>{this.props.title}</Text>
        <Image source={this.props.imageName}/>
      </TouchableOpacity>
    )
  }
}

export default ImageButton;