class CreateBars < ActiveRecord::Migration[6.1]
  def change
    create_table :bars do |t|
      t.string :yelp_id
      t.string :name
      t.string :image_url
      t.string :categories
      t.float :rating
      t.string :address1
      t.string :address2
      t.string :address3
      t.string :city
      t.string :zip_code
      t.string :country
      t.string :state
      t.string :display_address
      t.string :phone
      t.string :display_phone

      t.timestamps
    end
  end
end
