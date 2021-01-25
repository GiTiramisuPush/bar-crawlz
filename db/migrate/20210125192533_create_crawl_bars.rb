class CreateCrawlBars < ActiveRecord::Migration[6.1]
  def change
    create_table :crawl_bars do |t|
      t.reference :bar
      t.reference :crawl

      t.timestamps
    end
  end
end
