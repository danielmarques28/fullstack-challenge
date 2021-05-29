import styled from 'styled-components/native';
import {
  space,
  color,
  layout,
  flexbox,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';

export type BoxProps =
  | SpaceProps
  | ColorProps
  | FlexboxProps
  | LayoutProps
  | PositionProps;

/**
 * The component wrapper
 */
export const Box = styled.View<BoxProps>(
  {
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  position,
);
