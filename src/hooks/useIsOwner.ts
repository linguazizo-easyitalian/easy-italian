import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../config/supabase';

export function useIsOwner() {
  const { user } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setIsOwner(false);
      setChecking(false);
      return;
    }

    let mounted = true;
    supabase
      .from('app_owners')
      .select('email')
      .eq('email', user.email)
      .maybeSingle()
      .then(({ data }) => {
        if (mounted) {
          setIsOwner(!!data);
          setChecking(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [user?.email]);

  return { isOwner, checking };
}
