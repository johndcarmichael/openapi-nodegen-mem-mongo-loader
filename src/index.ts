import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

class OpenapiNodegenMemMongoLoader {
  public async setup () {
    // Load the memory database and oass uri to mongoose
    global.OPENAPI_NODEGEN_MEM_MONGO_LOADER = new MongoMemoryServer();
    const mongoUri = await global.OPENAPI_NODEGEN_MEM_MONGO_LOADER.getUri();
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  public async teardown () {
    await mongoose.disconnect();
    await global.OPENAPI_NODEGEN_MEM_MONGO_LOADER.stop();
  }
}

export default new OpenapiNodegenMemMongoLoader();
