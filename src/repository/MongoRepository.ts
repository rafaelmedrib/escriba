import { DEFAULT_DATABASE, REPOSITORY_URI } from "../config/environment";
import { IRepository } from "../interfaces/IRepository";
import { MongoClient } from "mongodb";
import { Document } from "mongodb";

export class MongoRepository implements IRepository {
  private static instance: MongoRepository;

  private constructor(
    private readonly uri: string = REPOSITORY_URI,
    private readonly databaseName: string = DEFAULT_DATABASE,
    private client: MongoClient | null = null
  ) {}

  static getInstance(): MongoRepository {
    if (!MongoRepository.instance) {
      MongoRepository.instance = new MongoRepository();
    }
    return MongoRepository.instance;
  }

  async connect(): Promise<void> {
    if (!this.client) {
      const mc = new MongoClient(this.uri);
      this.client = await mc.connect();
    }
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
    }
  }

  async add(item: Document, collection: string): Promise<boolean> {
    if (this.client) {
      const result = await this.client
        .db(this.databaseName)
        .collection(collection)
        .insertOne(item);
      return !!result.insertedId;
    }
    return false;
  }
}
