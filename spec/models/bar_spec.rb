require 'rails_helper'

RSpec.describe Bar, type: :model do

  let(:user) { User.create email: 'our@test.com', password: '123456', password_confirmation: '123456' }
  #bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'

  it 'should have a valid yelp_id' do
    bar = Bar.create name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:yelp_id]).to include "can't be blank"
  end

  it 'should have a valid name' do
    bar = Bar.create yelp_id: 'hk496783', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:name]).to include "can't be blank"
  end

  it 'should have a valid image_url' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:image_url]).to include "can't be blank"
  end

  it 'should have a valid categories' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:categories]).to include "can't be blank"
  end

  it 'should have a valid rating' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:rating]).to include "can't be blank"
  end

  it 'should have a valid address1' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:address1]).to include "can't be blank"
  end

  it 'should have a valid city' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:city]).to include "can't be blank"
  end

  it 'should have a valid zip_code' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:zip_code]).to include "can't be blank"
  end

  it 'should have a valid country' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', display_address: '42 WayBad Ave', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:country]).to include "can't be blank"
  end

  it 'should have a valid display_address' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', phone: '+16158429207', display_phone: '1(615)842-9207'
    expect(bar.errors[:display_address]).to include "can't be blank"
  end

  it 'should have a valid phone' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', display_phone: '1(615)842-9207'
    expect(bar.errors[:phone]).to include "can't be blank"
  end

  it 'should have a valid display_phone' do
    bar = Bar.create yelp_id: 'hk496783', name: 'Billys Bar', image_url: 'https://www.picturehere.com/', categories: 'bars all', rating: 3.9, address1: '42 WayBad ave.', city: 'San Clemente', zip_code: '98030', country: 'USA', display_address: '42 WayBad Ave', phone: '+16158429207'
    expect(bar.errors[:display_phone]).to include "can't be blank"
  end

end
