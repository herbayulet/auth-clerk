import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { FormProfileProps } from '../common';

const FormProfile = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  onSaveUser,
}: FormProfileProps) => {
  return (
    <View>
      <TextInput
        placeholder="First name"
        value={firstName || ''}
        onChangeText={setFirstName}
        className={style.inputField}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName || ''}
        onChangeText={setLastName}
        className={style.inputField}
      />
      <Button onPress={onSaveUser} title="Update account" color="#6c47ff" />
    </View>
  );
};

const style = {
  inputField: 'my-1 h-12 border-[1px] border-[#6c47ff] rounded-md p-2 bg-[#fff]',
};

export default FormProfile;
