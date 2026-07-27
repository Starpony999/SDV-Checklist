const shippingItems = [
  'Magma Cap',
  'Bone Fragment',
  'Radioactive Ore',
  'Radioactive Bar',
  'Ancient Fiber',
  'Bearberry',
  'Conch',
  'Birch Water',
  'Butter',
  'Butternut Squash',
  'Camel Wool',
  'Cucumber',
  'Diamond Flower',
  'Sand Dollar',
  'Ferngill Primrose',
  'Fir Wax',
  'Gold Carrot',
  'Gold Slime Egg',
  'Golden Goose Egg',
  'Golden Ocean Flower',
  'Goldenrod',
  'Goose Egg',
  'Goose Mayonnaise',
  'Green Mushroom',
  'Honey Jar',
  'Four Leaf Clover',
  'Magic Lamp',
  'Mega Purple Mushroom',
  'Monster Fruit',
  'Monster Mushroom',
  'Mushroom Colony',
  'Nectarine',
  'Pear',
  'Persimmon',
  'Poison Mushroom',
  'Red Baneberry',
  'Rusty Blade',
  'Salal Berry',
  'Shark Tooth',
  'Slime Berry',
  'Sludge',
  'Rafflesia',
  'Supernatural Goo',
  'Swamp Essence',
  'Swamp Flower',
  'Sweet Potato',
  'Swirl Stone',
  'Thistle',
  'Void Pebble',
  'Void Root',
  'Void Shard',
  'Void Soul',
  'Winter Star Rose',
  'Yarn'
];
const categoryFor = (name, modded) => {
  if (modded && /Elixir|Wine|Drink|Capsule|Honey Jar|Yarn/.test(name)) return 'SVE goods';
  if (modded && /Shard|Soul|Pebble|Blade|Stone|Gem|Ancient Fiber/.test(name)) return 'SVE loot';
  if (modded) return 'SVE forage & crops';
  if (/Egg|Milk|Cheese|Wool|Mayonnaise|Roe|Wine|Beer|Juice|Pickles|Jelly|Honey|Oil|Cloth|Syrup|Raisins|Dried|Smoked|Caviar/.test(name)) return 'Animal & artisan';
  if (/Ore|Bar|Wood|Stone|Clay|Coal|Quartz|Shard|Fiber|Sap|Battery|Bone|Bug|Slime|Wing|Essence/.test(name)) return 'Resources';
  return 'Crops & forage';
};
const emojiFor = name => ({Wine:'🍷',Elixir:'🧪',Mushroom:'🍄',Berry:'🫐',Egg:'🥚',Milk:'🥛',Cheese:'🧀',Flower:'🌼',Rose:'🌹',Fruit:'🍎',Ore:'⛏️',Bar:'🔶',Wood:'🪵',Stone:'🪨',Fish:'🐟',Honey:'🍯',Tea:'🍵',Coffee:'☕',Yarn:'🧶',Blade:'⚔️',Shard:'💎',Soul:'🔥'})[Object.keys({Wine:1,Elixir:1,Mushroom:1,Berry:1,Egg:1,Milk:1,Cheese:1,Flower:1,Rose:1,Fruit:1,Ore:1,Bar:1,Wood:1,Stone:1,Fish:1,Honey:1,Tea:1,Coffee:1,Yarn:1,Blade:1,Shard:1,Soul:1}).find(k=>name.includes(k))] || '📦';
const items = shippingItems.map((name, index)=>({name, modded:true, id:`ship-${index}`, category: categoryFor(name, true)}));
const saved = JSON.parse(localStorage.getItem('sve-shipping-checklist') || '{}');
const rows = document.getElementById('rows');
function render(){
  const query = search.value.toLowerCase();
  rows.innerHTML = '';
  items.filter(item => item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)).forEach(item => {
    if (checkedRows.checked && !saved[item.id]) return;
    const tr = document.createElement('tr');
    tr.className = `${saved[item.id] ? 'done' : ''} ${spoilers.checked && item.modded ? 'spoiler' : ''}`;
    tr.innerHTML = `<td><input type="checkbox" ${saved[item.id] ? 'checked' : ''} data-id="${item.id}"></td><td class="icon">${emojiFor(item.name)}</td><td class="name">${item.name}</td><td>${saved[item.id] ? 1 : 0}</td><td>${item.category}</td>`;
    rows.appendChild(tr);
  });
  updateStats();
}
function updateStats(){
  const done = items.filter(item => saved[item.id]).length;
  complete.textContent = done;
  total.textContent = items.length;
  remaining.textContent = items.length - done;
  const percent = Math.round((done / items.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}
rows.addEventListener('change', e => {
  if (!e.target.matches('input[type=checkbox]')) return;
  saved[e.target.dataset.id] = e.target.checked;
  if (!e.target.checked) delete saved[e.target.dataset.id];
  if (saveToggle.checked) localStorage.setItem('sve-shipping-checklist', JSON.stringify(saved));
  render();
});
[search, checkedRows, spoilers].forEach(el => el.addEventListener('input', render));
toggleAll.addEventListener('click', () => { const shouldCheck = items.some(item => !saved[item.id]); items.forEach(item => shouldCheck ? saved[item.id] = true : delete saved[item.id]); localStorage.setItem('sve-shipping-checklist', JSON.stringify(saved)); render(); });
themeSelect.addEventListener('change', e => document.body.classList.toggle('light', e.target.value === 'light'));
stickyToggle.addEventListener('change', e => sideNav.classList.toggle('sticky', e.target.checked));
widthRange.addEventListener('input', e => { page.style.maxWidth = `${e.target.value}px`; sideNav.style.maxWidth = `${e.target.value}px`; });
render();
