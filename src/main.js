import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = 'YOUR_PIXABAY_API_KEY';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');

const fetchImages = async query => {
  loader.classList.remove('hidden');
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: '4506270433fd3c82d061d20576d8c3095',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    if (response.status !== 200) {
      console.error('Błąd: Nieudane żądanie', response.status);
      return [];
    }

    return response.data.hits;
  } catch (error) {
    console.error('Something went wrong. Please try again', error);
    return [];
  } finally {
    loader.classList.add('hidden');
  }
};

const renderImages = images => {
  gallery.innerHTML = '';
  if (images.length === 0) {
    iziToast.info({
      title: 'No Results',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  const markup = images
    .map(
      image => `
    <li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }
  const images = await fetchImages(query);
  renderImages(images);
});
