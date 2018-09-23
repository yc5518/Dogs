Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :breeds, only: [:index]
      resources :comments, only: [:index, :create]
    end
  end
  root to: 'home#index'
end