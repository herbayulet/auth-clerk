// CustomBottomSheetModal.js

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { forwardRef, useMemo } from 'react';
import { View } from 'react-native';

export type Ref = BottomSheetModal;

interface BottomSheetProps {
  children: React.ReactNode;
}

const CustomBottomSheetModal = forwardRef<Ref, BottomSheetProps>((props, ref) => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  const { children } = props;

  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>{children}</View>
    </BottomSheetModal>
  );
});

export default CustomBottomSheetModal;
