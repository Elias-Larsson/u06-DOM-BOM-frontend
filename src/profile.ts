async function deleteProfile() {

}

async function editProfile() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const url = `${import.meta.env.VITE_BACKEND_URL}/api/profile`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
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


(document.getElementById('toggleModal') as HTMLFormElement)
.addEventListener('click', async (e) => {
    e.preventDefault();
    const modal = document.getElementById('modal') as HTMLDivElement;
    modal.classList.replace('hidden', 'flex');
});

(document.getElementById('submit') as HTMLFormElement)
.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log('submit');
  await editProfile();
});