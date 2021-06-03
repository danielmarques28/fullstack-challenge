import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as S from './Container.styles';

type ContainerProps = {
  children: React.ReactNode;
  scrollView?: boolean;
};

export const Container = ({ children, scrollView = true }: ContainerProps) => {
  return (
    <SafeAreaView>
      <S.ContainerView>
        <StatusBar barStyle="light-content" />

        {scrollView ? (
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
        ) : (
          <>{children}</>
        )}
      </S.ContainerView>
    </SafeAreaView>
  );
};
