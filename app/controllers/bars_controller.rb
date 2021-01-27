class BarsController < ApplicationController

def create
     binding.irb
    crawl = Crawl.find(bar_params[:crawl_id])
    bar = crawl.bars.create(bar_params)
    if bar.valid?
        render json: bar
    end
end

private

def bar_params
    params.require(:bar).permit(:yelp_id, :name, :image_url, :categories, :rating, :address1, :address2, :address3, :city, :zip_code, :country, :display_address, :phone, :display_phone)
end

end

