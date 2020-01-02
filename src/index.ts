import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

class OpenapiNodegenMemMongoLoader {
  private mongoServer: MongoMemoryServer;

  public async setup () {
    // Load the memory database and oass uri to mongoose
    this.mongoServer = new MongoMemoryServer();
    const mongoUri = await this.mongoServer.getUri();
    await mongoose.connect(mongoUri, {}, (err: any) => {
      if (err) {
        console.error(err);
      }
    });
    return this.mongoServer;
  }

  public async stop () {
    await mongoose.disconnect();
    await this.mongoServer.stop();
  }
}

export default new OpenapiNodegenMemMongoLoader();
