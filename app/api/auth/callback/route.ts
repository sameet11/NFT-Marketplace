import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/database_types'

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const cookieStore = cookies()
        const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
        await supabase.auth.exchangeCodeForSession(code)
    }
    requestUrl.pathname = requestUrl.pathname.replace('/api', '');
    requestUrl.pathname = requestUrl.pathname.replace('/auth', '');
    requestUrl.pathname = requestUrl.pathname.replace('/callback', '');
    const newPath = '/dashboard';
    requestUrl.pathname += newPath;

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.href)
}