# Seeds for Users, Bars and Crawls

# Creating a Users!
users = [
    {email: 'filippo@gmail.com', password: '123456', password_confirmation: '123456'},
    {email: 'summer@gmail.com', password: '123456', password_confirmation: '123456'},
    {email: 'ryan@gmail.com', password: '123456', password_confirmation: '123456'}
]

users.each do |attr|
    User.create attr
    puts "creating user: #{attr}"
end

# Creating Bars

bars = [

    {
    yelp_id: 'ahfasdf23', 
    name: 'Bills Bar (Seed 1)', 
    image_url: 'https://images.unsplash.com/photo-1548400636-b8d3a313d209?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80', 
    categories: 'bars all', 
    rating: 3.9, 
    address1: '42 WayBad Ave.', 
    city: 'San Clemente', 
    zip_code: '98034', 
    country: 'USA', 
    display_address: '42 WayBad Ave', 
    phone: '+14089020987', 
    display_phone: '1(408)903-2343'
    },

    {
    yelp_id: 'sdfges', 
    name: 'Jones bar (Seed 2)', 
    image_url: 'https://images.unsplash.com/photo-1516684163977-84cc7de8c7c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
    categories: 'bars all', 
    rating: 4.2, 
    address1: '705 Corsa Place', 
    city: 'Morgan Hill', 
    zip_code: '95037', 
    country: 'USA', 
    display_address: '705 Corsa Place', 
    phone: '+14089020987', 
    display_phone: '1(408)903-2343'
    },

    {
    yelp_id: 'sdhjfksd', 
    name: 'Janes bar', 
    image_url: 'https://wwee.com', 
    categories: 'bars all', 
    rating: 3.9, 
    address1: '225 Adams Av', 
    city: 'San Clemente', 
    zip_code: '98034', 
    country: 'USA', 
    display_address: '225 Adams Av', 
    phone: '+14089020987', 
    display_phone: '1(408)903-2343'
    },

    {
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
    display_address:  "14311 Ventura Blvd, Los Angeles, CA 91423",
    phone: "+18582373991",
    display_phone: "(619) 226-6333"
    },
       
    {
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
    display_address: "3750 Sports Arena Blvd, San Diego, CA 92110",
    phone: "+16192266333",
    display_phone: "(619) 226-6333"
    },
# Bar3
    {
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
    display_phone: "(619) 255-6360"
    },
    # Bar4
    {
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
    display_address: "1451 Washington St, San Diego, CA 92103",
    phone: "+16192552282",
    display_phone: "(619) 255-2282"
    }

]

# crawl: {id: crawl.id}
bars.each do |attr|
    Bar.create attr
    puts "creating bar: #{attr}"
end

# Creating Crawls
crawls =[ 
    {title: "Miss Piggy's Adventure (Seed 1)", user: User.first},
    {title: "Night in PB (Seed 2)", user: User.second },  
    {title: "Fancy Downtown", user: User.last}, 
    {title: "Only Sushi", user: User.last} 
]    

crawls.each do |attr|
    crawl = Crawl.create attr
    crawl.bars = Bar.all
    crawl.save
    puts "creating crawl: #{crawl}"
    puts "crawl bars: #{crawl.bars}"

end
