let container = document.querySelector('.container');
let wrapper = document.querySelector('.wrapper');
let imgUrls = document.querySelector('.URL');
let titles = document.querySelector('.title');
let populars = document.querySelector('.popular');
let Regions = document.querySelector('.Region');
let capitals = document.querySelector('.Capital');
let addBTN = document.querySelector('button');
let search = document.querySelector('.search');
let wrapperCard = document.querySelector('.wrappers');

let arr = [
    {
        imgURL: './1280px-Flag_of_Germany.svg (11).png',
        title: 'Germany',
        popular: '81,770,900',
        Region: 'Europe',
        Capital: 'Berlin'
    },
    {
        imgURL: './1280px-Flag_of_Germany.svg (12).png',
        title: 'United States of America',
        popular: '323,947,000',
        Region: 'Americas',
        Capital: 'Washington, D.C.'
    },
    {
        imgURL: '1280px-Flag_of_Germany.svg (14).png',
        title: 'Brazil',
        popular: '206,135,893',
        Region: 'Americas',
        Capital: 'Brasília'
    },
    {
        imgURL: '1280px-Flag_of_Germany.svg (19).png',
        title: 'Iceland',
        popular: '334,300',
        Region: 'Europe',
        Capital: 'Reykjavík'
    },
    {
        imgURL: '1280px-Flag_of_Germany.svg (15).png',
        title: 'Afghanistan',
        popular: '27,657,145',
        Region: 'Asia',
        Capital: 'Kabul'
    },
    {
        imgURL: './1280px-Flag_of_Germany.svg (16).png',
        title: 'Åland Islands',
        popular: '28,875',
        Region: 'Europe',
        Capital: 'Mariehamn'
    },
    {
        imgURL: './1280px-Flag_of_Germany.svg (17).png',
        title: 'Albania',
        popular: '2,886,026',
        Region: 'Europe',
        Capital: 'Tirana'
    },
    {
        imgURL: './1280px-Flag_of_Germany.svg (18).png',
        title: 'Algeria',
        popular: '40,400,000',
        Region: 'Africa',
        Capital: 'Algiers'
    },
];

let ReadFun = (filteredArr = arr) => {
    wrapperCard.innerHTML = ''; // Clear previous content
    filteredArr.forEach((country) => {
        // Create a card div
        let card = document.createElement('div');
        card.className = 'card';

        // Create an image element
        let img = document.createElement('img');
        img.src = country.imgURL;
        img.alt = `${country.title} Flag`;

        // Create a title element
        let title = document.createElement('h3');
        title.textContent = country.title;

        // Create a population element
        let population = document.createElement('p');
        population.textContent = `Population: ${country.popular}`;

        // Create a region element
        let region = document.createElement('p');
        region.textContent = `Region: ${country.Region}`;

        // Create a capital element
        let capital = document.createElement('p');
        capital.textContent = `Capital: ${country.Capital}`;

        // Append all elements to the card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(population);
        card.appendChild(region);
        card.appendChild(capital);

        // Append the card to the wrapper
        wrapperCard.appendChild(card);
    });
};

let addFun = () => {
    // Create a new card object
    let newCard = {
        imgURL: imgUrls.value,
        title: titles.value,
        popular: populars.value,
        Region: Regions.value,
        Capital: capitals.value
    };

    // Add the new card to the array
    arr.push(newCard);

    // Call ReadFun to update the display
    ReadFun();

    // Clear the input fields
    imgUrls.value = '';
    titles.value = '';
    populars.value = '';
    Regions.value = '';
    capitals.value = '';
};

addBTN.addEventListener('click', addFun);

search.addEventListener('input', (e) => {
    e.preventDefault();
    const searchTerm = search.value.toLowerCase();
    const filteredArr = arr.filter((v) => v.title.toLowerCase().includes(searchTerm));
    ReadFun(filteredArr);
});

ReadFun();