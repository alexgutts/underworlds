/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

// Represents an underwater photograph in Alejandro Gutierrez's portfolio
// This is a portfolio showcase, not an e-commerce store
export interface Product {
  id: string;
  name: string; // Title of the photograph
  tagline: string; // Short artistic description
  description: string; // Brief story about the image
  longDescription?: string; // Full story: location, depth, conditions, meaning
  price: number; // Legacy field (not displayed in portfolio view)
  category: 'Limited Edition' | 'Fine Art' | 'Wildlife' | 'Landscapes'; // Collection type
  imageUrl: string; // Path to the photograph
  gallery?: string[]; // Additional angles or detail shots (usually just the main image for photos)
  features: string[]; // Photo details: location, depth, technique
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode; // Allowing JSX for rich formatting/poems
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' };
