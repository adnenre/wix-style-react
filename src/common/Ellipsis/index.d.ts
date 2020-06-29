import { TooltipCommonProps } from '../../common';
import * as React from 'react';

export interface EllipsisCommonProps extends TooltipCommonProps {
  className?: string;
  ellipsis?: boolean;
  showTooltip?: boolean;
}

export interface EllipsisProps extends EllipsisCommonProps {
  render<T>(
    ref: React.Ref<T>,
    ellipsisClasses: (className: string) => string,
  ): React.ReactElement;
}

export default class Ellipsis extends React.PureComponent<EllipsisProps> {}

export function extractEllipsisProps<T>(
  ...props: any[]
): { ellipsisProps: T; componentProps: EllipsisProps };
