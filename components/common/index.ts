interface FormLoginProps {
  emailAddress: string;
  setEmailAdress: (emailAddress: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSignInPress: () => Promise<void>;
}

interface FormResgiterProps {
  emailAddress: string;
  setEmailAdress: (emailAddress: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSignUpPress: () => Promise<void>;
  pendingVerification: boolean;
  onPressVerify: () => Promise<void>;
  code: string;
  setCode: (code: string) => void;
}

interface FormResetProps {
  emailAddress: string;
  setEmailAdress: (emailAddress: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onRequestReset: () => Promise<void>;
  succesfullVerification: boolean;
  onReset: () => Promise<void>;
  code: string;
  setCode: (code: string) => void;
}

interface FormProfileProps {
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  onSaveUser: () => Promise<void>;
}

export { FormLoginProps, FormResgiterProps, FormResetProps, FormProfileProps };
