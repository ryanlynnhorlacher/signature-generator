Rails.application.routes.draw do
  root 'home#index'

  get '/companies', to: 'home#companies'

end
