// Types
import type { ComponentProps } from 'react';
// Expo
import { Ionicons } from '@expo/vector-icons';

export type IoniconName = ComponentProps<typeof Ionicons>[ 'name' ];

interface IconProps {
  name: IoniconName;
  size?: number;
  color?: string;
}


export default function Icon({ name, size = 24, color = '#848282' }: IconProps) {
  return <Ionicons name={ name } size={ size } color={ color } />;
}
