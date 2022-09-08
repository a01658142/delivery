import React from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function newUserScreen() {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if( val.length !== 0 ) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false
      });
    }
  }
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val
    });
  }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View>
          <Text>Register Now!</Text>
      </View>
      <Animatable.View 
        animation="fadeInUpBig"
      >
        <ScrollView>
        <Text>Username</Text>
        <View>
          <FontAwesome 
              name="user-o"
              color="#05375a"
              size={20}
          />
          <TextInput 
              placeholder="Your Username"
              onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? 
          <Animatable.View
            animation="bounceIn"
          >
          <Feather 
            name="check-circle"
            color="green"
            size={20}
          />
          </Animatable.View>
          : null}
        </View>

        <Text>Password</Text>
        <View>
          <Feather 
              name="lock"
              color="#05375a"
              size={20}
          />
          <TextInput 
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ? 
            <Feather 
              name="eye-off"
              color="grey"
              size={20}
            />
            :
            <Feather 
              name="eye"
              color="grey"
              size={20}
            />
            }
          </TouchableOpacity>
        </View>

        <Text>Confirm Password</Text>
        <View>
          <Feather 
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput 
            placeholder="Confirm Your Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity
              onPress={updateConfirmSecureTextEntry}
          >
            {data.secureTextEntry ? 
            <Feather 
                name="eye-off"
                color="grey"
                size={20}
            />
            :
            <Feather 
                name="eye"
                color="grey"
                size={20}
            />
                }
          </TouchableOpacity>
        </View>
        <View>
            <Text>
                By signing up you agree to our
            </Text>
            <Text>{" "}Terms of service</Text>
            <Text>{" "}and</Text>
            <Text>{" "}Privacy policy</Text>
        </View>
        <View style={styles.button}>
            <TouchableOpacity
                style={styles.signIn}
                onPress={() => {}}
            >
            <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
            >
                <Text style={[styles.textSign, {
                    color:'#fff'
                }]}>Sign Up</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[styles.signIn, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15
                }]}
            >
                <Text style={[styles.textSign, {
                    color: '#009387'
                }]}>Sign In</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );

}