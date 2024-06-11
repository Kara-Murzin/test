// Создаем объект с товарами
   const products = [
    { image: 'assets/T120.210.11.041.00_R.png.avif', title: 'Product 1', favorite: true, price: '10.00' },
    { image: 'assets/T120.210.11.041.00_R.png.png', title: 'Product 2', favorite: false, price: '20.00' },
    { image: 'assets/T120.417.17.041.00_R.png.avif', title: 'Product 3', favorite: true, price: '30.00' },
    { image: 'assets/T122.423.11.033.00_R.png.avif', title: 'Product 4', favorite: false, price: '40.00' },
    { image: 'assets/T122.423.11.033.00_R.png.png', title: 'Product 5', favorite: true, price: '50.00' },
    { image: 'assets/T129.410.16.013.00_R_1.png.png', title: 'Product 6', favorite: false, price: '60.00' },
    { image: 'assets/T137.410.11.041.00_R_1.png.avif', title: 'Product 7', favorite: true, price: '70.00' },
    { image: 'assets/T137.410.11.041.00_R_1.png.avif', title: 'Product 8', favorite: false, price: '80.00' },
    { image: 'assets/T137.410.11.041.00_R_1.png.png', title: 'Product 9', favorite: true, price: '90.00' },
    { image: 'assets/T137.410.11.091.01_R_1.png', title: 'Product 10', favorite: false, price: '100.00' }
];
const container = document.getElementById('product-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.image;

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = product.title;

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = `$${product.price}`;

    const favorite = document.createElement('div');
    favorite.classList.add('favorite');
    favorite.classList.add(product.favorite ? 'true' : 'false');

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(favorite);

    container.appendChild(card);
});