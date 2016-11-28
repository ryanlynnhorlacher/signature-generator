class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :front_desk_phone, null: false
      t.string :image_link

      t.timestamps
    end
  end
end
