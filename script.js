const shippingItems = [
  'Aged Blue Moon Wine', 'Blue Moon Wine', 'Aegis Elixir', 'Ancient Fiber',
  'Armor Elixir', 'Barbarian Elixir', 'Bearberry', 'Conch', 'Dewdrop Berry',
  'Diamond Flower', 'Dried Sand Dollar', 'Ferngill Primrose', 'Four-Leaf Clover',
  'Galdoran Gem', 'Golden Ocean Flower', 'Goldenrod', 'Gravity Elixir',
  'Green Mushroom', 'Haste Elixir', 'Hero Elixir', 'Honey Jar', 'Lightning Elixir',
  'Monster Fruit', 'Monster Mushroom', 'Mushroom Colony', 'Nectarine', 'Pear',
  'Persimmon', 'Poison Mushroom', 'Rafflesia', 'Red Baneberry', 'Rusty Blade',
  'Salal Berry', 'Slime Berry', 'Sports Drink', 'Stamina Capsule', 'Swirl Stone',
  'Thistle', 'Void Pebble', 'Void Root', 'Void Shard', 'Void Soul',
  'Winter Star Rose', 'Yarn'
];

const encodeFile = name => encodeURIComponent(`${name.replaceAll(' ', '_')}.png`);
const itemPage = name => `https://stardew-valley-expanded.fandom.com/wiki/${encodeURIComponent(name.replaceAll(' ', '_'))}`;
const fileUrl = name => `https://stardew-valley-expanded.fandom.com/wiki/Special:Redirect/file/${encodeFile(name)}`;
const saved = JSON.parse(localStorage.getItem('sve-shipping-checklist') || '{}');
const rows = document.getElementById('rows');
const items = shippingItems.map((name, index) => ({ id: `sve-ship-${index}`, name, image: fileUrl(name), page: itemPage(name) }));

function render() {
  const query = search.value.toLowerCase();
  rows.innerHTML = '';
  items
    .filter(item => item.name.toLowerCase().includes(query))
    .forEach(item => {
      if (checkedRows.checked && !saved[item.id]) return;
      const tr = document.createElement('tr');
      tr.className = saved[item.id] ? 'done' : '';
      tr.innerHTML = `<td><input type="checkbox" ${saved[item.id] ? 'checked' : ''} data-id="${item.id}"></td><td><img class="icon" src="${item.image}" alt="${item.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.replaceWith(document.createTextNode('Image unavailable'))"></td><td>${item.name}</td><td>${saved[item.id] ? 1 : 0}</td><td><a href="${item.page}">SVE Wiki</a></td>`;
      rows.appendChild(tr);
    });
  updateStats();
}

function updateStats() {
  const done = items.filter(item => saved[item.id]).length;
  complete.textContent = done;
  total.textContent = items.length;
  remaining.textContent = items.length - done;
  const percent = Math.round((done / items.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}

rows.addEventListener('change', event => {
  if (!event.target.matches('input[type=checkbox]')) return;
  saved[event.target.dataset.id] = event.target.checked;
  if (!event.target.checked) delete saved[event.target.dataset.id];
  if (saveToggle.checked) localStorage.setItem('sve-shipping-checklist', JSON.stringify(saved));
  render();
});

[search, checkedRows].forEach(element => element.addEventListener('input', render));
toggleAll.addEventListener('click', () => {
  const shouldCheck = items.some(item => !saved[item.id]);
  items.forEach(item => shouldCheck ? saved[item.id] = true : delete saved[item.id]);
  localStorage.setItem('sve-shipping-checklist', JSON.stringify(saved));
  render();
});
themeSelect.addEventListener('change', event => document.body.classList.toggle('light', event.target.value === 'light'));
stickyToggle.addEventListener('change', event => sideNav.classList.toggle('sticky', event.target.checked));
widthRange.addEventListener('input', event => {
  page.style.maxWidth = `${event.target.value}px`;
  sideNav.style.maxWidth = `${event.target.value}px`;
});
render();
