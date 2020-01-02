import OpenapiNodegenMemMongoLoader from '../index';

it('should setup ok', async (done) => {
  await OpenapiNodegenMemMongoLoader.setup();
  done();
});

it('should stop ok', async (done) => {
  await OpenapiNodegenMemMongoLoader.teardown();
  done();
});
