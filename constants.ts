/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';
import { getImageUrl, IMAGE_FILES } from './config/images';

// Alejandro's underwater photography portfolio
// Each photograph tells a story from beneath the surface
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Into The Light',
    tagline: 'A descent into serenity.',
    description: 'A solitary freediver silhouetted against cathedral-like rays of light piercing the deep blue abyss.',
    longDescription: 'Captured at 30 meters depth in a cenote in Tulum, Mexico, this image represents the meditative state achieved in freediving. The interplay of light and shadow creates a spiritual atmosphere, where the diver becomes one with the ocean. The dramatic light rays symbolize hope and transcendence in the depths.',
    price: 0, // Portfolio piece - not for sale
    category: 'Limited Edition',
    imageUrl: getImageUrl(IMAGE_FILES.DSC00670),
    gallery: [
      getImageUrl(IMAGE_FILES.DSC00670)
    ],
    features: ['Tulum, Mexico', '30 meters depth', 'Natural light only', 'Single breath']
  },
  {
    id: 'p2',
    name: 'Surface Dreams',
    tagline: 'Where two worlds meet.',
    description: 'Abstract patterns of light dancing on the ocean surface, captured from below in crystalline turquoise water.',
    longDescription: 'This abstract composition explores the boundary between air and water. Shot looking upward toward the surface in the Caribbean Sea, the refraction of sunlight creates ever-changing geometric patterns. The image invites contemplation on the liminal spaces between worlds—the tangible and the ethereal.',
    price: 0, // Portfolio piece
    category: 'Fine Art',
    imageUrl: getImageUrl(IMAGE_FILES.DSC01709),
    gallery: [
      getImageUrl(IMAGE_FILES.DSC01709)
    ],
    features: ['Caribbean Sea', '15 meters depth', 'Looking toward surface', 'Abstract light study']
  },
  {
    id: 'p3',
    name: 'The Abyss Calls',
    tagline: 'Solitude in the deep.',
    description: 'A lone diver suspended in the vast emptiness, with bioluminescent plankton illuminating the ocean floor below.',
    longDescription: 'Taken during a night dive in the Pacific, this haunting image captures the overwhelming scale of the ocean. The diver appears tiny against the infinite expanse, while glowing plankton creates an otherworldly atmosphere below. This photograph speaks to our innate human curiosity to explore the unknown.',
    price: 0, // Portfolio piece
    category: 'Limited Edition',
    imageUrl: getImageUrl(IMAGE_FILES.DSC09894),
    gallery: [
      getImageUrl(IMAGE_FILES.DSC09894)
    ],
    features: ['Pacific Ocean', 'Night dive', 'Bioluminescent plankton', '35 meters depth']
  },
  {
    id: 'p4',
    name: 'Grace in Blue',
    tagline: 'The ocean\'s ballet.',
    description: 'A freediver in perfect form, touching a nurse shark in a moment of interspecies connection and mutual respect.',
    longDescription: 'Photographed in the Bahamas, this image captures a rare moment of trust between human and shark. The diver\'s graceful posture and the shark\'s calm demeanor demonstrate the possibility of peaceful coexistence. The brilliant turquoise water provides a dreamlike backdrop to this intimate encounter.',
    price: 0, // Portfolio piece
    category: 'Wildlife',
    imageUrl: getImageUrl(IMAGE_FILES.DSC0E5024),
    gallery: [
      getImageUrl(IMAGE_FILES.DSC0E5024)
    ],
    features: ['Bahamas', 'Nurse shark encounter', '20 meters depth', 'Wildlife interaction']
  },
  {
    id: 'p5',
    name: 'Cathedral of Water',
    tagline: 'Ancient caves, eternal light.',
    description: 'Dramatic god rays illuminate a freediver exploring underwater rock formations in crystal-clear water.',
    longDescription: 'Captured in a limestone cave system, this photograph showcases the raw power and beauty of natural light underwater. The sun beams create a spiritual atmosphere, reminiscent of light filtering through stained glass in an ancient cathedral. The diver explores with reverence, small against the geological majesty.',
    price: 0, // Portfolio piece
    category: 'Limited Edition',
    imageUrl: getImageUrl(IMAGE_FILES.IMG_1823),
    gallery: [
      getImageUrl(IMAGE_FILES.IMG_1823)
    ],
    features: ['Limestone cave system', 'God rays', '25 meters depth', 'Cave diving']
  },
  {
    id: 'p6',
    name: 'Ascending',
    tagline: 'The journey to the surface.',
    description: 'Three freedivers in synchronized ascent, backlit by the sun\'s rays penetrating the deep blue water.',
    longDescription: 'This powerful image captures the final moments of a deep dive. The three divers move as one toward the light above, their forms creating a rhythmic vertical composition. Shot at 40 meters in the Mediterranean, the image speaks to themes of teamwork, trust, and the universal human desire to reach for the light.',
    price: 0, // Portfolio piece
    category: 'Limited Edition',
    imageUrl: getImageUrl(IMAGE_FILES.SAASILMONICA3),
    gallery: [
      getImageUrl(IMAGE_FILES.SAASILMONICA3)
    ],
    features: ['Cenote in Yucatan, México']
  }
];

// Blog articles and stories from underwater expeditions
// These share the journey, techniques, and philosophy behind Alejandro's work
export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "One Breath, One World",
        date: "November 15, 2025",
        excerpt: "The meditative practice of freediving and how it transformed my relationship with the ocean.",
        image: getImageUrl(IMAGE_FILES.DSC00670),
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "The first time I held my breath and descended past 20 meters, something fundamental shifted. The ocean stopped being a place I visited and became a place where I belonged."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Freediving is not about conquering depth or breaking records. It's about surrender—releasing control and trusting your body's ancient relationship with water. With each dive, the mind quiets. The urge to breathe becomes a distant whisper. Time stretches and bends."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#0C4A6E] pl-6 italic text-xl text-[#0C4A6E] my-10 font-serif" },
                "\"In the deep blue, we remember we are still wild creatures, still capable of wonder.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Photography came later. The camera became a tool to share what words cannot capture—the weight of silence underwater, the cathedral of light in a cenote, the fleeting moment when a sea creature meets your gaze with curiosity rather than fear."
            )
        )
    },
    {
        id: 2,
        title: "Light and Depth",
        date: "October 22, 2025",
        excerpt: "Technical notes on capturing the interplay of natural light in underwater environments.",
        image: getImageUrl(IMAGE_FILES.IMG_1823),
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Underwater photography is a constant negotiation with light. Every meter of descent filters out another wavelength. Red disappears first, then orange, then yellow. By 30 meters, the world is a study in blues and greens."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "But in cenotes and caves, natural light becomes theatrical. Sun beams pierce the water at precise angles, creating dramatic rays that shift with the time of day and season. These moments are fleeting—you have minutes, sometimes only seconds, to compose and capture."
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#0F172A] text-[#E0F2FE] font-serif italic text-center" },
                React.createElement("p", null, "Water filters color"),
                React.createElement("p", null, "Depth erases warmth"),
                React.createElement("p", null, "But the sun remembers—"),
                React.createElement("p", null, "Sending rays down"),
                React.createElement("p", null, "To illuminate what hides below")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "I shoot without artificial lights when possible. I want to show the ocean as it is—not illuminated for human comfort, but in its natural, mysterious state. The challenge is to work within these constraints, to find beauty in what little light reaches the deep."
            )
        )
    },
    {
        id: 3,
        title: "Encounters",
        date: "September 8, 2025",
        excerpt: "Swimming with sharks, rays, and cetaceans—moments of connection across species.",
        image: getImageUrl(IMAGE_FILES.DSC0E5024),
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "The nurse shark approached slowly, curious. I held still, matching its calm energy. When it passed close enough to touch, I extended my hand—not to grab or control, but to acknowledge. A gentle contact, a moment of interspecies understanding."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "These encounters are built on respect. I never chase, never corner, never intrude into spaces where I'm not welcome. The animals teach me patience. They approach on their terms, in their time. Some days, that means spending hours in the water for a single frame. Other days, magic happens instantly."
            ),
             React.createElement("div", { className: "my-12 p-8 bg-[#0C4A6E] text-[#F0F9FF] font-serif italic text-center" },
                React.createElement("p", null, "In their eyes, intelligence"),
                React.createElement("p", null, "In their grace, wisdom"),
                React.createElement("p", null, "In their world, belonging")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Through my lens, I hope to challenge the fear that many feel toward ocean predators. Sharks are not monsters. Rays are not threats. They are fellow travelers in this blue space, ancient and deserving of protection. Every photograph is an invitation to see them differently."
            )
        )
    }
];

// Brand constants for Underworlds photography portfolio
export const BRAND_NAME = 'Underworlds';
export const PHOTOGRAPHER_NAME = 'Alejandro Gutierrez';
export const PRIMARY_COLOR = 'sky-950'; // Deep ocean blue
export const ACCENT_COLOR = 'cyan-400'; // Bright turquoise water