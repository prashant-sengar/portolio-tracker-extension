const stocks = "HDFCBANK.NS,TATAPOWER.NS,IRCTC.NS,RELIANCE.NS" //add the stocks in your portfolio
const api_host = "https://yfapi.net/v6/finance/quote?symbols="
const api_key =  "xxxxx" //Add your api_key here
fetch(api_host + stocks,
{
headers : {
    "x-api-key" : api_key
}
}) 
.then(data => data.json())
.then(articleData => {

    var gains = articleData.quoteResponse.result.filter(obj => obj.regularMarketChange > 0)
    var losses = articleData.quoteResponse.result.filter(obj => obj.regularMarketChange < 0)

    var html = '<span style = "font-size:20px;font-weight:bold;text-align:center">Gainers </span><img style ="width:25px;height:25px" src="../static/images/gain.png"/><br/>';
    gains.forEach(obj => {
        html = html + '<p style = "color:#188038;">' + 
                        obj.shortName + '  <img style = "width:10px;height:10px" src="../static/images/increase.png"/>  ' + obj.regularMarketPrice + 
                        '(' + parseFloat(obj.regularMarketChangePercent).toFixed(2) + '%)</p><hr/>'
    });
    html = html + '<span style = "font-size:20px;font-weight:bold;align:center">Losers </span><img style ="width:25px;height:25px" src="../static/images/loss.png"/><br/>';
    losses.forEach(obj => {
        html = html + '<p style="color:red;">' + 
                        obj.shortName + '  <img style = "width:10px;height:10px" src="../static/images/decrease.png"/>  ' + obj.regularMarketPrice +
                        '(' + parseFloat(obj.regularMarketChangePercent).toFixed(2) + '%)</p><hr/>'
    });        

    
    const htmlElement = document.getElementById('htmlElement');

    htmlElement.innerHTML = html;
    })
.catch(error => {
    const htmlElement = document.getElementById('htmlElement');
    htmnlElement.innerHTML = error;
    console.log(error); 
    }
    );