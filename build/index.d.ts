import { MongoMemoryServer } from 'mongodb-memory-server';
declare class OpenapiNodegenMemMongoLoader {
    private mongoServer;
    setup(): Promise<MongoMemoryServer>;
    teardown(): Promise<void>;
}
declare const _default: OpenapiNodegenMemMongoLoader;
export default _default;
