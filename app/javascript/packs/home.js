/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'home' %> (and
// <%= stylesheet_pack_tag 'home' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Svelte!</div> at the bottom of the page.

import Home from '../pages/home.svelte'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Home({
    target: document.getElementById("home").innerHTML,
    props: {
      name: 'Svelte'
    }
  });

  window.app = app;
})

