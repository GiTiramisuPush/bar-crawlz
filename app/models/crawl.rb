class Crawl < ApplicationRecord
    # Associations
    belongs_to :user
    has_many :crawl_bars
    has_many :bars, through: :crawl_bars
    # Validations
    validates :title, :user_id, presence: true
end
