const axios = require('axios');

async function fetchData() {

    try {
        const url = 'https://online.woolworthsteambank.com.au/OpenBanking/cds-au/v1/banking/products?effective=CURRENT&product-category=RESIDENTIAL_MORTGAGES'
        const response = await axios.get(url, {
            headers: {
                'x-v': '3',
                'Accept': 'application/json', // Replace with the correct media type
                'Content-Type': 'application/json; charset=utf-8'
            },
        });
        console.log(response.data.data)
    } catch (error) {
        if(error.response){
            console.log(error.response.data.errors)
        }else{
            console.log(error);
        }
    }
}

fetchData();

// const axios = require('axios');

// const url = 'https://api.auswidebank.com.au/openbanking/cds-au/v1/banking/products?effective=CURRENT&product-category=RESIDENTIAL_MORTGAGES';

// const config = {
//   method: 'get',
//   url: url,
//   headers: {
//     'x-v': '3',
//     'Accept': 'application/json', // Replace with the correct media type
//     'Content-Type': 'application/json; charset=utf-8',
//   }, // Set the timeout value in milliseconds (e.g., 5000 for 5 seconds)
// };

// axios(config)
//   .then((response) => {
//     // Handle the response
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Handle the error
//     console.error(error);
//   });