export interface DBUser {
  id?: number;
  name: string;
  email?: string;
  birthday?: string;
  phone_number?: string;
  address?: string;
  age?: number;
  status?: {
    color: string;
    label: string;
  };
  modules?: [{ id: number; name: string; history: string }];
}

export interface DBCompanyProfile {
  id?: number;
  name: string;
  modules?: string[];
}
