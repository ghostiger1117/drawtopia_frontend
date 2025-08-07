/**
 * Authentication store
 * This module provides reactive authentication state management
 */

import { writable } from 'svelte/store';
import { supabase } from '../supabase';
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
  supabase.auth.getSession().then(({ data: { session } }) => {
    auth.update(state => ({
      ...state,
      session,
      user: session?.user ?? null,
      loading: false
    }));
  });

  // Listen for auth state changes
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      console.log('Auth state changed:', event, session);
      
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
  user.set(state.user);
  session.set(state.session);
  isAuthenticated.set(!!state.user);
  authLoading.set(state.loading);
});
