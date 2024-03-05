import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TextInput, Button, TouchableOpacity } from 'react-native';

import { FormLoginProps } from '../common';
import { useState } from 'react';

const FormLogin = ({
  emailAddress,
  setEmailAdress,
  password,
  setPassword,
  onSignInPress,
}: FormLoginProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        placeholder="masukan email kamu"
        value={emailAddress}
        onChangeText={setEmailAdress}
        className={style.inputField}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="masukan password kamu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={isPasswordVisible}
        className={style.inputField}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} className={style.iconContainer}>
        <MaterialCommunityIcons
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color="#888"
        />
      </TouchableOpacity>

      <Button onPress={onSignInPress} title="Login" color="#6c47ff" />
    </View>
  );
};

const style = {
  inputField: 'my-1 h-12 border-[1px] border-[#6c47ff] rounded-md p-2 bg-[#fff]',
  iconContainer: 'p-2 absolute right-0 bottom-10',
};

export default FormLogin;
