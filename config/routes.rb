Explorer::Application.routes.draw do
  devise_for :users
  root to: 'maps#index', as: 'explorer_home'
  get '/yelp' => "maps#yelp"

  post '/save', to: 'maps#save'

  get '/favorite', to: 'maps#favorite'

  get '/show/cities', to: 'maps#show_cities'

  post '/send', to: 'maps#send_yelp'

end
