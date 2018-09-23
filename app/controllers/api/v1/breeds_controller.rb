class Api::V1::BreedsController < ApplicationController
  def index
    render json: Breed.all
  end

  def update
    breed = Breed.find(params[:id])
    breed.update_attributes(breed_params)
    render json: breed
  end


  private

  def breed_params
    params.require(:fruit).permit(:id, :name, :img_url, :likes)
  end
end