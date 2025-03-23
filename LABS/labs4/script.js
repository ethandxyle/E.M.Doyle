document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jobForm');
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const zipcodeInput = document.getElementById('zipcode');
    const ageInput = document.getElementById('age');
    const phoneInput = document.getElementById('phone');
    const maritalStatusInput = document.getElementById('maritalStatus');
    const infoInput = document.getElementById('info');
    const charCounter = document.getElementById('charCounter');

    function validateAge(age) {
        age = parseInt(age, 10);
        if (isNaN(age)) {
            alert('Please enter a valid number for age.');
            return false;
        }
        if (age < 21 || age > 99) {
            alert('Age must be between 21 and 99.');
            return false;
        }
        return age;
    }

    function validatePhone(phone) {
        phone = phone.replace(/[^\d]/g, '');
        if (phone.length !== 10) {
            alert('Phone number must be 10 digits.');
            return false;
        }
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Format as 111-222-3333
    }

    function validateZipcode(zipcode) {
        const zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zipcode)) {
            alert('Zip code must be a 5-digit number.');
            return false;
        }
        return zipcode;
    }

    function updateCharCounter() {
        const remaining = 30 - infoInput.value.length;
        charCounter.textContent = `${remaining} characters remaining`;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        if (!name) {
            alert('Please enter your full name.');
            return;
        }

        const address = addressInput.value.trim();
        if (!address) {
            alert('Please enter your address.');
            return;
        }

        const city = cityInput.value.trim();
        if (!city) {
            alert('Please enter your city.');
            return;
        }

        const state = stateInput.value.trim();
        if (!state) {
            alert('Please enter your state.');
            return;
        }

        const zipcode = validateZipcode(zipcodeInput.value);
        if (zipcode === false) return;

        const age = validateAge(ageInput.value);
        if (age === false) return;

        const phone = validatePhone(phoneInput.value);
        if (phone === false) return;

        const maritalStatus = maritalStatusInput.value;

        const info = infoInput.value;

        console.log('Form Data Submitted:');
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Zip Code:', zipcode);
        console.log('Age:', age);
        console.log('Phone:', phone);
        console.log('Marital Status:', maritalStatus);
        console.log('More Info:', info);

        form.reset();
    });

    infoInput.addEventListener('input', updateCharCounter);
});
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        {
            name: 'Cheeseburger',
            description: 'A delicious cheeseburger with lettuce, tomato, onion, pickles, ketchup, mustard, and cheese.',
            price: 8.99,
            image: 'https://assets.simpleviewinc.com/simpleview/image/upload/q_75/v1/clients/nmmagazine/legal_tender_05_3912dffb-1e37-449b-bf1d-5a3c3ab248f0.jpg'
        },
        {
            name: 'New York Strip',
            description: 'Tender steak with rich flavor and good marbling.',
            price: 15.99,
            image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/2/23/0/BX1408_Grilled-New-York-Strip-Steaks_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1519403602140.webp'
        },
        {
            name: 'Pizza Margherita',
            description: 'Classic pizza with fresh mozzarella and basil.',
            price: 12.99,
            image: 'https://ca.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1737367039&width=800'
        },
        {
            name: 'Chicken wings',
            description: '10 of our fried and sauced chicken wings.',
            price: 10.49,
            image: 'data:image/jpeg;base64,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'
        },
        {
            name: 'Tacos',
            description: '3 Grilled steak or chicken on flour tortillas.Topped with cheese,lettuce,tomatoes, and sour cream.',
            price: 10.99,
            image: 'https://i.ytimg.com/vi/Z5Vb6cTeUnE/maxresdefault.jpg'
        },
        {
            name: 'Chicken Caesar Wrap',
            description: 'Grilled chicken, cheese, and lettuce wrap serve with a side of caesar salad dressing.',
            price: 8.99,
            image: 'https://www.eatingwell.com/thmb/GhOSNFEvenSAQmv2nZKNK7zNxa0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-Chicken-Caesar-Wrap-hero-1x1-1-b033bb0d47794ebb8754d7640f583f5b.jpg'
        },
        {
            name: 'BEER',
            description: 'Over 20 of your favorite beers on tap.',
            price: 3.99,
            image: 'https://www.clawhammersupply.com/cdn/shop/articles/how_to_make_beer.jpg?v=1730407302&width=1532'
        },
    ];

    let currentIndex = 0;

    const menuName = document.getElementById('menuName');
    const menuDescription = document.getElementById('menuDescription');
    const menuPrice = document.getElementById('menuPrice');
    const menuImage = document.getElementById('menuImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    function updateMenu() {
        const item = menuItems[currentIndex];
        menuName.textContent = item.name;
        menuDescription.textContent = item.description;
        menuPrice.textContent = priceFormatter.format(item.price);
        menuImage.src = item.image;
        menuImage.alt = item.name;
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? menuItems.length - 1 : currentIndex - 1;
        updateMenu();
    }

    function nextImage() {
        currentIndex = (currentIndex === menuItems.length - 1) ? 0 : currentIndex + 1;
        updateMenu();
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    updateMenu();
});
