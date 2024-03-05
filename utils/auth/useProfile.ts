import { useUser } from '@clerk/clerk-expo';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useProfile = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);

  const onSaveUser = async () => {
    try {
      await user?.update({
        firstName: firstName!,
        lastName: lastName!,
      });
    } catch (error) {
      Alert.alert(`${error}`, 'yahhh');
    }
  };

  return { user, firstName, setFirstName, lastName, setLastName, onSaveUser };
};
