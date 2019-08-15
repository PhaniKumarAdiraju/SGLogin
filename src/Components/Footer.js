import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Footer extends React.Component {
  render() {
    return(
      <View>
        <Text>Powered by Stadium Goods</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 20
  }
})

export default Footer
