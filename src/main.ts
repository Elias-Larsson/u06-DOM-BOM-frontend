import './style.css';

document.querySelector<HTMLDivElement>('nav')!.innerHTML = `
   <img
        src="public/lootboxlogo.svg"
        alt="lootbox logo"
        class="text-white text-2xl font-bold">
      <img src="public/iconamoon_profile-fill.svg" alt="profile icon">
`;

const form = document.getElementById('formLogin') as HTMLFormElement;


async function Login() {
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;

  const url = `${import.meta.env.VITE_API_URL}/api/login`;
  // const url = `http://localhost:3003/api/login`;
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

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  console.log('submit');
  await Login();
});

