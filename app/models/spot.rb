class Spot < ActiveRecord::Base
  attr_accessible :name, :address, :latitude, :longitude
belongs_to :users
belongs_to :cities
end