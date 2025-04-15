async function register() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/profile`;
  
    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      if (!response.ok) {
        throw new Error(`Something went wrong when fetching data: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('data: ', data);
        } catch (error) {
      console.log('Error: ', error);
        }
  
  }
(document.getElementById('formRegister') as HTMLFormElement)
.addEventListener('submit', async (e) => {
  e.preventDefault();

  console.log('submit');
  await register();
});