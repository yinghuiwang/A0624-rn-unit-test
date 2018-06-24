import 'react-native'
import React from 'react';
import { mount, shallow } from 'enzyme';
import ImageButton from '../../src/components/ImageButton';

test('<ImageButton/>', () => {
  let i = 0
  const onPress = () => i++
  const wrapper = shallow(<ImageButton title={'1'} imageName={null} onPress={onPress}/>);
  expect(wrapper.instance().props.title).toBe('1'); // uses the right handler
  expect(wrapper.prop('onPress')).toBe(onPress)
  expect(i).toBe(0);
  wrapper.simulate('press');
  expect(i).toBe(1);
});