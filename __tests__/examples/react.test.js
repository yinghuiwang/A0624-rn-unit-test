import 'react-native'
import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import User from '../../src/User';

test('<User/>', () => {
  const component = renderer.create(
    <User
      abc={1111}
      b={2}
      onPress={() => {
        console.log('click')
      }}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // console.log(component.state.name);
  // expect(component.props.a).toBe(1);s
});

test('<User/> enzyme', () => {
  let i = 0
  const onPress = () => i++
  const wrapper = shallow(<User abc={1} b={2} onPress={onPress}/>);
  expect(wrapper.instance().props.abc).toBe(1); // uses the right handler
  expect(wrapper.prop('onPress')).toBe(onPress)
  expect(i).toBe(0);
  wrapper.simulate('press');
  expect(i).toBe(1);

});