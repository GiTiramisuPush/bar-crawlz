

const mockBars = [
// Bar1
        {
        id:1,
        yelp_id: "eGhOLzFFIhrvF6QjSSpJsg",
        alias: "phils-bbq-san-diego-2",
        name: "Phil's BBQ",
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/IijLAPbkYwMrvcMgNo_8vw/o.jpg",
        url: "https://www.yelp.com/biz/phils-bbq-san-diego-2?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        categories: [
                {
                  alias: "Sports Bars",
                  title: "Sports Bars"
                }
              ],
        rating: 4.5,
        address1: "3750 Sports Arena Blvd",
        address2: "",
        address3: "",
        city: "San Diego",
        zip_code: "92110",
        country: "US",
        state: "CA",
        display_address: "3750 Sports Arena Blvd, San Diego, CA 92110",
        phone: "+16192266333",
        display_phone: "(619) 226-6333",
        },
// Bar2
        {
        id:2,
        yelp_id: "J55fX2Gs-ry0XNCnEDiLNQ",
        alias: "donut-bar-san-diego",
        name: "Donut Bar",
        image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/-83lj_J9zeSX2FXmIRV5JQ/o.jpg",
        url: "https://www.yelp.com/biz/donut-bar-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        categories: [
                {
                  alias: "Cocktail Bars",
                  title: "Cocktail Bars"
                }
              ],
        rating: 4.0,
        address1: "631 B St",
        address2: null,
        address3: "",
        city: "San Diego",
        zip_code: "92101",
        country: "US",
        state: "CA",
        display_address:"631 B St,San Diego, CA 92101",
        phone: "+16192556360",
        display_phone: "(619) 255-6360",
        },
// Bar3
        {
        id:3,
        yelp_id: "VuR1rTb3XpOr8z0r8jC3eg",
        alias: "great-maple-hillcrest-san-diego",
        name: "Great Maple - Hillcrest",
        image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/n4BIvf30ZFKpS9GV0mc_tQ/o.jpg",
        url: "https://www.yelp.com/biz/great-maple-hillcrest-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        categories: [
                {
                  alias: "Whiskey Bars",
                  title: "Whiskey Bars"
                }
              ],
        rating: 4.0,
        address1: "1451 Washington St",
        address2: "",
        address3: "",
        city: "San Diego",
        zip_code: "92103",
        country: "US",
        state: "CA",
        display_address: "1451 Washington St, San Diego, CA 92103",
        phone: "+16192552282",
        display_phone: "(619) 255-2282",
        },
// Bar4
        {
        id:4,
        yelp_id: "AS--bXkiFStoRkwoLqkJEg",
        alias: "buds-louisiana-cafe-san-diego",
        name: "Bud's Louisiana Cafe",
        image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/JZxUzZxbbsxKbG1bK9Bqhg/o.jpg",
        url: "https://www.yelp.com/biz/buds-louisiana-cafe-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        categories: [
                {
                  alias: "Whiskey Bars",
                  title: "Whiskey Bars"
                }
              ],
        rating: 4.5,
        address1: "4320 Viewridge Ave",
        address2: "Ste A",
        address3: "",
        city: "San Diego",
        zip_code: "92123",
        country: "US",
        state: "CA",
        display_address:"4320 Viewridge Ave,Ste A,San Diego, CA 92123",
        phone: "+18585732837",
        display_phone: "(858) 573-2837",
        },
// Bar5
        {
        id:5,
        yelp_id: "mzLGnmpwtrIgUeplJtmOOw",
        alias: "la-puerta-san-diego",
        name: "La Puerta",
        image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/2A8xgPCHLPtwtpw0mvpVlw/o.jpg",
        url: "https://www.yelp.com/biz/la-puerta-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        rating: 4.0,
        address1: "560 4th Ave",
        address2: "",
        address3: "",
        city: "San Diego",
        zip_code: "92101",
        country: "US",
        state: "CA",
        display_address:"560 4th Ave,San Diego, CA 92101",
        phone: "+16196963466",
        display_phone: "(619) 696-3466",
        },
// Bar6
        {
        id:6,
        yelp_id: "vDGkFSA1waNe_dTRwjxQog",
        alias: "muzita-abyssinian-bistro-san-diego",
        name: "Muzita Abyssinian Bistro",
        image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/2Ugy9bnV8UeSwc_KUKVNaA/o.jpg",
        url: "https://www.yelp.com/biz/muzita-abyssinian-bistro-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        rating: 4.5,
        address1: "4651 Park Blvd",
        address2: "",
        address3: "",
        city: "San Diego",
        zip_code: "92116",
        country: "US",
        state: "CA",
        display_address: "4651 Park Blvd San Diego, CA 92116",
        phone: "+16195467900",
        display_phone: "(619) 546-7900",
        }
]

export default mockBars