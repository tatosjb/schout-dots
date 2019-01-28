class CreateScoreMovements < ActiveRecord::Migration[5.2]
  def change
    create_table :score_movements do |t|
      t.integer :quantity
      t.references :scout, foreign_key: true

      t.timestamps
    end
  end
end
