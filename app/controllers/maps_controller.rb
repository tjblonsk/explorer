class MapsController < ApplicationController
  def index
  end

  # def click
  #   client = Foursquare2::Client.new(:client_id => ENV['FOURSQUARE_CLIENT_ID'], :client_secret => ENV['FOURSQUARE_CLIENT_SECRET'])
  #   @click = client.search_venues(:ll => params[:], :query => 'bars')
  # end

  def zoom
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
end