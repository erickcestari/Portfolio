export const parseTitleHref = (title: string) =>
  title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();