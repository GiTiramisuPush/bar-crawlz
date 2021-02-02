## READ ME
## App BUILDING commands
$ rails new barcrawlz -d postgresql -T
$ cd barcrawlz
$ rails db:create
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
Added to app/view/home/index.html.erb <%= react_component "App" %>
Added to config/routes root to: 'home#index'
$ bundle add rspec-rails
$ rails generate rspec:install

- Added folders for assets, components, pages
- Added Header, Footer, Home, NotFound, Index, Show components

## Adding Devise
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
- config/environments/development.rb config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
- config/initializers/devise.rb replace this line config.sign_out_via = :delete with this one  config.sign_out_via = :get

## Reactstrap
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- Add an import to the "sass" file @import 'bootstrap'
$ yarn add reactstrap

## React Router
$ yarn add react-router-dom
-Import components to App.js
-Setup static routes to Home, Index, Show, NotFound

## Fix Webpacker Install Command
- yarn add @rails/webpacker@4.3.0

## Layout of HOMEPAGE
- Added Header.js, Footer.js to Home page
- Added conditional rendering to make sure devise 

## mockData
-mockData for bars
-mockData for a single barCrawl

## Creating resources
$ rails g resource Crawl title:string user_id:integer
$ rails g resource Bar yelp_id:string name:string image-url:string categories:string rating:float address1:string address2:string address3:string city:string zip_code:string country:string state:string display_address:string phone:string display_phone:string
$ rails g resource CrawlBar bar_id:references crawl_id:references
- adding associations : has_many :through
class User < ApplicationRecord
has_many :crawls
end
class Crawl < ApplicationRecord
belongs_to :user
has_many :jointables
has_many :bars, through: :jointable 
end
class Bar < ApplicationRecord
has_many :crawls, through: :jointable
has_many :jointables
end
class JoinTable < ApplicationRecord
belongs_to :crawls
belongs_to :bars
end

## TESTS
-spec/models/bar_spec.rb
-spec/models/crawl_spec.rb



## to do list:
- Controller methods 
- 

## Testing Frontend
- yarn add --dev jest babel-jest babel-preset-es2015
-   "scripts": {
    "start": "yarn start",
    "build": "yarn build",
    "test": "jest"
  },
  "jest": {
    "roots": [
      "app/"
    ]
  }
- 
