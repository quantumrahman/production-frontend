'use client';

import { createAuthClient } from 'better-auth/react';

const { useSession } = createAuthClient();

export default function useUser() {
    const { data: session, isPending, error, refetch } = useSession();

    return {
        session,
        isPending,
        error,
        refetch,
    };
}
