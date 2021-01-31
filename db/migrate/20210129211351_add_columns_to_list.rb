class AddColumnsToList < ActiveRecord::Migration[6.1]
  def change
    add_column :bars, :url, :string
  end
end
