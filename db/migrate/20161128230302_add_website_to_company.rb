class AddWebsiteToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :website, :string
  end
end
