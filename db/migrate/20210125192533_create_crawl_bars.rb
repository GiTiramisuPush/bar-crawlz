class CreateCrawlBars < ActiveRecord::Migration[6.1]
  def change
    create_table :crawl_bars do |t|
      t.references :bar
      t.references :crawl

      t.timestamps
    end
  end
end
