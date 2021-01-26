class ApplicationController < ActionController::Base
# added 01/25/2021
    skip_before_action :verify_authenticity_token
end
