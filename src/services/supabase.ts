import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPA_BASE_URL,
    process.env.NEXT_PUBLIC_SUPA_BASE_KEY,
)