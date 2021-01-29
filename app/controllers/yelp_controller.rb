require "uri"
require "net/http"
class YelpController < ApplicationController

def apicall 
    puts params
    puts "here"   
    url = URI("https://api.yelp.com/v3/businesses/search?limit=50&location=#{params[:location]}&term=#{params[:term]}")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true
    request = Net::HTTP::Get.new(url)
    request["Content-Type"] = "application/json"
    request["Accept"] = "application/json"
    request["Authorization"] = "Bearer #{ENV['REACT_APP_API_KEY']}"

    response = https.request(request)
    render json: response.body
end

end
