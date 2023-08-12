import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export async function  PUT(req: Request) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;
    const data = await req.json();

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail
        },
        data: {
            name: data.name,
            bio: data.bio,
            age: parseInt(data.age),
            image: data.image,
            email: currentUserEmail
        }
    })

    return NextResponse.json(user);
}