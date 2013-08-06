class MapsController < ApplicationController

  def index
  end

  # def click
  #   client = Foursquare2::Client.new(:client_id => ENV['FOURSQUARE_CLIENT_ID'], :client_secret => ENV['FOURSQUARE_CLIENT_SECRET'])
  #   @click = client.search_venues(:ll => params[:], :query => 'bars')
  # end

  def foursquare
    client = Foursquare2::Client.new(:client_id => ENV['FOURSQUARE_CLIENT_ID'], :client_secret => ENV['FOURSQUARE_CLIENT_SECRET'])
    # if params[:location]
      # @search = client.search_venues(:ll => '36.142064,-86.816086', :query =>'cafe')
      # The code below is wrong but we want it to be right. Click to show trending places
    # @search = client.trending_venues(:near => params[:location], :query =>  params[:place])
      # @foursquare_id = @search.groups[0][:items].first[:id]
      # @location =  Instagram.location_search(@foursquare_id).first
      # @photos = Instagram.location_recent_media(@location.id, options = {count: 16})

    respond_to do |format|
      format.js {}
    end
  end

  def yelp
    client = Yelp::Client.new
    request = GeoPoint.new(
             term: "hotels",
             latitude: 40.85,
             longitude: -73.990209,
             limit: 12,
             consumer_key: 'mcTXlE828xeks7ESsscUSA',
             consumer_secret: 'xU1QsQowBpjeyoQWPFVzU3jIXPk',
             token: 'OhsIeHQUElHFM8Dazjn2q9k_eDEpo0oF',
             token_secret: 'bAwOoJMhBUaPNYEcznrNYtwI4Io')
    @response = client.search(request)

    respond_to do |format|
      format.json {render json: @response}
    end
  end

  # def expedia
  #   # Instentiate api object
  #   api = Expedia::Api.new

  #   # Method to search for a hotel. see http://developer.ean.com/docs/read/hotels/version_3/request_hotel_list
  #   response = api.get_list({:propertyName => 'Hotel Moa Berlin', :destinationString => 'berlin'})

  #   # execute this method to know if there is any exception
  #   response.exception? # false if success
  # end
end