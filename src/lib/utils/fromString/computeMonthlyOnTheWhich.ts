import { Options } from "rrule";
import { Model } from "../Model";
import { asArray } from "../asArray";

// Fonction de conversion de bysetpos numérique vers valeur "which" textuelle
const convertBysetposToString = (pos: number): string => {
  switch (pos) {
    case 1: return "First";
    case 2: return "Second";
    case 3: return "Third";
    case 4: return "Fourth";
    case -1: return "Last";
    default: return "First";
  }
};

const computeMonthlyOnTheWhich = (data: Model, rruleObj: Partial<Options>) => {
  if (rruleObj.freq !== 1 || !rruleObj.bysetpos) {
    // S'assurer que la valeur par défaut est toujours un tableau
    return Array.isArray(data.repeat.monthly.onThe.which) 
      ? data.repeat.monthly.onThe.which 
      : [data.repeat.monthly.onThe.which];
  }

  // Convertir bysetpos en tableau pour traitement uniforme
  const bysetposArray = asArray(rruleObj.bysetpos);

  // Toujours retourner un tableau de valeurs textuelles, même pour une seule valeur
  return bysetposArray.map(convertBysetposToString);
};

export default computeMonthlyOnTheWhich;
