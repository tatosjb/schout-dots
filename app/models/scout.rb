class Scout < ApplicationRecord
  enum section: [:cub, :boy, :senior, :pioneer, :boss]
  has_many :score_movements

  def score
    score_movements.sum(:quantity)
  end
end
