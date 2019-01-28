require 'rails_helper'

RSpec.describe ScoreMovement, type: :model do
  it { should belong_to(:scout) }
end
