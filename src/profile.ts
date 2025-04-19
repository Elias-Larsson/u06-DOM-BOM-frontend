function getCookie(cookie: string) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)' + cookie + '=([^;]*)'));
    return match ? match[2] : null;
  }
  
async function deleteProfile() {
    
}

async function editProfile() {
    try {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        const token = getCookie('token');
        console.log('token: ', token);

        const url = `${import.meta.env.VITE_BACKEND_URL}/api/profile`;
        console.log('url: ', url);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            console.log('token: ', token);
            throw new Error(`Something went wrong when fetching data: ${response.status}`);

        }
        

        const data = await response.json();
        console.log('data: ', data);
    } catch (error) {
        console.log('Error: ', error);
    }   
}

(document.getElementById('toggleModal') as HTMLFormElement)
.addEventListener('click', async (e) => {
    e.preventDefault();
    const modal = document.getElementById('modal') as HTMLDivElement;
    modal.classList.replace('hidden', 'flex');

});

(document.getElementById('formEdit') as HTMLFormElement)
.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit');
  await editProfile();
});