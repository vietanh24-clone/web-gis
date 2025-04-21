var map = L.map('map').setView([21.0285, 105.8542], 13); // Vị trí Hà Nội, Việt Nam

// Thêm lớp bản đồ từ OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Thêm một marker vào bản đồ
L.marker([21.0285, 105.8542]).addTo(map)
  .bindPopup('Hà Nội, Việt Nam')
  .openPopup();
