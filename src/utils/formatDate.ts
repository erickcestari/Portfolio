export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("En", {
    dateStyle: "long",
  });