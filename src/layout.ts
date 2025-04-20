import './style.css';

document.querySelector<HTMLDivElement>('nav')!.innerHTML = `
   <img
        src="public/lootboxlogo.svg"
        alt="lootbox logo">
      <img src="public/iconamoon_profile-fill.svg" alt="profile icon">
`;

async function getUsers() {
  const url = `${import.meta.env.VITE_BACKEND_URL}/api/profile`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }

    const users = await response.json();

    const usersSection = document.getElementById('users') as HTMLElement;

    usersSection.innerHTML = '';
    users.forEach((user: { name: string }) => {
      const userElement = document.createElement('p');
      userElement.textContent = user.name;
      userElement.classList.add('user-item', 'text-white', 'bg-gray-800', 'm-1', 'p-2', 'rounded', 'mb-2');
      usersSection.appendChild(userElement);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

getUsers();
