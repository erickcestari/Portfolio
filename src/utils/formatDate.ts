export const formatDate = (date: string, lang: string) => {
  return new Date(date).toLocaleDateString(lang, {
    dateStyle: "long",
  });
};
