export enum GebruikerStatus {
  active = 'Active',
  inactive = 'Inactive',
}

export interface Gebruiker {
  id: number;
  name: string;
  status: GebruikerStatus;
  email: string;
}
