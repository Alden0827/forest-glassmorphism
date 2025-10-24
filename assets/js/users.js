document.addEventListener('DOMContentLoaded', function () {
    const users = [
        { id: 1, name: 'John Doe', role: 'admin', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, name: 'Jane Smith', role: 'editor', avatar: 'https://i.pravatar.cc/150?img=2' },
        { id: 3, name: 'Peter Jones', role: 'viewer', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: 4, name: 'Mary Williams', role: 'admin', avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: 5, name: 'David Brown', role: 'editor', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 6, name: 'Susan Davis', role: 'viewer', avatar: 'https://i.pravatar.cc/150?img=6' },
        { id: 7, name: 'Michael Miller', role: 'admin', avatar: 'https://i.pravatar.cc/150?img=7' },
        { id: 8, name: 'Linda Wilson', role: 'editor', avatar: 'https://i.pravatar.cc/150?img=8' },
        { id: 9, name: 'Robert Moore', role: 'viewer', avatar: 'https://i.pravatar.cc/150?img=9' },
        { id: 10, name: 'Patricia Taylor', role: 'admin', avatar: 'https://i.pravatar.cc/150?img=10' },
    ];

    const userGrid = document.getElementById('userGrid');
    const searchInput = document.getElementById('userSearchInput');
    const roleFilter = document.getElementById('roleFilter');

    function displayUsers(usersToDisplay) {
        userGrid.innerHTML = '';
        usersToDisplay.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.name}">
                <h2>${user.name}</h2>
                <p>${user.role}</p>
            `;
            userGrid.appendChild(userCard);
        });
    }

    function filterUsers() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRole = roleFilter.value;
        const filteredUsers = users.filter(user => {
            const nameMatch = user.name.toLowerCase().includes(searchTerm);
            const roleMatch = selectedRole === 'all' || user.role === selectedRole;
            return nameMatch && roleMatch;
        });
        displayUsers(filteredUsers);
    }

    searchInput.addEventListener('input', filterUsers);
    roleFilter.addEventListener('change', filterUsers);

    displayUsers(users);
});
