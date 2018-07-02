Rails.application.routes.draw do
  root 'welcome#index'
  get 'singUp' => 'welcome#sing_up'
end
