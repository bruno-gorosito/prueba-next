import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
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

export async function PUT(req, res) {
    try {
        const mongoClient = await clientPromise;
        let {id, task} = await req.json();
        id = typeof id === 'string' ? new ObjectId(id) : id;
        const collection = await mongoClient
            .db()
            .collection('tareas')
            .updateOne({_id: id}, {$set : task})
        return NextResponse.json({msg: 'success'})
    } catch (error) {
        NextResponse.json(error)
    }
}

export async function DELETE(req, res) {
    try {
        const mongoClient = await clientPromise;
        
        // const body = Readable.toString(req.body) ;
        const {searchParams} = new URL(req.url);
        let id = searchParams.get('id')
        id = typeof id === 'string' ? new ObjectId(id) : id;
        const collection = await mongoClient
            .db()
            .collection('tareas')
        let existe = await collection.findOne({_id: id});
        if (existe === null) return NextResponse.json({msg: 'Tarea no existente'})
        await collection.deleteOne({_id: id})
        return NextResponse.json({msg: 'Success'})
            
        
    } catch (error) {
        console.log(error)
    }
}