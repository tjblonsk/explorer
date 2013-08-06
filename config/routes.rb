Explorer::Application.routes.draw do
  devise_for :users
  root to: 'maps#index', as: 'explorer_home'
  get '/yelp' => "maps#yelp"
end
