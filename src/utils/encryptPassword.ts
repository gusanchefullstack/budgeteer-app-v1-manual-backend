import bcrypt from "bcrypt";


// Función para hacer hash de una password
export async function hashPassword(plainPassword: string): Promise<string> {
  try {
    // El número de salt rounds (entre 10-12 es recomendado para producción)
    const saltRounds = 12;
    
    // bcrypt.hash() es asíncrono y devuelve una Promise
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    
    return hashedPassword;
  } catch (error) {
    throw new Error(`Error al hacer hash de la password: ${error}`);
  }
}

// Función para verificar una password
export async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
  try {
    // bcrypt.compare() compara la password plana con el hash
    const isPasswordValid = await bcrypt.compare(plainPassword, hashedPassword);
    
    return isPasswordValid;
  } catch (error) {
    throw new Error("Credenciales inválidas");
  }
}
