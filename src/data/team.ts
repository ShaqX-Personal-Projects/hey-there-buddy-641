export type TeamMemberKey =
  | "gashi"
  | "erjon"
  | "mikkel"
  | "cecilie"
  | "comingSoon";

export interface TeamMemberEntry {
  key: TeamMemberKey;
  portrait: string;
}

export const teamPageData: { members: TeamMemberEntry[] } = {
  members: [
    { key: "gashi", portrait: "/team/granit.jpg" },
    { key: "erjon", portrait: "/team/erjon.jpg" },
    { key: "mikkel", portrait: "/placeholder.svg" },
    { key: "cecilie", portrait: "/placeholder.svg" },
    { key: "comingSoon", portrait: "/placeholder.svg" },
  ],
};
