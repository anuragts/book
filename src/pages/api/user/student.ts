import type { NextApiRequest,NextApiResponse } from "next";
import { prisma } from "@/db/client";

type Data = {
    name:string,
    email:string,
    Class:string
}

export default async  (req:NextApiRequest,res:NextApiResponse) => {
    const {name,email,Class}:Data = req.body;

    const student = await prisma.student.create({
    data:{
        name,
        email,
        class:Class
    }
    })

    res.status(201).json(student)
}