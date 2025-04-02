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

const computeYearlyOnTheWhich = (data: Model, rruleObj: Partial<Options>) => {
  // Vérifier que nous sommes bien dans une règle annuelle (freq=0) avec byweekday et bysetpos définis
  if (rruleObj.freq !== 0 || !rruleObj.byweekday || !rruleObj.bysetpos) {
    // S'assurer que la valeur par défaut est toujours un tableau
    return Array.isArray(data.repeat.yearly.onThe.which) 
      ? data.repeat.yearly.onThe.which 
      : [data.repeat.yearly.onThe.which];
  }

  // Convertir bysetpos en tableau pour traitement uniforme
  const bysetposArray = asArray(rruleObj.bysetpos);

  // Toujours retourner un tableau de valeurs textuelles, même pour une seule valeur
  return bysetposArray.map(convertBysetposToString);
};

export default computeYearlyOnTheWhich;
