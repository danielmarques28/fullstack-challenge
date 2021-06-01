import React, { useMemo } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { Box } from 'src/components';
import PlusSvg from 'src/assets/images/svg/plus.svg';
import UserSvg from 'src/assets/images/svg/user.svg';
import HomeSvg from 'src/assets/images/svg/home.svg';
import ArrowLeftSvg from 'src/assets/images/svg/arrow-left.svg';
import HeadphonesSvg from 'src/assets/images/svg/headphones.svg';
import BookOpenSvg from 'src/assets/images/svg/book-open.svg';
import ShareSvg from 'src/assets/images/svg/share.svg';

export type IconProps = {
  name:
    | 'plus'
    | 'user'
    | 'home'
    | 'arrow-left'
    | 'headphones'
    | 'book-open'
    | 'share';
  color?: keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['spacings'];
};

export const Icon = ({ name, color = 'black', size = 'small' }: IconProps) => {
  const theme = useTheme();

  // @ts-expect-error
  const IconSvg: React.ComponentType<{
    width: string;
    height: string;
    fill: string;
  }> | null = useMemo(() => {
    switch (name) {
      case 'plus':
        return PlusSvg;
      case 'user':
        return UserSvg;
      case 'home':
        return HomeSvg;
      case 'arrow-left':
        return ArrowLeftSvg;
      case 'headphones':
        return HeadphonesSvg;
      case 'book-open':
        return BookOpenSvg;
      case 'share':
        return ShareSvg;
      default:
        return null;
    }
  }, [name]);

  return (
    <Box>
      {IconSvg && (
        <IconSvg
          width={theme.spacings[size] || theme.spacings.small}
          height={theme.spacings[size] || theme.spacings.small}
          fill={theme.colors[color]}
        />
      )}
    </Box>
  );
};
