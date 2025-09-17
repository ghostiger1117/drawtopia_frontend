/**
 * Authentication store
 * This module provides reactive authentication state management
 */

import { writable } from 'svelte/store';
import { supabase } from '../supabase';
import { registerGoogleOAuthUser } from '../auth';
import type { User, Session } from '@supabase/supabase-js';

// Auth state interface
interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

// Initial state
const initialState: AuthState = {
  user: null,
  session: null,
  loading: true
};

// Create the auth store
export const auth = writable<AuthState>(initialState);

// Initialize auth state and listen for changes
export function initAuth() {
  // Get initial session
  console.log("initAuth");
  supabase.auth.getSession().then(({ data: { session } }) => {
    console.log("session", session);
    console.log("user", session?.user);
    auth.update(state => ({
      ...state,
      session,
      user: session?.user ?? null,
      loading: false
    }));
  });

  // Listen for auth state changes
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    async (event, session) => {
      console.log('Auth state changed:', event, session);
      
      // Handle Google OAuth user registration
      if (event === 'SIGNED_IN' && session?.user) {
        const user = session.user;
        
        // Check if this is a Google OAuth sign-in
        if (user.app_metadata?.provider === 'google') {
          console.log('Google OAuth user detected, registering to database...');
          
          // try {
          //   const result = await registerGoogleOAuthUser(user);
          //   console.log(result);
          //   if (result.success) {
          //     console.log('Google OAuth user successfully registered to database');
          //   } else {
          //     console.error('Failed to register Google OAuth user:', result.error);
          //   }
          // } catch (error) {
          //   console.error('Error during Google OAuth user registration:', error);
          // }
        }
      }
      
      auth.update(state => ({
        ...state,
        session,
        user: session?.user ?? null,
        loading: false
      }));
    }
  );

  // Return unsubscribe function
  return () => subscription.unsubscribe();
}

// Derived stores for convenience
export const user = writable<User | null>(null);
export const session = writable<Session | null>(null);
export const isAuthenticated = writable<boolean>(false);
export const authLoading = writable<boolean>(true);

// Subscribe to main auth store and update derived stores
auth.subscribe(state => {
  console.log("state", state);
  user.set(state.user);
  session.set(state.session);
  isAuthenticated.set(!!state.user);
  authLoading.set(state.loading);
});
