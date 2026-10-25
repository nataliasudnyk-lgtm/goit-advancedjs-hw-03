
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const searchButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  // Prevent empty search requests.
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });

    return;
  }

  // Clear previous results and display the loader.
  clearGallery();
  showLoader();
  searchButton.disabled = true;

  getImagesByQuery(query)
    .then(data => {
      // Handle empty search results.
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      // Render the images returned by Pixabay.
      createGallery(data.hits);
    })
    .catch(error => {
      // Handle failed HTTP requests.
      iziToast.error({
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
    })
    .finally(() => {
      // Hide the loader after the request finishes.
      hideLoader();
      searchButton.disabled = false;
    });
}
