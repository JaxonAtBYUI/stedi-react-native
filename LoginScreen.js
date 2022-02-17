import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const LoginScreen = () => {
  const [phone, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phone}
        placeholder="Phone Number"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        keyboardType="phone-pad"
      />
      <View style={styles.container}>
        <Button style={styles.loginButton}
        title="Send OTP"
        onPress={() => fetch('https://dev.stedi.me/twofactorlogin/' + phone, {method: 'POST'})}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="One Time Password"
        keyboardType="numeric"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        autoComplete={'sms-otp'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  loginButton: {
    height:40,
    width: 120,
    textAlign: 'center'
  },
  container: {
      justifyContent: 'center',
      paddingHorizontal: 10,
      alignItems: 'center'
  }
});

export default LoginScreen;
