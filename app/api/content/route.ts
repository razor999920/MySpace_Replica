const posts = [
    {
        title: 'Lorem Ipsum',
        slug: 'lorem-ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
        title: 'Dolor Sit',
        slug: 'dolor-sit',
        content: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        title: 'Consectetur Adipiscing',
        slug: 'consectetur-adipiscing',
        content: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
    },
    {
        title: 'Elit Integer',
        slug: 'elit-integer',
        content: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    },
    {
        title: 'Nec Odio',
        slug: 'nec-odio',
        content: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vivamus quis mi at leo pulvinar hendrerit.'
    },
    {
        title: 'Praesent Libero',
        slug: 'praesent-libero',
        content: 'Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.',
    }
];

import {NextResponse} from 'next/server'
import { getServerSession } from 'next-auth';

export async function GET() {
    const session = await getServerSession();

    return NextResponse.json(posts);
}