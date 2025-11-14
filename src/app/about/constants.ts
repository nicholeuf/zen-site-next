export interface ItemData {
  src: string;
  title: string;
  location: string;
}

// Provides placeholder blurDataURL string and width/height
export interface ItemDataPlaceholder extends ItemData {
  blurDataURL: string;
  width: number;
  height: number;
}

export const itemData: ItemData[] = [
  {
    src: "zensite/personal/nichole-hawaii",
    title: "Luau Kalamaku",
    location: "Kauai, HI (2019)",
  },
  {
    src: "zensite/personal/napoli-coast",
    title: "Na Pali Coast Tour",
    location: "Kauai, HI (2019)",
  },
  {
    src: "zensite/personal/family-hawaii",
    title: "Visiting Sea Turtles",
    location: "Maui, HI (2019)",
  },
  {
    src: "zensite/personal/nichole-epcot",
    title: "Epcot Food & Wine Festival",
    location: "Orlando, FL (2019)",
  },
  {
    src: "zensite/personal/family-disney",
    title: "Disney",
    location: "Orlando, FL (2018)",
  },
  {
    src: "zensite/personal/family-snow",
    title: "Sledding",
    location: "Superior, CO (2015)",
  },
  {
    src: "zensite/personal/family-telluride",
    title: "Fall in the Mountains",
    location: "Telluride, CO (2014)",
  },
  {
    src: "zensite/personal/family-mountain",
    title: "Hiking",
    location: "Boulder, CO (2014)",
  },
];
