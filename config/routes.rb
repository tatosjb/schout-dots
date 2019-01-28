Rails.application.routes.draw do
  root to: "rank#root"

  namespace :api do
    namespace :v1 do
     resources :scouts, only: :index
    end
  end
end
