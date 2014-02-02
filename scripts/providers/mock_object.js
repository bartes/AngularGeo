/**
 * Created by Mike on 2/2/14.
 */

var result = {
  length: 1,
  locations: [
    {
      address: {
        full: "30 Rockefeller Plaza, New York, NY 10112, USA",
        addressLine: "30 Rockefeller Plaza",
        streetNumber: "30",
        route: "Rockefeller Plaza",
        adminDistrict: "New York",
        country: "United States",
        locality: "New York",
        postalCode: "10020"
      },
      geometry: {
        coords: {
          latitude: 40.75854241847992,
          longitude: -73.97898182272911
        },
        viewport: {
          bottomLeft: {
            latitude: 40.75467970090924,
            longitude: -73.98578078085382
          },
          topRight: {
            latitude: 40.762405136050596,
            longitude: -73.9721828646044
          }
        }
      }
    }
  ],
  native: {
    provider: "Google",
    resp: [{"address_components":[{"long_name":"30","short_name":"30","types":["street_number"]},{"long_name":"Rockefeller Plaza","short_name":"Rockefeller Plaza","types":["route"]},{"long_name":"Midtown","short_name":"Midtown","types":["neighborhood","political"]},{"long_name":"Manhattan","short_name":"Manhattan","types":["sublocality","political"]},{"long_name":"New York","short_name":"New York","types":["locality","political"]},{"long_name":"New York","short_name":"New York","types":["administrative_area_level_2","political"]},{"long_name":"New York","short_name":"NY","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"10112","short_name":"10112","types":["postal_code"]}],"formatted_address":"30 Rockefeller Plaza, New York, NY 10112, USA","geometry":{"location":{"d":40.7586615,"e":-73.9790372},"location_type":"ROOFTOP","viewport":{"ta":{"d":40.7573125197085,"b":40.7600104802915},"ia":{"b":-73.98038618029148,"d":-73.97768821970851}}},"types":["street_address"]}]
  }
};