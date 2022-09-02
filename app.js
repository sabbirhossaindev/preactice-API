const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json(res);
    displayPhones(data.data);
};

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';
    // display phone 10 only.........
    phones = phones.slice(0, 10);
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100 p-4">
        <h5 class="card-title text-center mb-2 text-danger">${phone.brand}</h5>
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-primary">${phone.phone_name}</h5>
          <p class="card-text text-secondary">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
};

// 
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
});

loadPhones()