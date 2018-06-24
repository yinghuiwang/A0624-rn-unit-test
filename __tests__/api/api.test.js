import {create} from 'apisauce';

const api = create({
  baseURL: 'https://api.github.com',
  headers: {'Accept': 'application/vnd.github.v3+json'}
});

describe('api', () => {

  test('/repos/skellock/apisauce/commits', () => {
    const path = '/repos/skellock/apisauce/commits';
    return api
      .get(path)
      .then((response) => response.data)
      .then((response) => {
        expect(response.length).toBeGreaterThan(0);
        // console.log(JSON.stringify(response));
      });
  });
});