class MapsController < ApplicationController

  def index
  end


  def save
    @spotFave = Spot.create(
      name: params[:name],
      address: params[:address],
      latitude: params[:latitude],
      longitude: params[:longitude]
    )

    current_user.spots << @spotFave

    respond_to do |format|
      format.json {render json: @spotFave}
    end
  end


  def favorite
     @spots = current_user.spots
      respond_to do |format|
      format.html
      format.json {render json: @spots}
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