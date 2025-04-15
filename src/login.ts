(document.getElementById('formLogin') as HTMLFormElement)

async function login() {
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;

  const url = `${import.meta.env.VITE_BACKEND_URL}/api/login`;
  console.log('url: ', url);

  try {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
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


(document.getElementById('formLogin') as HTMLFormElement)
.addEventListener('submit', async (e) => {
  e.preventDefault();

  console.log('submit');
  await login();
});


