class BarsController < ApplicationController


def index
    bars = Bar.all 
    render json: bars
end

    
def create
    crawl = Crawl.find(crawl_params[:id])

    bar = crawl.bars.create_with(bar_params).find_or_create_by(yelp_id: bar_params[:yelp_id])
    
    # bar = crawl.bars.create(bar_params)
    if bar.valid?
        render json: bar
    end
end

def destroy
    bar = Bar.find(params[:id])
    bar.destroy
    if bar.valid?
        render json: bar
    else
        render json: bar.errors, status: unprocessable_entity
    end
end

private

def bar_params
    params.require(:bar).permit(:yelp_id, :name, :image_url, :categories, :rating, :address1, :address2, :address3, :city, :zip_code, :country, :display_address, :phone, :display_phone)
    end

def crawl_params
    params.require(:crawl).permit(:id)
    end

end

