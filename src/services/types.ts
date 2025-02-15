export interface MovieResponse {
  id: string; // UUID del recurso
  title: string; // Título de la película
  description: string; // Descripción de la película
  movieUrl: string; // URL de la película
  genre: string[]; // Array de géneros
  releaseDate: string; // Fecha de lanzamiento en formato ISO 8601
  rating: number; // Calificación de la película
  runtime: number; // Duración en minutos
  posterUrl: string; // URL del póster
  cast: string[]; // Array de nombres del elenco
  directors: string[]; // Array de nombres de directores
  writers: string[]; // Array de nombres de escritores
}

export interface CreateMovieDto {
  title: string;
  description: string;
  movieUrl: string;
  genre: string[];
  releaseDate: string;  // Usar string para el formulario, luego convertir a Date
  rating: number;
  runtime: number;
  posterUrl?: string;
  cast: string[];
  directors: string[];
  writers: string[];
}