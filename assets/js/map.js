document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const locations = [
        { id: 1, name: 'Person 1', lat: 51.505, lng: -0.09 },
        { id: 2, name: 'Person 2', lat: 51.51, lng: -0.1 },
        { id: 3, name: 'Person 3', lat: 51.515, lng: -0.08 },
        { id: 4, name: 'Person 4', lat: 51.5, lng: -0.07 },
        { id: 5, name: 'Person 5', lat: 51.505, lng: -0.06 },
        { id: 6, name: 'Person 6', lat: 51.51, lng: -0.05 },
        { id: 7, name: 'Person 7', lat: 51.515, lng: -0.04 },
        { id: 8, name: 'Person 8', lat: 51.5, lng: -0.03 },
        { id: 9, name: 'Person 9', lat: 51.505, lng: -0.02 },
        { id: 10, name: 'Person 10', lat: 51.51, lng: -0.01 },
        { id: 11, name: 'Person 11', lat: 51.515, lng: 0 },
        { id: 12, name: 'Person 12', lat: 51.5, lng: 0.01 },
        { id: 13, name: 'Person 13', lat: 51.505, lng: 0.02 },
        { id: 14, name: 'Person 14', lat: 51.51, lng: 0.03 },
        { id: 15, name: 'Person 15', lat: 51.515, lng: 0.04 },
        { id: 16, name: 'Person 16', lat: 51.5, lng: 0.05 },
        { id: 17, name: 'Person 17', lat: 51.505, lng: 0.06 },
        { id: 18, name: 'Person 18', lat: 51.51, lng: 0.07 },
        { id: 19, name: 'Person 19', lat: 51.515, lng: 0.08 },
        { id: 20, name: 'Person 20', lat: 51.5, lng: 0.09 },
        { id: 21, name: 'Person 21', lat: 51.495, lng: -0.09 },
        { id: 22, name: 'Person 22', lat: 51.49, lng: -0.1 },
        { id: 23, name: 'Person 23', lat: 51.485, lng: -0.08 },
        { id: 24, name: 'Person 24', lat: 51.48, lng: -0.07 },
        { id: 25, name: 'Person 25', lat: 51.495, lng: -0.06 },
        { id: 26, name: 'Person 26', lat: 51.49, lng: -0.05 },
        { id: 27, name: 'Person 27', lat: 51.485, lng: -0.04 },
        { id: 28, name: 'Person 28', lat: 51.48, lng: -0.03 },
        { id: 29, name: 'Person 29', lat: 51.495, lng: -0.02 },
        { id: 30, name: 'Person 30', lat: 51.49, lng: -0.01 },
        { id: 31, name: 'Person 31', lat: 51.485, lng: 0 },
        { id: 32, name: 'Person 32', lat: 51.48, lng: 0.01 },
        { id: 33, name: 'Person 33', lat: 51.495, lng: 0.02 },
        { id: 34, name: 'Person 34', lat: 51.49, lng: 0.03 },
        { id: 35, name: 'Person 35', lat: 51.485, lng: 0.04 },
        { id: 36, name: 'Person 36', lat: 51.48, lng: 0.05 },
        { id: 37, name: 'Person 37', lat: 51.495, lng: 0.06 },
        { id: 38, name: 'Person 38', lat: 51.49, lng: 0.07 },
        { id: 39, name: 'Person 39', lat: 51.485, lng: 0.08 },
        { id: 40, name: 'Person 40', lat: 51.48, lng: 0.09 },
        { id: 41, name: 'Person 41', lat: 51.52, lng: -0.09 },
        { id: 42, name: 'Person 42', lat: 51.525, lng: -0.1 },
        { id: 43, name: 'Person 43', lat: 51.53, lng: -0.08 },
        { id: 44, name: 'Person 44', lat: 51.52, lng: -0.07 },
        { id: 45, name: 'Person 45', lat: 51.525, lng: -0.06 },
        { id: 46, name: 'Person 46', lat: 51.53, lng: -0.05 },
        { id: 47, name: 'Person 47', lat: 51.52, lng: -0.04 },
        { id: 48, name: 'Person 48', lat: 51.525, lng: -0.03 },
        { id: 49, name: 'Person 49', lat: 51.53, lng: -0.02 },
        { id: 50, name: 'Person 50', lat: 51.52, lng: -0.01 },
    ];

    locations.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(location.name)
            .openPopup();
    });
});
