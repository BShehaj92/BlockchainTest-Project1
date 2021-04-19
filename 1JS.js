// Fetching data from CoinGeko

function fetchData() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response=> {
        if (!response.ok) {
            throw Error("ERROR!");
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        const html = data
        .map(coin => {
            return  '<div class="coin"> <p><img src= ' + coin.image + ' alt=" " /> </p>' + '<p>Name :' + coin.name + '</p>' + '<p>Symbol : '+ coin.symbol + '</p>'+ '<p>Price : €'+ coin.current_price + ' </p>'        
        }).join("");
        console.log(html);
        document
          .querySelector("#app")
          .insertAdjacentHTML("afterbegin", html );
    })
    .catch(error => {
        console.log(error);
    });
}

fetchData(); 



