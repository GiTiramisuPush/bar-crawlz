require 'rails_helper'

RSpec.describe "Crawls", type: :request do
    
    let(:user) { User.create email: 'our@test.com', password: '123456', password_confirmation: '123456' }
#  ----create ----
    let(:crawl) { Crawl.create title: 'Adventure', user_id: user.id }

# Crawl test

        #--index--
    it 'gets all the crawls' do
        Crawl.create title: 'dev-conference', user: user

        get '/crawls'
        crawls = JSON.parse(response.body)

        expect(crawls.length).to eq 1
        expect(response).to have_http_status(200)
    end

    #     #--Show crawl--
    # it 'gets a single crawl' do
    #     crawl = Crawl.create title: 'dev-conference', user_id: user.id

    #     get "/crawls/#{crawl.id}"
    #     crawlresponse = JSON.parse(response.body)
        
    #     expect(crawlresponse.length).to eq 5
    #     expect(crawlresponse).to have_http_status(200)
    # end


it 'creates a new crawl' do
        crawl_params = {
            crawl:{
                title: 'Adventure',
                user_id: user.id
            }
        }

    post '/crawls', params: crawl_params
    crawl = Crawl.first
    expect(crawl.title).to eq 'Adventure'
    expect(crawl.user_id).to eq user.id
    expect(response).to have_http_status(200)
  end

end
   
        # # -----create-----
        # it 'creates a new crawl' do
        #     crawl_params = {
        #     crawl: {
        #         title: 'Drinks in Solana Beach'
        #         # can this be user like the variable above but also user_id: user.id??
        #         user_id: user.id
        #     }
        #     }
        #     post '/crawls', params: crawl_params
        #     crawl = Crawl.first

        #     expect(crawl.title).to eq 'Drinks in Solana Beach'
        #     expect(response).to have_http_status(200)
        # end

