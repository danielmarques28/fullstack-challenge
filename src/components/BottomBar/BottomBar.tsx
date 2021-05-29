import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Text } from 'src/components';
import theme from 'src/theme';
import { Box } from '../Box/Box';
import { IconProps } from '../Icon/Icon';
import * as S from './BottomBar.styles';

export const BottomBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <S.BottomBarView>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const handleLabel = (routeName: string) => {
          switch (routeName) {
            case 'HomeStack':
              return { label: 'Home', icon: 'home' };
            case 'AddBookStack':
              return { label: 'Add Book', icon: 'plus' };
            case 'ProfileStack':
              return { label: 'Profile', icon: 'user' };
            default:
              return { label: 'Home', icon: 'home' };
          }
        };

        const label = handleLabel(route.name);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <S.TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1 }}
            key={route.key}
          >
            <Icon
              name={label.icon as IconProps['name']}
              color={isFocused ? 'black' : 'gray'}
            />

            <Box height={theme.spacings.xxxsmall} />

            <Text size="small" color={isFocused ? 'primary' : 'gray'}>
              {label.label}
            </Text>
          </S.TouchableOpacity>
        );
      })}
    </S.BottomBarView>
  );
};
