document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementsByTagName('body')[0];

  const h1 = document.createElement('h1');
  h1.textContent = 'Dog List';

  const dogContainer = document.createElement('div');
  dogContainer.id = 'dog-container';
  dogContainer.appendChild(h1);

  body.appendChild(dogContainer);

  fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
      const breeds = data.message;
      for (let breed in breeds) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
          .then((response) => response.json())
          .then((data) => {
            const dogItem = document.createElement('div');
            dogItem.classList.add('dog-item');

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = data.message;

            const h2 = document.createElement('h2');
            h2.textContent = breed;

            const subBreedDiv = document.createElement('div');
            subBreedDiv.classList.add('sub-breed');

            const ul = document.createElement('ul');
            breeds[breed].slice(0, 3).forEach((subbreed) => {
              const li = document.createElement('li');
              li.textContent = subbreed;
              ul.appendChild(li);
            });
            subBreedDiv.appendChild(ul);

            imageContainer.appendChild(img);
            imageContainer.appendChild(subBreedDiv);
            dogItem.appendChild(imageContainer);
            dogItem.appendChild(h2);

            dogContainer?.appendChild(dogItem);
          });
      }
    });
});
