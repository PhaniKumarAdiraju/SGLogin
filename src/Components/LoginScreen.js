import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as EmailValidator from 'email-validator';
import InputText from './InputText';
import Button from './Button';
import SGLogo from '../utils/images/SGLogo.jpg';
import Nike from '../utils/images/nike.png';
import Adidas from '../utils/images/adidas.png';
import Footer from './Footer';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (email: string) => {
    this.setState({
      email,
    })
  }

  handlePasswordChange = (password: string) => {
    this.setState({
      password,
    })
  }

  render() {
    const { handleLogin, authenticated, valid } = this.props

    return(
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <Image source={Adidas} style={styles.logo}/>
          <View style={styles.form}>
            <InputText
              placeholder="Email"
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              autoFocus
            />
            <InputText
              placeholder="Password"
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={this.handlePasswordChange}
            />
            <Button
              label="Login"
              onPress={handleLogin}
            />
            {authenticated && valid &&
              <Text style={styles.successMessage}>
                Authenticated
              </Text>
            }
            {authenticated && !valid &&
              <Text style={styles.errorMessage}>
                Authentication Failed
              </Text>
            }
            <View style={styles.row}>
              <View style={styles.buttonContainer}>
                <Button
                  label="Forgot User?"
                  onPress={() => {console.log('Forgot UserName')}}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  label="Sign Up"
                  onPress={() => {console.log('SignUp')}}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Text>Powered by Stadium Goods</Text>
          </View>
        </View>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 30,
    marginTop: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
  footer: {
    marginTop: 40,
  },
  errorMessage: {
    color: 'red'
  },
  successMessage: {
    color: 'green'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    margin: 5,
  }

});

export default LoginScreen
