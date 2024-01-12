
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ijkplwuklcppecclcknd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqa3Bsd3VrbGNwcGVjY2xja25kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTA1ODk5MCwiZXhwIjoyMDIwNjM0OTkwfQ.iAgK4whJEB5BdZiPGsXLxuE-SDfE8z-1JJuOttJJMfE');

export const UploadData = async (name, email, message) => {
    try {
        const { error } = await supabase
            .from('contactlist')
            .insert({ name: name,email:email,message:message })
            return true;
    } catch (error) {
        console.log("Error: "+error);
        return false;
    }
}