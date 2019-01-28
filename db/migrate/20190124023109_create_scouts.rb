class CreateScouts < ActiveRecord::Migration[5.2]
  def change
    create_table :scouts do |t|
      t.string :name
      t.string :registration
      t.integer :section

      t.timestamps
    end
  end
end
