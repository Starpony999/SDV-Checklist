const checklistData = {
  shipping: {
    storageKey: 'sve-shipping-checklist',
    idPrefix: 'sve-ship',
    sourceLabel: 'SVE Wiki',
    completedLabel: 'Ship Amount',
    items: [
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
    ]
  },
  recipes: {
    storageKey: 'sve-recipes-checklist',
    idPrefix: 'sve-recipe',
    sourceLabel: 'Recipe Wiki',
    completedLabel: 'Source',
    items: [
      'Baked Berry Oatmeal',
      'Baked Potato',
      'Big Bark Burger',
      'Birch Syrup',
      'Candy',
      'Cheese Charcuterie',
      'Chocolate Truffle Bar',
      'Fish Dumpling',
      'Flower Cookie',
      'Frog Legs',
      'Gingerbread Man',
      'Glazed Butterfish',
      'Glazed Pear',
      'Grilled Cheese Sandwich',
      'Ice Cream Sundae',
      'Mixed Berry Pie',
      'Mushroom Berry Rice',
      'Nectarine Fruit Bread',
      'Pineapple Custard Crepe',
      'Prismatic Pop',
      'Ramen',
      'Seaweed Salad',
      'Stuffed Persimmon',
      'Vegan Cone',
      'Void Delight',
      'Void Salmon Sushi'
    ],
    sources: {
      'Baked Berry Oatmeal': 'Bear Shop',
      'Baked Potato': 'Gunther Mail 3+ Hearts',
      'Big Bark Burger': 'Stardrop Saloon',
      'Birch Syrup': 'Pierre’s Shop',
      'Candy': 'Stardrop Saloon',
      'Cheese Charcuterie': 'Scarlett Mail 3+ Hearts',
      'Chocolate Truffle Bar': 'Traveling Merchant @ Festival of Ice',
      'Fish Dumpling': 'Olivia Mail 3+ Hearts',
      'Flower Cookie': 'Bear Shop',
      'Frog Legs': 'Adventurer’s Guild',
      'Gingerbread Man': 'Susan Mail Winter',
      'Glazed Butterfish': 'Stardrop Saloon',
      'Glazed Pear': 'Morgan Mail 3+ Hearts',
      'Grilled Cheese Sandwich': 'Martin Mail 3+ Hearts',
      'Ice Cream Sundae': 'Pierre @ Luau',
      'Mixed Berry Pie': 'Stardrop Saloon',
      'Mushroom Berry Rice': 'Adventurer’s Guild',
      'Nectarine Fruit Bread': 'Claire Mail 3+ Hearts',
      'Pineapple Custard Crepe': 'Lance Mail 3+ Hearts',
      'Prismatic Pop': 'Stardew Valley Fair',
      'Ramen': 'Victor Mail 3+ Hearts',
      'Seaweed Salad': 'Willy’s Shop',
      'Stuffed Persimmon': 'Andy Mail 3+ Hearts',
      'Vegan Cone': 'Oasis',
      'Void Delight': 'Krobus Shop',
      'Void Salmon Sushi': 'Krobus Shop'
    }
  },
    crafting: {
    storageKey: 'sve-crafting-checklist',
    idPrefix: 'sve-crafting',
    sourceLabel: 'Crafting Wiki',
    completedLabel: 'Source',
    items: [
      'Armor Elixir',
      'Bombardier Elixir',
      'Haste Elixir',
      'Hero Elixir',
      'Marsh Tonic',
      'Seed Cookie',
      'Hedge Fence',
      'Small Hardwood Fence',
      'Butter Churner',
      'Yarn Spooler',
      'Sun Totem',
      'Wind Totem'
    ],
    sources: {
      'Armor Elixir': 'Combat Level 7',
      'Bombardier Elixir': 'Combat Level 9',
      'Haste Elixir': 'Combat Level 8',
      'Hero Elixir': 'Combat Level 9',
      'Marsh Tonic': 'Henchman 4 Hearts',
      'Seed Cookie': 'Foraging Level 3',
      'Hedge Fence': 'Farming Level 6',
      'Small Hardwood Fence': 'Default',
      'Butter Churner': 'Farming Level 3',
      'Yarn Spooler': 'Farming Level 9',
      'Sun Totem': 'Foraging Level 9',
      'Wind Totem': 'Foraging Level 9'
    },
    ingredients: {
      'Armor Elixir': 'Solar Essence (50), Void Soul (5), Bone Fragment (30), Vinegar (1)',
      'Bombardier Elixir': 'Solar Essence (30), Void Essence  (30), Void Soul (10), Void Pebble (20), Bomb  (5)',
      'Haste Elixir': 'Void Essence (50), Void Soul (5), Spicy Eel (3), Sugar  (1)',
      'Hero Elixir': 'Slime (50), Void Soul (5), Void Pebble (10), Oil  (1)',
      'Marsh Tonic': 'Slime (30), Swamp Essence (15), Swamp Flower (10), Sugar (1)',
      'Seed Cookie': 'Birch Seed (1), Fir Cone (1), Acorn (1), Maple Seed (1), Pine Cone (1)',
      'Hedge Fence': 'Fiber (3), Wood (1)',
      'Small Hardwood Fence': 'Hardwood (1)',
      'Butter Churner': 'Wood (25), Stone (25), Frozen Tear (1), Iron Bar (1)',
      'Yarn Spooler': 'Hardwood (25), Battery Pack (1), Fir Wax (1), Pine Tar (1)',
      'Sun Totem': 'Hardwood (1), Solar Essence (10), Birch Water (1)',
      'Wind Totem': 'Hardwood (1), Bat Wing (10), Fir Wax (1)'
    }
  }
};

const pageKey = page.dataset.checklist || 'shipping';
const checklist = checklistData[pageKey];
const encodeFile = name => encodeURIComponent(`${name.replaceAll(' ', '_')}.png`);
const itemPage = name => `https://stardew-valley-expanded.fandom.com/wiki/${encodeURIComponent(name.replaceAll(' ', '_'))}`;
const fileUrl = name => `https://stardew-valley-expanded.fandom.com/wiki/Special:Redirect/file/${encodeFile(name)}`;
const saved = JSON.parse(localStorage.getItem(checklist.storageKey) || '{}');
const rows = document.getElementById('rows');
const items = checklist.items.map((name, index) => ({
  id: `${checklist.idPrefix}-${index}`,
  name,
  image: fileUrl(name),
  page: itemPage(name),
  source: checklist.sources?.[name]
}));

function render() {
  const query = search.value.toLowerCase();
  rows.innerHTML = '';
  items
    .filter(item => item.name.toLowerCase().includes(query))
    .forEach(item => {
      if (checkedRows.checked && !saved[item.id]) return;
      const tr = document.createElement('tr');
      tr.className = saved[item.id] ? 'done' : '';
      const progressCell = item.source || (saved[item.id] ? 1 : 0);
      const wikiCell = item.source ? '' : `<td><a href="${item.page}">${checklist.sourceLabel}</a></td>`;
      tr.innerHTML = `<td><input type="checkbox" ${saved[item.id] ? 'checked' : ''} data-id="${item.id}"></td><td><img class="icon" src="${item.image}" alt="${item.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.replaceWith(document.createTextNode('Image unavailable'))"></td><td>${item.name}</td><td>${progressCell}</td>${wikiCell}`;
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
  if (saveToggle.checked) localStorage.setItem(checklist.storageKey, JSON.stringify(saved));
  render();
});

[search, checkedRows].forEach(element => element.addEventListener('input', render));
toggleAll.addEventListener('click', () => {
  const shouldCheck = items.some(item => !saved[item.id]);
  items.forEach(item => shouldCheck ? saved[item.id] = true : delete saved[item.id]);
  localStorage.setItem(checklist.storageKey, JSON.stringify(saved));
  render();
});
themeSelect.addEventListener('change', event => document.body.classList.toggle('light', event.target.value === 'light'));
stickyToggle.addEventListener('change', event => sideNav.classList.toggle('sticky', event.target.checked));
widthRange.addEventListener('input', event => {
  page.style.maxWidth = `${event.target.value}px`;
  sideNav.style.maxWidth = `${event.target.value}px`;
});
render();
