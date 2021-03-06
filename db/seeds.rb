# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   Mayor.create(name: 'Emanuel', city: cities.first)



# cities = City.create([{ name: 'Chicago' },
#                     { name: 'Copenhagen' }])

  City.delete_all

  cities = City.create([{name: 'Anchorage, AK',
                         latitude: 61.1919,
                         longitude: -149.7621},
                         {name: 'Atlanta, GA',
                          latitude: 61.1919,
                          longitude: -149.7621},
                          {name: 'Austin, TX',
                            latitude: 30.266,
                            longitude: -97.7428},
                           {name: 'Baltimore, MD',
                            latitude: 39.283,
                            longitude: -76.6167},
                             {name: 'Boston, MA',
                            latitude: 42.358,
                            longitude: -71.0603},
                             {name: 'Buffalo, NY',
                            latitude: 42.886,
                            longitude: -78.8786},
                             {name: 'Charleston, SC',
                            latitude: 32.776,
                            longitude: -79.9311},
                             {name: 'Charlotte, NC',
                            latitude: 35.226,
                            longitude: -80.8433},
                             {name: 'Chicago, IL',
                            latitude: 41.850,
                            longitude: -87.6500},
                             {name: 'Cincinnati, OH',
                            latitude: 39.161,
                            longitude: -84.4569},
                             {name: 'Cleveland, OH',
                            latitude: 41.4,
                            longitude: -81.69},
                             {name: 'Dallas, TX',
                            latitude: 32.782,
                            longitude: -96.8039},
                             {name: 'Denver, CO',
                            latitude: 39.7392,
                            longitude: -104.9842},
                             {name: 'Detroit, MI',
                            latitude: 42.331,
                            longitude: -83.0458},
                             {name: 'Indianapolis, IN',
                            latitude: 39.768,
                            longitude: -86.1581},
                             {name: 'Honolulu, HI',
                            latitude: 21.3069,
                            longitude: -157.8583},
                             {name: 'Jacksonville, FL',
                            latitude: 30.331,
                            longitude: -81.6558},
                             {name: 'Las Vegas, NV',
                            latitude: 36.0800,
                            longitude: -115.1522},
                            {name: 'Los Angeles, CA',
                            latitude: 34.0522,
                            longitude: -118.2428},
                          {name: 'Miami, Fla',
                        latitude: 25.7216,
                        longitude: -80.2793},
                      {name: 'Minneapolis, MN',
                        latitude: 44.9800,
                        longitude: -93.2636},
                      {name: 'New Orleans, LA',
                        latitude: 29.9728,
                        longitude: -90.0590},
                      {name: 'New York, NY',
                        latitude: 42.3482,
                        longitude: -75.1890},
                      {name: 'Philadelphia, PA',
                        latitude: 39.9522,
                        longitude: -75.1642},
                      {name: 'Pittsburgh, PA',
                        latitude: 40.4406,
                        longitude: -79.9961},
                      {name: 'San Diego, CA',
                        latitude: 32.7153,
                        longitude: -117.1564},
                      {name: 'San Francisco, CA',
                        latitude: 37.7750,
                        longitude: -122.4183},
                      {name: 'Seattle, WA',
                        latitude: 47.6097,
                        longitude: -122.3331},
                      {name: 'Syracuse, NY',
                        latitude: 43.0481,
                        longitude: -76.1478},
                      {name: 'Tampa, FL',
                        latitude: 27.9472,
                        longitude: -82.4586}
                        ])



