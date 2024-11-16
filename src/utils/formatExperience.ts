export const formatExperience = (startDate: Date, lang: string): string => {
  const start = new Date(startDate);
  const end = new Date();
  let diff = end.getTime() - start.getTime();

  const getTimeDifference = (timeUnit: number): number => Math.floor(diff / timeUnit);

  const units = [
    { name: 'year', ms: 1000 * 60 * 60 * 24 * 365 },
    { name: 'month', ms: 1000 * 60 * 60 * 24 * 30 },
    { name: 'day', ms: 1000 * 60 * 60 * 24 },
    { name: 'hour', ms: 1000 * 60 * 60 },
    { name: 'minute', ms: 1000 * 60 },
    { name: 'second', ms: 1000 },
  ];

  const results = units.map((unit, index) => {
    const value = getTimeDifference(unit.ms);
    diff -= value * unit.ms;
    return { ...unit, value };
  });

  const formatResults = (results: { name: string; value: number }[]): string => {
    const filteredResults = results.filter(result => result.value > 0);

    switch (lang) {
      case 'pt': {
        const parts = filteredResults.map(({ value, name }) => {
          const unitPt: Record<string, string> = {
            year: value === 1 ? 'ano' : 'anos',
            month: value === 1 ? 'mês' : 'meses',
            day: value === 1 ? 'dia' : 'dias',
            hour: value === 1 ? 'hora' : 'horas',
            minute: value === 1 ? 'minuto' : 'minutos',
            second: value === 1 ? 'segundo' : 'segundos',
          };
          return `${value} ${unitPt[name]}`;
        });

        if (parts.length > 1) {
          const lastPart = parts.pop();
          return `${parts.join(', ')} e ${lastPart}`;
        }

        return parts[0] || 'Menos de um segundo';
      }

      case 'en': {
        const parts = filteredResults.map(({ value, name }) => {
          const unitEn: Record<string, string> = {
            year: 'year',
            month: 'month',
            day: 'day',
            hour: 'hour',
            minute: 'minute',
            second: 'second',
          };
          return `${value} ${unitEn[name]}${value !== 1 ? 's' : ''}`;
        });

        if (parts.length > 1) {
          const lastPart = parts.pop();
          return `${parts.join(', ')} and ${lastPart}`;
        }

        return parts[0] || 'Less than a second';
      }

      default:
        throw new Error(`Unsupported language: ${lang}`);
    }
  };

  return formatResults(results);
};
