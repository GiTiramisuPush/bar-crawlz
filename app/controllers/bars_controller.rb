class BarsController < ApplicationController


    
def create
    crawl = Crawl.find(crawl_params[:id])

    # crawl = Crawl.find_or_create_by(crawl_params[yelp_id:])
    # bar = Bar.find_or_create_by(yelp_id: 'ahfasdf23')

    bar = Bar.find_or_create_by(yelp_id: true)
    
    # bar = crawl.bars.find_or_create_by(bar_params) ?
    #finding or creating a bar by.. maybe we can use :id?
    # Find the first user named "PenÃ©lope" or create a new one.
    # User.find_or_create_by(first_name: 'PenÃ©lope')
    
    bar = crawl.bars.create(bar_params)
    if bar.valid?
        render json: bar
    end
    # binding.irb
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

