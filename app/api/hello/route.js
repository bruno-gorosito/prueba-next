
import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';
 
export async function GET(req, res) {
  const mongoClient = await clientPromise;
  const data = await mongoClient
    .db()
    .collection('tareas')
    .find()
    .toArray()
 
  return NextResponse.json({tasks: JSON.parse(JSON.stringify(data))});
}