import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as S from './Container.styles';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <SafeAreaView>
      <S.ContainerView>
        <StatusBar barStyle="light-content" />

        <KeyboardAwareScrollView
          alwaysBounceVertical={false}
          enableOnAndroid={true}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </KeyboardAwareScrollView>
      </S.ContainerView>
    </SafeAreaView>
  );
};
