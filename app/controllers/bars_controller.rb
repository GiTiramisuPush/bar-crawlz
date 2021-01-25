class BarsController < ApplicationController

    def indexBar
        bars = Bar.all
        render json: bars
      end
  

    def showBar
        bar = Bar.find(bar_params)
        render json: bar
    end



#   evaluate if other method are needed (ZEAL?)


private

  #Bars have a title and bars

  def bar_params
    params.require(:crawl).permit(:user_id)
  end
    
end



# # React method to fetch Yelp API
# componentDidMount() {
#     fetch('API Key')
#     .then(resp => { 
#         console.log(payload)
#         this.setState({bars: payload.businesses.????})
#         .catch(errors => {})
#     console.log(errors)

#     })
# }
apiKey:a1mACfDmWi4AV8TQHvHkB6dPkj-8ly8_WKI0VgmptR5-9ks9LRXn3cSeWmQzzHDiWQzacvFG2Ji8ZmbfcF2l5tLnOBK-tqpMCxsuPAkFap1k6DSCpnM-Wvre6XD_X3Yx;

class YelpClient {
    constructor(apiKey){
      this.apiKey = apiKey;
    }
    
    search(parameters){
      return _send({
        url: 'https://api.yelp.com/v3/businesses/search',
        query: parameters,
        bearerToken: this.apiKey
      });
    }
  
    phoneSearch(parameters){
      return _send({
        url: 'https://api.yelp.com/v3/businesses/search/phone',
        query: parameters,
        bearerToken: this.apiKey
      });
    }
  