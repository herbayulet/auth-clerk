import { View, TextInput, Button } from 'react-native';

import { FormResgiterProps } from '../common';

const FormRegister = ({
  emailAddress,
  setEmailAdress,
  password,
  setPassword,
  onSignUpPress,
  onPressVerify,
  pendingVerification,
  code,
  setCode,
}: FormResgiterProps) => {
  return (
    <View>
      {!pendingVerification && (
        <>
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
            className={style.inputField}
          />
          <Button onPress={onSignUpPress} title="Signup" color="#6c47ff" />
        </>
      )}
      {pendingVerification && (
        <>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              className={style.inputField}
              onChangeText={setCode}
            />
          </View>
          <Button onPress={onPressVerify} title="Verify Email" color="#6c47ff" />
        </>
      )}
    </View>
  );
};

const style = {
  inputField: 'my-1 h-12 border-[1px] border-[#6c47ff] rounded-md p-2 bg-[#fff]',
};

export default FormRegister;
