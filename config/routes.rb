Rails.application.routes.draw do
  devise_for :users

  root to: 'rank#root'

  namespace :api do
    namespace :v1 do
      resources :scouts, only: :index

      devise_for :users, controllers: {
        sessions: 'api/v1/users/sessions'
      }
    end
  end
end
