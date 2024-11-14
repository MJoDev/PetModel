export const login = async (email, password) => {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login fallido. Verifica tus credenciales');
    }
  
    const data = await response.json();
    return data.token;
};