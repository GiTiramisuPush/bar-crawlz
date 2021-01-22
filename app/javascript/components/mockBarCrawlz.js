// Crawls have: title, user_id
// Bars have: yelp_id, name, image_url, url, rating, address1, address2, address3, city, zip_code, country,state, display_address, phone, crawl_id

//   Crawl:
// id:
// title
// user_id

// crawl_id: 1,


// BAR

// 1	id	integer
// 2	yelp_id	string
// 3	name	string
// 4	image-url	string
// 5	url	string
// 6	rating	float
// 7	address1	string
// 8	address2	string
// 9	address3	string
// 10 city	string
// 11 zip_code	integer
// 12 country	string
// 13 state	string
// 14 display_address
// 15 phone string
// 16 display_phone
// 17 crawl_id

// user_id:1
// bar_id:1

const mockBarCrawlz = [

    {
    //   Crawl: 1, User 1, Bar 1
        id: 1,
        title: "Night in downtown",
        user_id: 1,

    //   Bars:

        id:1,
        yelp_id: "mQnqJvSIiAMrSMqLeNbbVg",
        name: "Sherman Hops",
        image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/6PqsvP2e0BzPHjdcCfO77Q/o.jpg",
        url: "https://www.yelp.com/biz/sherman-hops-los-angeles?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        rating: 5.0,
        address1: "14311 Ventura Blvd",
        address2: "",
        address3: null,
        city: "Los Angeles",
        zip_code: "91423",
        country: "US",
        state: "CA",
        display_address:  "14311 Ventura Blvd", "Los Angeles, CA 91423",
        phone: "+18582373991",
        display_phone: "(619) 226-6333",
        // crawl_id:1,
    },

    {
    //   Crawl: 1, User 1, Bar 2
        id: 1,  //generated id crawl_id?
        title: "Night in downtown",
        user_id: 1,

        {
        id:2,
        yelp_id: "eGhOLzFFIhrvF6QjSSpJsg",
        alias: "phils-bbq-san-diego-2",
        name: "Phil's BBQ",
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/IijLAPbkYwMrvcMgNo_8vw/o.jpg",
        url: "https://www.yelp.com/biz/phils-bbq-san-diego-2?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
        rating: 4.5,
        address1: "3750 Sports Arena Blvd",
        address2: "",
        address3: "",
        city: "San Diego",
        zip_code: "92110",
        country: "US",
        state: "CA",
        display_address: "3750 Sports Arena Blvd","San Diego, CA 92110",
        phone: "+16192266333",
        display_phone: "(619) 226-6333",
        // crawl_id:1,
      },

        {

    //   Crawl: 2, User 1, Bar 1
        id: 2,
        title: "Fancy Night",
        user_id: 1,

        // Bar2
        id:3,
        yelp_id: "J55fX2Gs-ry0XNCnEDiLNQ",
        alias: "donut-bar-san-diego",
        name: "Donut Bar",
        image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/-83lj_J9zeSX2FXmIRV5JQ/o.jpg",
        url: "https://www.yelp.com/biz/donut-bar-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
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
        crawl_id:2,
        },

        {
        //   Crawl: 2, User 1, Bar 2
        id: 3,
        title: "Fancy Night",
        user_id: 1,

        // Bar3
                {
                id:4,
                yelp_id: "VuR1rTb3XpOr8z0r8jC3eg",
                alias: "great-maple-hillcrest-san-diego",
                name: "Great Maple - Hillcrest",
                image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/n4BIvf30ZFKpS9GV0mc_tQ/o.jpg",
                url: "https://www.yelp.com/biz/great-maple-hillcrest-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
                rating: 4.0,
                address1: "1451 Washington St",
                address2: "",
                address3: "",
                city: "San Diego",
                zip_code: "92103",
                country: "US",
                state: "CA",
                display_address: "1451 Washington St", "San Diego, CA 92103",
                phone: "+16192552282",
                display_phone: "(619) 255-2282",
                crawl_id: 2
                },

                {
                //   Crawl: 2, User 1, Bar 2
                id: 3,
                title: "Fancy Night",
                user_id: 1,

                // Bar3
                        {
                        id:4,
                        yelp_id: "VuR1rTb3XpOr8z0r8jC3eg",
                        alias: "great-maple-hillcrest-san-diego",
                        name: "Great Maple - Hillcrest",
                        image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/n4BIvf30ZFKpS9GV0mc_tQ/o.jpg",
                        url: "https://www.yelp.com/biz/great-maple-hillcrest-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
                        rating: 4.0,
                        address1: "1451 Washington St",
                        address2: "",
                        address3: "",
                        city: "San Diego",
                        zip_code: "92103",
                        country: "US",
                        state: "CA",
                        display_address: "1451 Washington St", "San Diego, CA 92103",
                        phone: "+16192552282",
                        display_phone: "(619) 255-2282",
                        crawl_id: 2
                        },









]

export default mockBarCrawlz
