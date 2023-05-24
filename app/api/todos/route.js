import clientPromise from "@/lib/mongodb";
import { requestToBodyStream } from "next/dist/server/body-streams";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req, res){
    const mongoClient = await clientPromise;
    const data = await mongoClient
        .db()
        .collection('tareas')
        .find()
        .sort()
        .toArray();
    return NextResponse.json({tasks: JSON.parse(JSON.stringify(data))})
}

export async function POST(req, res) {
    const mongoClient = await clientPromise;
    const task = await req.json();
    !task.status ? task.status = 'incompleted' : null;
    let hoy = Date.now(); 
    task.createdAt = new Date(hoy)
    console.log(task)
    const response = await mongoClient
        .db()
        .collection('tareas')
        .insertOne(task)
    return NextResponse.json({task})
}