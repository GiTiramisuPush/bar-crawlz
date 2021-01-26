# Seeds for Bars and Crawls

# Creating a User named Filippo!
user = User.create email: 'Filippo@test.com', password: '123456', password_confirmation: '123456'

# Creating Crawl
crawl = [
  {
    title: "Miss Piggy's Adventure",
    user_id: user.id
    ## exactly how do we seed our data if it is all through relationships?
    bars: [
        # {
            # "businesses": [
                { #Bar One
                    "id": "WURI4gui8qm4yOc9G45yjQ",
                    # "alias": "the-sro-lounge-san-diego",
                    "name": "The SRO Lounge",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/cJ0sI7YODqZpxZ86UYJhVQ/o.jpg",
                    # "is_closed": false,
                    "url": "https://www.yelp.com/biz/the-sro-lounge-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
                    # "review_count": 105,
                    "categories": [
                        {
                            "alias": "gaybars",
                            "title": "Gay Bars"
                        }
                    ],
                    "rating": 4.0,
                    # "coordinates": {
                    #     "latitude": 32.7242581,
                    #     "longitude": -117.1600803
                    # },
                    # "transactions": [],
                    # "price": "$",
                    "location": {
                        "address1": "1807 5th Ave",
                        "address2": "",
                        "address3": "",
                        "city": "San Diego",
                        "zip_code": "92101",
                        "country": "US",
                        "state": "CA",
                        "display_address": [
                            "1807 5th Ave",
                            "San Diego, CA 92101"
                        ]
                    },
                    "phone": "+16192321886",
                    "display_phone": "(619) 232-1886",
                    # "distance": 7390.386281141023,
                    crawl_id: crawl.id
                },
                ## Bar Two
                {
                    "id": "ylTk1YnBe4tRg1O0JN02iA",
                    # "alias": "catalina-lounge-san-diego",
                    "name": "Catalina Lounge",
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/VUfm3tQX7h1YEM5qsfQChA/o.jpg",
                    # "is_closed": false,
                    "url": "https://www.yelp.com/biz/catalina-lounge-san-diego?adjust_creative=q8w7wKNQ1Uxq2hK-ANhusw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=q8w7wKNQ1Uxq2hK-ANhusw",
                    # "review_count": 133,
                    "categories": [
                        {
                            "alias": "divebars",
                            "title": "Dive Bars"
                        }
                    ],
                    "rating": 4.0,
                    # "coordinates": {
                    #     "latitude": 32.7439174,
                    #     "longitude": -117.2348568
                    # },
                    # "transactions": [],
                    # "price": "$",
                    "location": {
                        "address1": "4202 Voltaire St",
                        "address2": "",
                        "address3": "",
                        "city": "San Diego",
                        "zip_code": "92107",
                        "country": "US",
                        "state": "CA",
                        "display_address": [
                            "4202 Voltaire St",
                            "San Diego, CA 92107"
                        ]
                    },
                    "phone": "+16192244979",
                    "display_phone": "(619) 224-4979",
                    # "distance": 9162.349980361589,
                    crawl_id: crawl.id
                },
                #next bars goes here
            ]
    ]
  },
]

  crawl.each do |attr|
    Crawl.create attr
    puts "creating crawl: #{attr}"

  end

# a crawl contains:
#   t.string "title"
#   t.integer "user_id"