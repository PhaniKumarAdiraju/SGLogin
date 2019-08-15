import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class InputText extends React.Component {
  render() {
    const { style, validate, ...extraProps } = this.props
    return(
      <View>
        <TextInput
          style={[styles.textInput, style]}
          selectionColor={Colors.dimgrey}
          onBlur={validate}
          {...extraProps}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    height: 40,
    borderColor: Colors.gainsboro,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    marginTop: 20,
  }
})

export default InputText;
