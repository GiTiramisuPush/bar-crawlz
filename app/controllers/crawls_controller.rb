class CrawlsController < ApplicationController

    def indexCrawl
        crawls = Crawl.all
        render json: crawls
      end
  
      def createCrawl
        crawl = Crawl.create(crawl_params)
        if crawl.valid?
            render json: crawl
        else
            render json: crawl.errors, status: unprocessable_entity
        end
      end
  
      def updateCrawl
        crawl = Crawl.find(params[:id])
        crawl.update(crawl_params)
        if crawl.valid?
            render json: crawl
        else
            render json: crawl.errors, status: unprocessable_entity
        end
      end
  
      def destroy
        crawl = Crawl.find(params[:id])
        crawl.destroy(crawl_params)
        if crawl.valid?
            render json: crawl
        else
            render json: crawl.errors, status: unprocessable_entity
        end
      end
  

  private

  #Crawls have a title and bars

  def crawl_params
    params.require(:crawl).permit(:title, :user_id)
  end

end