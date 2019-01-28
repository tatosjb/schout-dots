class Api::V1::ScoutsController < ApplicationController
  def index
    @scouts = Scout.all

    render json: @scouts, each_serializer: ScoutsSerializer, status: :ok
  end
end
