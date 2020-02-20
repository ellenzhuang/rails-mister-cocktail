class RemoveReferencesFromDoses < ActiveRecord::Migration[5.2]
  def change
    remove_reference(:doses, :cocktail, foreign_key: true)
    remove_reference(:doses, :ingredient, foreign_key: true)
  end
end
