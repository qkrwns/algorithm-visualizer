export type Algorithm =
  | "BUBBLE"
  | "INSERTION"
  | "SELECTION"
  | "MERGE"
  | "QUICK"
  | "RADIX";

export type Magnitude = "low" | "med" | "high";

export type ArrayElement = {
  value: number;
  color: "UNSORTED" | "SORTED" | "COMPARED";
};
