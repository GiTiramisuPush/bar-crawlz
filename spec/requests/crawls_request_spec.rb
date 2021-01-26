require 'rails_helper'

RSpec.describe "Crawls", type: :request do
    
    let(:user) { User.create email: 'our@test.com', password: '123456', password_confirmation: '123456' }

    # --index--
    it 'gets all the crawls' do
        Crawl.create title: 'dev-conference', user_id: 5

        get '/editbarcrawl'
end
