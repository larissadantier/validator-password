export const validateEmail = (email: string): boolean => {
  if (!email) {
    throw new Error('Necessário um email para a validação');
  }
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.includes('..')) return false;

  if (email.startsWith('.')) return false;

  return regex.test(email);
}