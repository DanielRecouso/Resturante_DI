var map = L.map("map").setView([42.0696, 9.0129], 10);

L.tileLayer(
  "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=mbzxJx6hByFr4Kru0n2N",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);
var marker = L.marker([42.0696, 9.0129]).addTo(map);


