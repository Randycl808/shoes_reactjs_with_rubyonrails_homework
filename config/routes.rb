Rails.application.routes.draw do

  #sets API in browser before the data you want
  # example ..... localhost3000/api/shoes 
 namespace :api do



    #resources :shoes 
    #IF you wanted the shortcut for below

  #gives client a list of all shoes in DATABASE
  get 'shoes',          to:'shoes#index'
  #gives client a specific shoe ID in DATABASE
  get 'shoes/:id',      to:'shoes#show'
  #client must create using {text, stars(0-5), AND brand}
  #for it to work and submit into DATABASE
  post 'shoes',         to:'shoes#create'
  #client must update using {text, IF WANTED stars(0-5), AND brand}
  put 'shoes/:id',      to:'shoes#update'
  #lets client delete a specific shoe ID in DATABASE
  delete 'shoes/:id',   to:'shoes#destroy'
end
end
