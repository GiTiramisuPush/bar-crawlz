require 'rails_helper'

RSpec.describe "Bars", type: :request do
    let(:user) { User.create email: 'our@test.com', password: '123456', password_confirmation: '123456' }
    let(:crawl) { Crawl.create title: 'Adventure', user: user }

    # # --index bars--
    #     it 'gets all the bars' do
    #         Bar.create
    #             yelp_id: 'hk496783', 
    #             name: 'Billys Bar', 
    #             image_url: 'https://www.picturehere.com/', 
    #             categories: 'bars all', 
    #             rating: 3.9, 
    #             address1: '42 WayBad ave.', 
    #             city: 'San Clemente', 
    #             zip_code: '98030', 
    #             country: 'USA', 
    #             display_address: '42 WayBad Ave', 
    #             phone: '+16158429207', 
    #             display_phone: '1(615)842-9207'
            
    #         get '/bars'
    it 'Adds a bar to a crawl' do
        bar_params = {
            bar: {
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
            crawl_id: crawl.id
        }
    
    post '/bars', params: bar_params
    bar = Bar.first
    expect(bar.yelp_id).to eq 'ahfasdf23'
    # expect(bar.user_id).to eq user.id
    expect(response).to have_http_status(200)
    end


end
