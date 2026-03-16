export interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  language: string;
  status: string;
  network?: {
    name: string;
  };
}