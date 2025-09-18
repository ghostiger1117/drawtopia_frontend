/**
 * Supabase Storage utilities for avatar uploads
 */

import { supabase } from './supabase';

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Upload avatar to Supabase storage
 * @param file - The file to upload
 * @param userId - The user ID (optional, for organizing files)
 * @returns Promise with upload result
 */
export async function uploadAvatar(file: File, userId?: string): Promise<UploadResult> {
  try {
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: 'Invalid file type. Please upload a JPEG, PNG, or WebP image.'
      };
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return {
        success: false,
        error: 'File size too large. Please upload an image smaller than 5MB.'
      };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const fileName = `${userId || 'user'}_${timestamp}_${randomString}.${fileExtension}`;

    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Upload error:', error);
      return {
        success: false,
        error: error.message || 'Failed to upload image'
      };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(data.path);

    return {
      success: true,
      url: urlData.publicUrl
    };

  } catch (error) {
    console.error('Avatar upload error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred while uploading the image'
    };
  }
}

/**
 * Delete avatar from Supabase storage
 * @param filePath - The file path to delete
 * @returns Promise with deletion result
 */
export async function deleteAvatar(filePath: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Extract filename from URL if full URL is provided
    let fileName = filePath;
    if (filePath.includes('/avatars/')) {
      fileName = filePath.split('/avatars/').pop() || filePath;
    }

    const { error } = await supabase.storage
      .from('avatars')
      .remove([fileName]);

    if (error) {
      console.error('Delete error:', error);
      return {
        success: false,
        error: error.message || 'Failed to delete image'
      };
    }

    return { success: true };

  } catch (error) {
    console.error('Avatar deletion error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred while deleting the image'
    };
  }
}

/**
 * Get optimized image URL with transformations
 * @param url - Original image URL
 * @param width - Desired width
 * @param height - Desired height
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(url: string, width: number = 40, height: number = 40): string {
  // For Supabase, we can use transformation parameters if enabled
  // Otherwise, return the original URL
  if (url.includes('supabase')) {
    return `${url}?width=${width}&height=${height}&resize=cover&quality=80`;
  }
  return url;
}
