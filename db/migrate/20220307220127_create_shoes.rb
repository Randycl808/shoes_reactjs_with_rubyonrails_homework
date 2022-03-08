class CreateShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :shoes do |t|
      t.string :text
      t.float :stars
      t.string :brand

      t.timestamps
    end
  end
end
