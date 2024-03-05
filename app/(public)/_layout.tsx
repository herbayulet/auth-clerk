// PublicLayout.js

import { Stack } from 'expo-router';
import React from 'react';
import CustomBottomSheetModal from 'x/components/public/CustomBottomSheet';
import { useReset } from 'x/utils/public/useReset';
import Reset from './reset';

const PublicLayout = () => {
  const { bottomSheetRef } = useReset();

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6c47ff',
          },
          headerTintColor: '#fff',
          headerBackTitle: 'Back',
        }}>
        <Stack.Screen
          name="login"
          options={{
            headerTitle: 'Clerk Auth App',
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerTitle: 'Create Account',
          }}
        />
        <Stack.Screen
          name="reset"
          options={{
            headerTitle: 'Reset Password',
          }}
        />
      </Stack>
      {/* <CustomBottomSheetModal>
        <Reset />
      </CustomBottomSheetModal> */}
    </>
  );
};

export default PublicLayout;
