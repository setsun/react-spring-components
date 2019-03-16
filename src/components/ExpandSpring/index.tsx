import * as React from 'react';
import { Spring, animated } from 'react-spring/renderprops';

export enum axises {
  x = 'x',
  y = 'y',
  all = 'all'
};

type Props = {
  open?: boolean,
  native?: boolean,
  children?: React.ReactChildren,
  axis?: axises,
}

const animateHeight = (open) => ({
  from: { height: 0 },
  to: { height: open ? 'auto' : 0 }
});

const animateWidth = (open) => ({
  from: { width: 0 },
  to: { width: open ? 'auto' : 0 }
});

const animateAll = (open) => ({
  from: {
    height: 0,
    width: 0
  },
  to: {
    height: open ? 'auto' : 0,
    width: open ? 'auto' : 0
  }
});

const animations = {
  [axises.x]: animateWidth,
  [axises.y]: animateHeight,
  [axises.all]: animateAll,
}

const ExpandSpring = ({
  open,
  children,
  axis,
  ...rest
}: Props) => {
  const animation = animations[axis];

  return (
    <Spring
      {...rest}
      native
      {...animation(open)}
    >
      {(spring) => (
        <animated.div
          style={{
            ...spring,
            overflow: 'hidden',
          }}
        >
          {children}
        </animated.div>
      )}
    </Spring>
  )
};

ExpandSpring.defaultProps = {
  axis: axises.y,
};

export default ExpandSpring;
