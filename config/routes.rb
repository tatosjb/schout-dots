Rails.application.routes.draw do
  use_doorkeeper
  devise_for :users

  root to: 'rank#root'

  scope module: :api, defaults: { format: :json }, path: 'api' do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :scouts, only: :index

      devise_for :users, controllers: {
        registrations: 'api/v1/users/registrations'
      }, skip: [:sessions, :password]
    end
  end
end
