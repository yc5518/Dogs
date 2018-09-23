class Api::V1::BreedsController < ApplicationController
  def index
    render json: Breed.all
  end

  private

  def breed_params
    params.require(:fruit).permit(:id, :name, :img_url, :likes)
  end
end