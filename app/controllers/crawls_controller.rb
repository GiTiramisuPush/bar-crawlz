class CrawlsController < ApplicationController
    def index
        crawls = Crawl.all 
        render json: crawls
    end
        #A single crawl will include all bars
    def show 
        crawl = Crawl.find(params[:id])
        render json: crawl, include: :bars
    end

    def create
        crawl = Crawl.create(crawl_params)
        if crawl.valid?
            render json: crawl
        end
    end

    def update
        crawl = Crawl.find(params[:id])
        crawl.update(crawl_params)
        if crawl.valid?
            render json: crawl
        else
            render json: crawl.errors, status: :unprocessable_entity
        end
    end

    def destroy
        crawl = Crawl.find(params[:id])
        crawl.destroy
        if crawl.valid?
            render json: crawl
        else
            render json: crawl.errors, status: :unprocessable_entity
        end
    end


    private

    def crawl_params
        params.require(:crawl).permit(:title, :user_id)
    end

end

