import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../../theme';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';


const { height, width } = Dimensions.get('window');

class SignupDr extends React.Component {
  state = {
    firstName:"",
    lastName:"",
    email:"",
    password: "",
    phoneNumber:"",
    Clinic_Location:"",
    workingFrom:"",
    workingTo:"",
    notes:""
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value }); 
  }

  submit = () => {
    var url = 'http://192.168.1.123:8080/api/user/doctor/signup';
    
    axios.post(url,this.state)
    .then(function (response) {
      Alert.alert("User created sucessfully");
      Actions.push("LoginDr");
    })
    .catch(function (error) {
      Alert.alert("Email already exists")
      console.log(error);
    });
    
  }

  render() {
    const { navigation } = this.props;
    const { firstName, lastName, email, password, phoneNumber,bloodType,height,weight} = this.state;

    return (
      <ScrollView>

      
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <Block>
          
          
        </Block>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block
          flex
          center
          style={{ marginTop: theme.SIZES.BASE   }}
        >
          <Text> {"\n"}</Text> 
           <Image source={require('../../../assets/splash.png')} />
           <Text muted center size={theme.SIZES.FONT * 2} color={"#18DCFF"}> Sign Up </Text>
          
        </Block>

        <Block flex={3.5} center space="between">
          <Block flex={2}  >
            <Input
              rounded
              placeholder="First Name"
              autoCapitalize="none"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('firstName', text)}
            />
            <Input
              rounded
              placeholder="Last Name"
              autoCapitalize="none"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('lastName', text)}
            />
            <Input
              rounded
              // type="Email-address"
              placeholder="Email"
              placeholderTextColor="#18DCFF" 
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('email', text)}
            />
            <Input
              rounded
              password
              viewPass
              placeholder="Password"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('password', text)}
            />
          
            <Input
              rounded
              placeholder= "Phone_number"
              placeholderTextColor="#18DCFF" 
              textContentType = "telephoneNumber"
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('phoneNumber', text)}
            />
            <Input
              rounded
              placeholder="Clinic Location"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('clinicLocation', text)}
            />
            <Input
              rounded
              placeholder="Working From"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('workingFrom', text)}
            />
            <Input
              rounded
              placeholder="Working To"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('workingTo', text)}
            />
            <Input
              rounded
              placeholder="Notes"
              placeholderTextColor="#18DCFF" 
              style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('notes', text)}
            />
          </Block>
          <Block flex={0.2} middle>
         
            <Button
              round
              color="#18DCFF"
              onPress={this.submit.bind(this)}
            >
              Sign up
            </Button>
            
          </Block>
        </Block>
      </KeyboardAvoidingView>
    </Block>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  
});

export default SignupDr;