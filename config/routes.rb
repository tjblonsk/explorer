Explorer::Application.routes.draw do
  devise_for :users
  root to: 'map#index'

end
