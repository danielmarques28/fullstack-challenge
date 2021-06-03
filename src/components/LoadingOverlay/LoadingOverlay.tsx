import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from 'src/components';
import { useTheme } from 'styled-components';
import * as S from './LoadingOverlay.styles';

export const LoadingOverlay = () => {
  const theme = useTheme();

  return (
    <Container>
      <S.LoadingOverlay>
        <ActivityIndicator size="large" color={theme.colors.black} />
      </S.LoadingOverlay>
    </Container>
  );
};
