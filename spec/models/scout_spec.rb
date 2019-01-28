require 'rails_helper'

RSpec.describe Scout, type: :model do
  it { should define_enum_for(:section).with_values([:cub, :boy, :senior, :pioneer, :boss]) }
  it { should have_many(:score_movements) }
end
