import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import * as img from './img';

import ImageButton from './ImageButton';

storiesOf('<ImageButton />', module)
  .add('normal', () =>
    <ImageButton
      title={'确认'}
      imageName={img.ICON_DENE}
      onPress={action('点击')}
    />
  )
  .add('cancel', () =>
    <ImageButton
      title={'取消'}
      imageName={img.ICON_CANCEL}
      onPress={action('点击')}
    />
  )
;