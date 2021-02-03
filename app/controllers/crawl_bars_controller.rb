class CrawlBarsController < ApplicationController

    def destroy
        crawlbar = CrawlBar.find_by(crawl_id: params[:id], bar_id: params[:bar_id])
        crawlbar.destroy
        if crawlbar.valid?
            render json: crawlbar
        else
            render json: crawlbar.errors, status: unprocessable_entity
        end
    end

    private

def bar_params
    params.require(:bar).permit(:bar_id)
    end

def crawl_params
    params.require(:crawl).permit(:id)
    end

end
