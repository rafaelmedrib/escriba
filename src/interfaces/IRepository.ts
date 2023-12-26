import { Document } from 'mongodb'

export interface IRepository {
  connect(): Promise<void>
  disconnect(): Promise<void>
  add(item: Document, collection: string): Promise<boolean> 
}