import { View, TextInput, Button } from 'react-native';

import CustomBottomSheetModal from './CustomBottomSheet';
import { FormResetProps } from '../common';

const FormReset = ({
  emailAddress,
  setEmailAdress,
  password,
  setPassword,
  onRequestReset,
  onReset,
  succesfullVerification,
  code,
  setCode,
}: FormResetProps) => {
  return (
    <View>
      {!succesfullVerification && (
        <>
          <TextInput
            autoCapitalize="none"
            placeholder="masukan email kamu"
            value={emailAddress}
            onChangeText={setEmailAdress}
            className={style.inputField}
          />

          <Button onPress={onRequestReset} title="Send reset email" color="#6c47ff" />
        </>
      )}
      {succesfullVerification && (
        <>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              className={style.inputField}
              onChangeText={setCode}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="masukan password kamu"
              value={password}
              onChangeText={setPassword}
              className={style.inputField}
            />
          </View>
          <Button onPress={onReset} title="Set new Password" color="#6c47ff" />
        </>
      )}
    </View>
  );
};

const style = {
  inputField: 'my-1 h-12 border-[1px] border-[#6c47ff] rounded-md p-2 bg-[#fff]',
};

export default FormReset;
