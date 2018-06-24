import store from '../../src/redux';
import { fetchPosts } from '../../src/redux/actions';

test('fetchPosts', () => {
  return store
    .dispatch(fetchPosts('reactjs'))
    .then(
      () => console.log(store.getState())
    );
});