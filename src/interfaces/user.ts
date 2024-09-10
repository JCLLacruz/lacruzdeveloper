// src/interfaces/user.ts

// Definición de los tipos de usuario
export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest'; // Ejemplo de roles de usuario
  }
  
  // Definición de un tipo de acción para Redux
  export interface UserAction {
    type: string;
    payload: User;
  }
  