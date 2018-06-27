
Const Countries = function (){

}


Countries.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesFormView:submit', (event) => {
    this.handleCountriesSubmit(event.detail):
  })
};

Countries.prototype.getData = function () {
  const url = 'https://restcountries.eu/rest/v2/all?json'
  request = new Request(url);
  request.get((data) => {
    console.log(data);
    PubSub.publish('CountriesFact:data-ready', data);
  });
};

module.exports = Countries
