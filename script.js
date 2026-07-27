const vanilla = `Wild Horseradish,Daffodil,Leek,Dandelion,Parsnip,Cave Carrot,Coconut,Cactus Fruit,Banana,Sap,Large Egg (white),Egg (white),Egg (brown),Large Egg (brown),Milk,Large Milk,Green Bean,Cauliflower,Potato,Garlic,Kale,Rhubarb,Melon,Tomato,Morel,Blueberry,Fiddlehead Fern,Hot Pepper,Wheat,Radish,Red Cabbage,Starfruit,Corn,Unmilled Rice,Eggplant,Artichoke,Pumpkin,Bok Choy,Yam,Chanterelle,Cranberries,Holly,Beet,Ostrich Egg,Salmonberry,Amaranth,Pale Ale,Hops,Void Egg,Mayonnaise,Duck Mayonnaise,Void Mayonnaise,Clay,Copper Bar,Iron Bar,Gold Bar,Iridium Bar,Refined Quartz,Honey,Pickles,Jelly,Beer,Wine,Juice,Poppy,Copper Ore,Iron Ore,Coal,Gold Ore,Iridium Ore,Wood,Stone,Nautilus Shell,Coral,Rainbow Shell,Spice Berry,Sea Urchin,Grape,Spring Onion,Strawberry,Sweet Pea,Common Mushroom,Wild Plum,Hazelnut,Blackberry,Winter Root,Crystal Fruit,Snow Yam,Sweet Gem Berry,Crocus,Red Mushroom,Sunflower,Purple Mushroom,Cheese,Goat Cheese,Cloth,Truffle,Truffle Oil,Coffee Bean,Goat Milk,Large Goat Milk,Wool,Duck Egg,Duck Feather,Caviar,Rabbit's Foot,Aged Roe,Ancient Fruit,Mead,Tulip,Summer Spangle,Fairy Rose,Blue Jazz,Apple,Green Tea,Apricot,Orange,Peach,Pomegranate,Cherry,Bug Meat,Hardwood,Maple Syrup,Oak Resin,Pine Tar,Slime,Bat Wing,Solar Essence,Void Essence,Fiber,Battery Pack,Dinosaur Mayonnaise,Roe,Squid Ink,Tea Leaves,Ginger,Taro Root,Pineapple,Mango,Cinder Shard,Magma Cap,Bone Fragment,Radioactive Ore,Radioactive Bar,Smoked Fish,Moss,Mystic Syrup,Raisins,Dried Fruit,Dried Mushrooms,Carrot,Summer Squash,Broccoli,Powdermelon`.split(',');
const expanded = `Aged Blue Moon Wine,Blue Moon Wine,Aegis Elixir,Ancient Fiber,Armor Elixir,Barbarian Elixir,Bearberry,Conch,Dewdrop Berry,Diamond Flower,Dried Sand Dollar,Ferngill Primrose,Four-Leaf Clover,Galdoran Gem,Golden Ocean Flower,Goldenrod,Gravity Elixir,Green Mushroom,Haste Elixir,Hero Elixir,Honey Jar,Lightning Elixir,Monster Fruit,Monster Mushroom,Mushroom Colony,Nectarine,Peach Sapling,Pear,Persimmon,Poison Mushroom,Rafflesia,Red Baneberry,Rusty Blade,Salal Berry,Slime Berry,Sports Drink,Stamina Capsule,Swirl Stone,Thistle,Void Pebble,Void Root,Void Shard,Void Soul,Winter Star Rose,Yarn`.split(',');
const categoryFor = (name, modded) => {
  if (modded && /Elixir|Wine|Drink|Capsule|Honey Jar|Yarn/.test(name)) return 'SVE goods';
  if (modded && /Shard|Soul|Pebble|Blade|Stone|Gem|Ancient Fiber/.test(name)) return 'SVE loot';
  if (modded) return 'SVE forage & crops';
  if (/Egg|Milk|Cheese|Wool|Mayonnaise|Roe|Wine|Beer|Juice|Pickles|Jelly|Honey|Oil|Cloth|Syrup|Raisins|Dried|Smoked|Caviar/.test(name)) return 'Animal & artisan';
  if (/Ore|Bar|Wood|Stone|Clay|Coal|Quartz|Shard|Fiber|Sap|Battery|Bone|Bug|Slime|Wing|Essence/.test(name)) return 'Resources';
  return 'Crops & forage';
};
const emojiFor = name => ({Wine:'🍷',Elixir:'🧪',Mushroom:'🍄',Berry:'🫐',Egg:'🥚',Milk:'🥛',Cheese:'🧀',Flower:'🌼',Rose:'🌹',Fruit:'🍎',Ore:'⛏️',Bar:'🔶',Wood:'🪵',Stone:'🪨',Fish:'🐟',Honey:'🍯',Tea:'🍵',Coffee:'☕',Yarn:'🧶',Blade:'⚔️',Shard:'💎',Soul:'🔥'})[Object.keys({Wine:1,Elixir:1,Mushroom:1,Berry:1,Egg:1,Milk:1,Cheese:1,Flower:1,Rose:1,Fruit:1,Ore:1,Bar:1,Wood:1,Stone:1,Fish:1,Honey:1,Tea:1,Coffee:1,Yarn:1,Blade:1,Shard:1,Soul:1}).find(k=>name.includes(k))] || '📦';
const items = [...vanilla.map(name=>({name, modded:false})), ...expanded.map(name=>({name, modded:true}))].map((item, index)=>({...item, id:`ship-${index}`, category: categoryFor(item.name, item.modded)}));
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
