import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import FormRegister from 'x/components/public/FormResgiter';
import { useRegister } from 'x/utils/public/useRegister';

const Register = () => {
  const {
    loading,
    emailAddress,
    setEmailAddress,
    setPassword,
    password,
    onSignUpPress,
    onPressVerify,
    code,
    setCode,
    pendingVerification,
  } = useRegister();
  return (
    <View className="flex-1 justify-center p-5">
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />
      <FormRegister
        emailAddress={emailAddress}
        setEmailAdress={setEmailAddress}
        password={password}
        setPassword={setPassword}
        onSignUpPress={onSignUpPress}
        onPressVerify={onPressVerify}
        code={code}
        setCode={setCode}
        pendingVerification={pendingVerification}
      />
    </View>
  );
};

export default Register;
