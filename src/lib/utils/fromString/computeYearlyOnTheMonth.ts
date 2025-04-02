import { Options } from "rrule";
import { MONTHS } from "../../constants/index";
import { Model } from "../Model";
import { asArray } from "../asArray";

const computeYearlyOnTheMonth = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
    // S'assurer que la valeur par défaut est toujours un tableau
    return Array.isArray(data.repeat.yearly.onThe.month) 
      ? data.repeat.yearly.onThe.month 
      : [data.repeat.yearly.onThe.month];
  }
  
  // Sortie anticipée si bymonth n'est pas défini
  if (!rruleObj.bymonth) {
    return Array.isArray(data.repeat.yearly.onThe.month) 
      ? data.repeat.yearly.onThe.month 
      : [data.repeat.yearly.onThe.month];
  }
  
  // Convertir bymonth en tableau pour traitement uniforme
  const bymonthArray = asArray(rruleObj.bymonth);
  
  // Convertir chaque nombre de mois en nom de mois (Jan, Feb, etc.)
  return bymonthArray.map(monthNum => MONTHS[monthNum - 1]);
};

export default computeYearlyOnTheMonth;
