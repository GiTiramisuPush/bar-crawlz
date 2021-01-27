require 'rails_helper'

RSpec.describe "Bars", type: :request do
    let(:user) { User.create email: 'our@test.com', password: '123456', password_confirmation: '123456' }
    let(:crawl) { Crawl.create title: 'Adventure', user: user }

    it 'creates the bar and associates it to the correct crawl' do
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
            crawl: {
                id: crawl.id
            }
        }
    
    post '/bars', params: bar_params
    bar = Bar.first
    expect(bar.yelp_id).to eq 'ahfasdf23'
    crawl2 = Crawl.find(crawl.id)
    expect(crawl2.bars.first.id).to eq bar.id
    expect(response).to have_http_status(200)
    end

    it 'deletes the bar and its associate to the crawl' do
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
            crawl: {
                id: crawl.id
            }
        }
    
    post '/bars', params: bar_params
    bar = Bar.first
    delete "/bars/#{bar.id}"
    bars = Bar.all
    expect(bars).to be_empty
    expect(response).to have_http_status(200)
    end

end