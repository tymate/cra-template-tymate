import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

export const ERRORS = {
  REQUIRED: 'Ce champ est requis',
  TAKEN: 'Cette valeur est déjà prise',
  INVALID: 'Cette valeur n’est pas valide',
  EMAIL: 'Cette adresse mail n’est pas valide',
  EMAIL_NOT_FOUND: 'Cette adresse mail n’est pas enregistrée',
};

export const formatDate = (date, frmt) =>
  format(new Date(date), frmt, { locale: fr });
