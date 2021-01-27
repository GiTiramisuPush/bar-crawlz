# Seeds for Bars and Crawls

# Creating a User named Filippo!
users = [
    {email: 'filippo@gmail.com', password: '123456', password_confirmation: '123456'},
    {email: 'summer@gmail.com', password: '123456', password_confirmation: '123456'},
    {email: 'ryan@gmail.com', password: '123456', password_confirmation: '123456'}
]

# Creating Crawls
crawls =[ 
    {title: "Miss Piggy's Adventure", user_id: 1},
    {title: "Night in PB", user_id: 2},  
    {title: "Fancy Downtown", user_id: 3}, 
    {title: "Only Sushi", user_id: 3} 
]    
# Creating Bars

bars = [
    {
    yelp_id: 'ahfasdf23', 
    name: 'Bills bar', 
    image_url: 'https://wwee.com', 
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
    name: 'Jones bar', 
    image_url: 'https://www.google.com/imfeelinglucky', 
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
    }

]

    # crawl: {id: crawl.id}

    users.each do |attr|
        User.create attr
        puts "creating user: #{attr}"
end
    crawls.each do |attr|
        Crawl.create attr
        puts "creating crawl: #{attr}"
end
    bars.each do |attr|
        Bar.create attr
        puts "creating bar: #{attr}"

end
