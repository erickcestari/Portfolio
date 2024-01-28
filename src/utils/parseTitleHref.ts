export const parseTitleHref = (title: string) =>
  title.replace(/[*.?]/g, "")
    .replace(/[áàâãä]/g, "a")
    .replace(/[éèêë]/g, "e")
    .replace(/[íìîï]/g, "i")
    .replace(/[óòôõö]/g, "o")
    .replace(/[úùûü]/g, "u")
    .replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();