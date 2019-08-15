import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Button extends React.Component {
  render() {
    const { label, onPress } = this.props;
    return(
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark,
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: Colors.white,
    textAlign: "center",
    height: 20,
  }
});

export default Button
