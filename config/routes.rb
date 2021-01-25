Rails.application.routes.draw do  
  
  resources :crawl_bars
  resources :crawls
  resources :bars
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  
  root to: 'home#index'
end
