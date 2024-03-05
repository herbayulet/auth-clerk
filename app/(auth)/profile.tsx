import React from 'react';
import { View, Text } from 'react-native';
import FormProfile from 'x/components/auth/FormProfile';
import { useProfile } from 'x/utils/auth/useProfile';

const Profile = () => {
  const { firstName, lastName, onSaveUser, setFirstName, setLastName, user } = useProfile();
  console.log({ user });

  return (
    <View className="flex-1 justify-center p-5">
      <Text style={{ textAlign: 'center' }}>
        Good morning {user?.firstName} {user?.lastName}!
      </Text>
      <FormProfile
        firstName={firstName!}
        setFirstName={setFirstName}
        lastName={lastName!}
        setLastName={setLastName}
        onSaveUser={onSaveUser}
      />
    </View>
  );
};

export default Profile;
