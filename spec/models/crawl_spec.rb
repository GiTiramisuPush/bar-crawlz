require 'rails_helper'

RSpec.describe Crawl, type: :model do

  let(:user) { User.create email: 'our@test.com', password: '123456', password_confirmation: '123456' }
  #crawl = Crawl.create title: 'dev-confrence', user_id: 5

  it 'should have a valid title' do
    crawl = Crawl.create user_id: 5
    expect(crawl.errors[:title]).to include "can't be blank"
  end

  it 'should have a valid user_id' do
    crawl = Crawl.create title: 'dev-confrence'
    expect(crawl.errors[:user_id]).to include "can't be blank"
  end

end
