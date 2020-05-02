const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = $('#itemName').val();
    const item = {
        text,
        done : false
    };
    this.reset();
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    //console.log(item);
};

addItems.addEventListener('submit', addItem);

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    items[el.dataset.index].done = !items[el.dataset.index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  populateList(items, itemsList);
  itemsList.addEventListener('click', toggleDone);