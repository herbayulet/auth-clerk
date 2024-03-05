// Reset.js

import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import CustomBottomSheetModal from 'x/components/public/CustomBottomSheet';
import FormReset from 'x/components/public/FormReset';
import { useReset } from 'x/utils/public/useReset';

const Reset = () => {
  const {
    emailAddress,
    setEmailAddress,
    setPassword,
    password,
    onRequestReset,
    onReset,
    code,
    setCode,
    succesfullVerification,
    bottomSheetRef,
  } = useReset();

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
      <Stack.Screen options={{ headerBackVisible: !succesfullVerification }} />
      <FormReset
        emailAddress={emailAddress}
        setEmailAdress={setEmailAddress}
        password={password}
        setPassword={setPassword}
        onRequestReset={onRequestReset}
        onReset={onReset}
        code={code}
        setCode={setCode}
        succesfullVerification={succesfullVerification}
      />
    </View>
  );
};

export default Reset;
