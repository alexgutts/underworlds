/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Journal Component - Photography Stories & Blog
 * 
 * Displays a grid of blog articles and dive stories from Alejandro's
 * underwater photography expeditions. Each article shares techniques,
 * philosophy, and experiences from beneath the surface.
 * 
 * Features:
 * - Three-column responsive grid layout
 * - Featured image for each article
 * - Article excerpt preview
 * - Click to read full story
 * - Hover effects for visual feedback
 */

import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-gradient-to-b from-sky-50 to-cyan-50 py-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">From the Deep</span>
            <h2 className="text-5xl md:text-7xl font-serif text-sky-950 mb-6">Stories & Insights</h2>
            
            {/* Coming Soon Message */}
            <div className="mt-12 p-12 bg-white/50 backdrop-blur-sm border-2 border-cyan-200 rounded-lg max-w-2xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
              </div>
              <p className="text-2xl font-serif text-sky-900 mb-3">Coming Soon</p>
              <p className="text-sky-700 font-light">
                Dive stories, technique guides, and reflections from beneath the surface will be shared here soon.
              </p>
            </div>
        </div>

        {/* Articles Grid - Hidden for now, will be shown when content is ready */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 hidden">
            {JOURNAL_ARTICLES.map((article) => (
                <div 
                  key={article.id} 
                  className="group cursor-pointer flex flex-col text-left bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" 
                  onClick={() => onArticleClick(article)}
                >
                    {/* Article Featured Image */}
                    <div className="w-full aspect-[4/3] overflow-hidden bg-sky-900">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    
                    {/* Article Content */}
                    <div className="flex flex-col flex-1 text-left p-8">
                        {/* Publication Date */}
                        <span className="text-xs font-medium uppercase tracking-widest text-cyan-600 mb-3">{article.date}</span>
                        
                        {/* Article Title */}
                        <h3 className="text-2xl font-serif text-sky-950 mb-4 leading-tight group-hover:text-cyan-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        {/* Article Excerpt */}
                        <p className="text-sky-700 font-light leading-relaxed flex-1">{article.excerpt}</p>
                        
                        {/* Read More Link */}
                        <div className="mt-6 text-sm font-medium uppercase tracking-widest text-cyan-600 group-hover:text-cyan-500 transition-colors flex items-center gap-2">
                          Read Story 
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
