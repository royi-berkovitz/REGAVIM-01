// Components.d.ts — the complete catalog of the 5 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Frame306) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Frame 306" (node 280:308)
export interface Frame306Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "תמכו בנו". */
  text1?: string;
  /** Text content; defaults to "צרו קשר". */
  text2?: string;
  /** Text content; defaults to "ניוזלטר". */
  text3?: string;
  /** Text content; defaults to "פרסומים". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Group" (node 278:307)
export interface GroupProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "Group 195" (node 372:419)
export interface Group195Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3" | "variant4" | "variant5" | "variant6";
  /** Text content; defaults to "מרחב צפון". */
  text1?: string;
  /** Text content; defaults to "מרחב יו”ש". */
  text2?: string;
  /** Text content; defaults to "מרחב ירושלים". */
  text3?: string;
  /** Text content; defaults to "מרחב מרכז". */
  text4?: string;
}

// figma layer: "Layer_1" (node 278:256)
export interface Layer1Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "MENU BUTTON" (node 279:172)
export interface MENUBUTTONProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover" | "chosen";
  /** Text content; defaults to "עמוד הבית". */
  text1?: string;
}

declare const Frame306: React.FC<Frame306Props>;
declare const Group: React.FC<GroupProps>;
declare const Group195: React.FC<Group195Props>;
declare const Layer1: React.FC<Layer1Props>;
declare const MENUBUTTON: React.FC<MENUBUTTONProps>;
declare global {
  interface Window {
    Frame306: React.FC<Frame306Props>;
    Group: React.FC<GroupProps>;
    Group195: React.FC<Group195Props>;
    Layer1: React.FC<Layer1Props>;
    MENUBUTTON: React.FC<MENUBUTTONProps>;
  }
}
