class Crawl < ApplicationRecord
    # Associations
    belongs_to :user
    has_many :CrawlBar
    has_many :bars, through: :CrawlBar
    # Validations
    validates :title, :user_id, presence: true
end
