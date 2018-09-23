class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :breed_id
      t.text :content
      t.string :creator
      t.string :reply_to

      t.timestamps
    end
  end
end
