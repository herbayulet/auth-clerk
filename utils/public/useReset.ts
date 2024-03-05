import { useSignIn } from '@clerk/clerk-expo';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';

export const useReset = () => {
  const { signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [succesfullVerification, setSuccesfullVerification] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  const onRequestReset = async () => {
    try {
      await signIn!.create({
        strategy: 'reset_password_email_code',
        identifier: emailAddress,
      });
      setSuccesfullVerification(true);
      setTimeout(() => {
        dismiss();
      }, 2000);
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  const onReset = async () => {
    try {
      const result = await signIn!.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      });
      console.log(result);
      alert('Password reset successfully');
      setTimeout(() => {
        dismiss();
      }, 2000);
      // Set the user session active, which will log in the user automatically
      await setActive!({ session: result.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  return {
    signIn,
    setActive,
    emailAddress,
    setEmailAddress,
    code,
    setCode,
    succesfullVerification,
    setSuccesfullVerification,
    onRequestReset,
    onReset,
    password,
    setPassword,
    bottomSheetRef,
    handlePresentModalPress,
    dismiss,
  };
};
