import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import FormLogin from 'x/components/public/FormLogin';
import { useLogin } from 'x/utils/public/useLogin';
import { useReset } from 'x/utils/public/useReset';

const Login = () => {
  const { loading, emailAddress, setEmailAddress, setPassword, password, onSignInPress } =
    useLogin();
  const { handlePresentModalPress } = useReset();
  return (
    <View className="flex-1 justify-center p-5">
      <Spinner visible={loading} />
      <FormLogin
        emailAddress={emailAddress}
        setEmailAdress={setEmailAddress}
        password={password}
        setPassword={setPassword}
        onSignInPress={onSignInPress}
      />
      <Link href="/reset" asChild>
        <Pressable style={styles.button} onPress={handlePresentModalPress}>
          <Text>Forgot password?</Text>
        </Pressable>
      </Link>
      <Link href="/register" asChild>
        <Pressable style={styles.button}>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    alignItems: 'center',
  },
});
