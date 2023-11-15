export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "medium",
  });