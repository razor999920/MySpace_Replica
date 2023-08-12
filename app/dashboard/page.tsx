import {SignOutButton} from "@/components/buttons";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {prisma} from "@/lib/prisma";
import {ProfileForm} from "@/app/dashboard/ProfileForm";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session)
        redirect('/api/auth/signin')

    const currentEmail = session?.user?.email!;
    const user = await prisma.user.findUnique({
        where: {
            email: currentEmail
        }
    })

    return (
        <>
            <h1>Dashboard</h1>
            <ProfileForm user={user} />
        </>
    )
}