class Bar < ApplicationRecord
    # Associations
    has_many :crawls, through: :crawl_bars
    has_many :crawl_bars
    # Validations
    validates :yelp_id, :name, :image_url, :categories, :rating, :address1, :city, :zip_code, :country, :display_address, :phone, :display_phone, presence: true
end
