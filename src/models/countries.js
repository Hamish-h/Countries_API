
Const Countries = function (){

}


Countries.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesFormView:submit', (event) => {
    this.handleCountriesSubmit(event.detail):
  })
};

Countries.prototype.getData = function () {
  const url = 'http://https://restcountries.eu/?json'
};
