const CountriesFormView = require('./views/countries_info_view.js');
const CountriesMenuView = require('./views/countries_menu_view.js');
const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countriesMenu = document.querySelector('#countries');
  console.log('#countries');

  const countriesMenuView = new CountriesFormView(countriesMenu);
  countriesMenuView.bindEvents();

});
