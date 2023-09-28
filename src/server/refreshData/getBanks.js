const axios = require('axios');
const dbConnect=require("./../../server/dbConnect");
const Bank =require("./../../server/model/bank");

async function fetchData() {
  await dbConnect();

  try {
    const response = await axios.get('https://api.cdr.gov.au/cdr-register/v1/banking/data-holders/brands/summary', {
      headers: {
        'x-v': '1'
      }
    });

    const available_brands = response.data;
    const sorted_brands = available_brands.data.sort((a, b) => a.brandName.localeCompare(b.brandName));

    for (const brand of sorted_brands) {
      // Check if the document exists in the collection
      delete brand.industries;
      const existingDocument = await Bank.findOne({ dataHolderBrandId: brand.dataHolderBrandId,interimId:brand.interimId });
      
      if (existingDocument) {
        // console.log("existing", brand, existingDocument);
        await Bank.updateOne({ _id: existingDocument._id },brand);
        // Update the existing document with the modified brand object
    
      } else {
        // console.log("new", brand);
        await Bank.create( brand);
       
      }
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();