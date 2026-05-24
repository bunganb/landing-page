export type PlatformKind =
  | "steam"
  | "play"
  | "apple"
  | "switch"
  | "web"
  | "trailer";

export type ArtKind =
  | "cats"
  | "zero-one"
  | "ice-tea";

export type GameLink = {
  kind: PlatformKind;
  label: string;
  meta: string;
  href?: string;
};

export type Game = {
  id: string;
  title: string;
  tagline: string;
  role: string;
  art: ArtKind;
  palette: string[];
  year: string;
  genre: string;
  engine: string;
  studio?: string;
  badges: string[];
  platforms: PlatformKind[];
  description: string;
  tags: string[];
  links: GameLink[];
};

export const DEVELOPED_GAMES: Game[] = [
  {
    id: "zero-one",
    title: "Zero One Protocol",
    tagline: "Precision platforming meets logic.",
    role: "Developed",
    art: "zero-one",
    palette: ["#FFD5B5", "#F6A89E", "#E4B1C1"],
    year: "2025",
    genre: "Platformer / Puzzle",
    engine: "Unity",
    badges: ["New"],
    platforms: ["steam", "web", "play"],
    description:
      "Zero One Protocol is a punishing precision puzzle platformer that blends tight platforming, logical problem-solving, and fast reflex gameplay.",
    tags: ["Platformer", "Logic", "Single player", "Puzzle"],
    links: [
      { kind: "steam", label: "Buy on Steam", meta: "",href: "https://store.steampowered.com/app/4138940/Zero_One_Protocol/" },
      { kind: "play", label: "Download on Google Play", meta: "", href: "https://play.google.com/store/apps/details?id=com.y2g.zero.one&hl=en" },
      { kind: "apple", label: "Download on App Store", meta: "", href: "https://apps.apple.com/id/app/zero-one-protocol-logic/id6754828013?l=id" },
    ],
  },
  {
    id: "ice-tea",
    title: "Ice Tea",
    tagline: "Brew, serve, grow, profit.",
    role: "Developed",
    art: "ice-tea",
    palette: ["#FFD5B5", "#F6A89E", "#E4B1C1"],
    year: "2025",
    genre: "Tycoon / Simulation",
    engine: "Unity",
    badges: ["New"],
    platforms: ["web"],
    description:
      "Build your own Indonesian iced tea business, perfect recipes, manage supplies, and grow from street stand to thriving empire.",
    tags: ["Tycoon", "Simulation", "Management", "Economy"],
    links: [
      { kind: "steam", label: "Buy on Steam", meta: "$24.99" },
      { kind: "trailer", label: "Watch the trailer", meta: "2:14" },
    ],
  },
];

export const PUBLISHED_GAMES: Game[] = [
  {
    id: "hungry-cats",
    title: "Hungry Cats",
    tagline: "Guide the cats to their food!",
    role: "Published by hagegames",
    art: "cats",
    palette: ["#FFD5B5", "#D64E74", "#1A1A1A"],
    year: "2025",
    studio: "Menyusul Studio",
    genre: "Platformer / Cozy",
    engine: "Unity",
    badges: ["New"],
    platforms: ["web"],
    description:
      "Puzzle meets chaos. Hungry Cats is a rotation-based brain teaser where you control multiple cats at once. Spin the world. Guide every furball to food. One wrong turn? Somebody's going hungry.",
    tags: ["Cozy", "Platformer", "Single player"],
    links: [
      { kind: "web", label: "Play on Playgama", meta: "", href: "https://playgama.com/game/hungry-cats" },
      { kind: "web", label: "Play on Y8", meta: "", href: "https://www.y8.com/games/hungry_cats" },
      { kind: "web", label: "Play on Lagged", meta: "", href: "https://lagged.com/en/g/hungry-cats" },
    ],
  },
];

export const SERVICES = [
  {
    num: "01",
    title: "Game Development",
    summary:
      "Full-stack co-development with our in-house team. From a napkin sketch to a launched title: we work end to end.",
    icon: "dev" as const,
  },
  {
    num: "02",
    title: "Gamification",
    summary:
      "We add playful systems to apps, platforms, and experiences making learning, onboarding, and engagement feel more rewarding.",
    icon: "gamify" as const,
  },
  {
    num: "03",
    title: "Game Distribution",
    summary:
      "We partner with developers to publish and distribute games through flexible licensing, rev-share, or buyout deals.",
    icon: "license" as const,
  },
  {
    num: "04",
    title: "Game Porting",
    summary:
      "We bring your title to new platforms without losing the soul of the original. Switch, mobile, VR: we handle the heavy lifting.",
    icon: "port" as const,
  },
  {
    num: "05",
    title: "VR / AR",
    summary:
      "Immersive experiences for headsets, location-based attractions, and mixed-reality marketing. Quest, Vision, Pico.",
    icon: "vr" as const,
  },
];

export type ServiceIconKind = (typeof SERVICES)[number]["icon"];

export const PLATFORM_LABEL: Record<PlatformKind, string> = {
  steam: "Steam",
  play: "Google Play",
  apple: "App Store",
  switch: "Nintendo Switch",
  web: "Web",
  trailer: "Trailer",
};

export const ALL_GAMES = [...DEVELOPED_GAMES, ...PUBLISHED_GAMES];
export const byId = (id: string) => ALL_GAMES.find((g) => g.id === id);
