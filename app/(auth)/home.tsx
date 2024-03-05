import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
  const { user } = useUser();
  console.log(user, 'hehehe');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
    </View>
  );
};

export default Home;
