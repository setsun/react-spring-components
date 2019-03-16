import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, radios } from '@storybook/addon-knobs';

import ExpandSpring, { axises } from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Expand Spring', module)
  .add('Animate height', () => (
    <ExpandSpring
      open={boolean('open', true)}
      axis={radios('axis', axises, axises.y)}
    >
      <PlaceKitten />
    </ExpandSpring>
  ))
  .add('Animate width', () => (
    <ExpandSpring
      open={boolean('open', true)}
      axis={radios('axis', axises, axises.x)}
    >
      <PlaceKitten />
    </ExpandSpring>
  ))
  .add('Animate all', () => (
    <ExpandSpring
      open={boolean('open', true)}
      axis={radios('axis', axises, axises.y)}
    >
      <PlaceKitten />
    </ExpandSpring>
  ));

