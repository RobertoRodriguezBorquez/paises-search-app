export interface Country {
  cca2: string; // Código de país de dos letras
  flag: string; // Emoji de la bandera
  flagsSvg: string; // URL de la bandera en formato SVG

  name: string; // Nombre común del país
  capital: string[]; // Capital del país
  population: number; // Población del país
  region: string; // Región del país
  subregion: string; // Subregión del país
}
