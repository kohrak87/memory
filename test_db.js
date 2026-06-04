import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ryvpnkwneciqplneeffn.supabase.co';
const supabaseAnonKey = 'sb_publishable_ypDHk0avu7WTfH_kppKabQ_wWqtpQQf';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  const { data: runs, error: runsError } = await supabase
    .from('runs')
    .select('*');
  
  if (runsError) {
    console.error('Error fetching runs:', runsError);
  } else {
    console.log('Fetched runs count:', runs.length);
    console.log('Runs:', runs);
  }
}

check();
