/**
 * Authentication service
 * This module provides authentication functions using Supabase
 */

import { supabase, supabaseAdmin } from './supabase';
import type { User, Session } from '@supabase/supabase-js';

export interface SignUpData {
  email?: string;
  phone?: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface SignInData {
  email?: string;
  phone?: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  session?: Session;
  error?: string;
}

/**
 * Sign up a new user with email
 */
export async function signUpWithEmail(email: string, password: string, firstName?: string, lastName?: string): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    });

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }
    // console.log('Signup data:', data);
    const userData = {
      id: data.user?.id,
      email: email.toLowerCase().trim(),
      first_name: firstName ? firstName.trim() : null,
      last_name: lastName ? lastName.trim() : null,
      role: 'adult',
      created_at: new Date(),
      updated_at: new Date()
    };
    
    const { data: userProfile, error: profileError } = await supabaseAdmin
      .from('users')
      .insert([userData])
      .select('*')
      .single();
    // console.log('User profile:', userProfile);
    // console.log('User profile error:', profileError);
    const { data: otpData, error: otpError } = await supabase.auth.signInWithOtp({
      email: email.toLowerCase().trim(),
      options: {
        emailRedirectTo : 'http://localhost:3000',
      }
    });
    // console.log('OTP data:', otpData);
    // console.log('OTP error:', otpError);
    return {
      success: true,
      user: data.user || undefined,
      session: data.session || undefined
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

/**
 * Sign up a new user with phone
 */
export async function signUpWithPhone(phone: string, password: string, firstName?: string, lastName?: string): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signUp({
      phone,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    });

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }
    // console.log('Signup data:', data);
    const userData = {
      id: data.user?.id,
      phone: phone.trim(),
      first_name: firstName ? firstName.trim() : null,
      last_name: lastName ? lastName.trim() : null,
      role: 'adult',
    }
    const { data: userProfile, error: profileError } = await supabaseAdmin
      .from('users')
      .insert([userData])
      .select('*')
      .single();
    // console.log('User profile:', userProfile);
    // console.log('User profile error:', profileError);
    const { data: otpData, error: otpError } = await supabase.auth.signInWithOtp({
      phone: phone.trim(),
      options: {
        // phoneRedirectTo : 'http://localhost:3000',
      }
    });
    // console.log('OTP data:', otpData);
    // console.log('OTP error:', otpError);
    return {
      success: true,
      user: data.user || undefined,
      session: data.session || undefined
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

/**
 * Sign in with email and password
 */
export async function signInWithEmail(email: string, password: string): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return {
      success: true,
      user: data.user,
      session: data.session
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

/**
 * Sign in with phone and password
 */
export async function signInWithPhone(phone: string, password: string): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      phone,
      password
    });

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return {
      success: true,
      user: data.user,
      session: data.session
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

/**
 * Sign out the current user
 */
export async function signOut(): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

/**
 * Get the current user
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    // console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Get the current session
 */
export async function getCurrentSession(): Promise<Session | null> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    // console.error('Error getting current session:', error);
    return null;
  }
}

/**
 * Reset password via email
 */
export async function resetPassword(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    
    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

/**
 * Listen to auth state changes
 */
export function onAuthStateChange(callback: (event: string, session: Session | null) => void) {
  return supabase.auth.onAuthStateChange(callback);
}
export async function verifyEmail(email: string, token: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase.auth.verifyOtp({
      email: email.toLowerCase().trim(),
      token: token,
      type: 'email',
    });
    if (error) {
      return {
        success: false,
        error: error.message
      };
    }
    // console.log('Verify email data:', data);
    // console.log('Verify email error:', error);
    return { success: true};
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

/**
 * Resend OTP for email verification
 */
export async function resendEmailOTP(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email.toLowerCase().trim(),
      options: {
        emailRedirectTo: 'http://localhost:3000',
      }
    });
    
    if (error) {
      return {
        success: false,
        error: error.message
      };
    }
    
    // console.log('Resend OTP data:', data);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}