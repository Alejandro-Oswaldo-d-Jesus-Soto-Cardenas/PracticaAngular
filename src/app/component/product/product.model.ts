// Modelo de producto
// Define la estructura de cada producto
export interface Product {
  name: string;
  description: string;
  price: number; // Cambia a number | null si permites valores nulos
  image: string;
  category: string;
  quantity: number; // Cambia a number | null si permites valores nulos
}