const url = " https://api.weatherapi.com/v1/current.json?key=485c1438aead4ac1894132431250307&q=Kanpur";

let weather = async() => {
    const response = await fetch(url);
    const data = await response.json();
 
    console.log(data.location);
    console.log(data.current);
    
    
}
//weather();