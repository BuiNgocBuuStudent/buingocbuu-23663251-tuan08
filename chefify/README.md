# Chefify

A beautiful, interactive, and responsive web interface designed exclusively for food lovers, chefs, and culinary enthusiasts. Built with standard React and Vite.

## Features Implemented

- **Complete Authentication Flows:**
  - Login Modal (with Email, Google, Facebook, Apple options).
  - Feature-rich Signup Form (with password visibility toggling and validation).
- **Dynamic Search System:**
  - Fully functioning view mapping based on keywords.
  - Empty Search State (with intelligent culinary suggestions and illustrations).
  - Search Results Grid (displaying recipes with filters, rating metrics, and paginations).
- **User Profile (Recipe Box):**
  - Aesthetic user banner (e.g., Emma Gonzalez's Recipe Box) summarizing stats and bio.
  - Tabbed interface (Saved Recipes, Folders) containing custom grids.
- **Premium Subscription Landing Page:**
  - High-converting layout highlighting premium access (such as Cooking, Wirecutter, Games, The Athletic).
  - Clean pricing modules and mock subscription flows.
- **Reusable Styling & Layouts:**
  - Masterful use of CSS variables matching the Figma/mockup specifications.
  - Inter Font integration for modern web design.
  - Extensive Footer and Header components persisting state fully.

## Getting Started

This project is built using React and Vite.

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Running the App Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the application:
   Wait for the terminal to display the local URL (usually `http://localhost:5173/`).

## Tech Stack & Architecture

- **React:** Interactive DOM manipulation and state management.
- **Vite:** High-performance local development and bundling.
- **Pure CSS:** Highly customized, standalone component styling using exact aesthetic measures without massive external UI libraries.

## State Navigation Structure

Rather than adding heavy routing libraries such as React Router, the application smoothly navigates using pure component-state (`currentView`), allowing lighting-fast local testing without server rewrites.

Key triggers to play with:

- Hit **Enter** in the Search Bar with `"salad"` vs any other text to witness different paths.
- Logging in vs Logging out automatically adjusts Header privileges and opens Profile views.
- Clicking **Recipes** in the main navigation routes to the Subscription flow.

---

_Developed for 2023 Chefify Company ecosystem prototypes._
