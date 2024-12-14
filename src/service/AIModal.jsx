import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with\nbest time to visitin JSON format.\nModel 49.8s\n{\n\"hotels\": [\n{\n\"hotelName\": \"The D Las Vegas\",\n\"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n\"price\": \"$50-$100 per night\",\n\"hotelImageUrl\":\n\"https://www.theDcasino.com/images/hero/main-hero-02.jpg\",\n\"geoCoordinates\": \"36.1695, -115.1438\",\n►\n1:10:3273:45:22. Generate Trip From Al >"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/wp-content/uploads/2022/09/circus-circus-hotel-exterior-2x-1.jpg\",\n      \"geoCoordinates\": \"36.1241, -115.1691\",\n      \"rating\": \"3.5\",\n      \"description\": \"A classic Las Vegas hotel with a circus theme, offering affordable rooms and family-friendly entertainment. Features include a theme park, carnival games, and multiple dining options.\"\n    },\n    {\n        \"hotelName\": \"Excalibur Hotel & Casino\",\n        \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n        \"price\": \"$50-$90 per night\",\n        \"hotelImageUrl\": \"https://www.excalibur.com/content/dam/excalibur/images/header/excalibur-header-mob.jpg\",\n        \"geoCoordinates\": \"36.0988, -115.1742\",\n        \"rating\": \"4.0\",\n        \"description\": \"A medieval-themed hotel with a castle facade, offering affordable rooms and various dining options. Features a pool complex, nightly shows, and easy access to other Strip attractions.\"\n    },\n    {\n      \"hotelName\": \"Strat Hotel, Casino & Skypod\",\n      \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n       \"price\": \"$45 - $85 per night\",\n       \"hotelImageUrl\": \"https://www.thestrat.com/sites/strat/files/2022-03/THESTRAT_EXT_1168x730.jpg\",\n      \"geoCoordinates\": \"36.1464, -115.1539\",\n      \"rating\": \"4.2\",\n      \"description\":\"Offers a variety of rooms and suites, plus the iconic Skypod with thrill rides and panoramic city views. Features include multiple dining options, a casino, and a pool.\"\n    }\n  ],\n  \"itinerary\": {\n    \"bestTimeToVisit\": \"March to May and September to November for pleasant weather.\",\n    \"day1\": {\n      \"theme\": \"Downtown Las Vegas Exploration\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a massive LED canopy screen showcasing vibrant light shows and live entertainment. Enjoy free concerts, street performers, and various dining options.\",\n          \"placeImageUrl\": \"https://www.vegasexperience.com/wp-content/uploads/2023/09/fse-180-gallery-1440.jpg\",\n          \"geoCoordinates\": \"36.1699, -115.1424\",\n          \"ticketPricing\": \"Free (some attractions and activities may have a cost)\",\n           \"rating\": \"4.5\",\n          \"timeTravel\": \"Varies depending on hotel location. Generally within 20-30 min by car/bus\"\n        },\n         {\n          \"placeName\": \"Container Park\",\n          \"placeDetails\": \"An open-air shopping and entertainment area built from shipping containers. Features unique boutiques, restaurants, and a playground. \",\n          \"placeImageUrl\":\"https://downtowncontainerpark.com/wp-content/uploads/2022/07/DCP_Hero.jpg\",\n          \"geoCoordinates\":\"36.1697, -115.1406\",\n           \"ticketPricing\": \"Free\",\n          \"rating\":\"4.3\",\n          \"timeTravel\": \"5 min walk from Fremont Street Experience\"\n         },\n        {\n          \"placeName\": \"Mob Museum\",\n          \"placeDetails\": \"Explore the history of organized crime in America. Exhibits include artifacts, interactive displays, and stories of famous mobsters.\",\n          \"placeImageUrl\": \"https://themobmuseum.org/wp-content/uploads/2023/06/19_0150_012_02_03_0181-scaled-1.jpg\",\n          \"geoCoordinates\":\"36.1702, -115.1416\",\n          \"ticketPricing\": \"$30 per person\",\n          \"rating\": \"4.6\",\n          \"timeTravel\": \"2 min walk from Container Park\"\n          }\n      ]\n    },\n    \"day2\": {\n       \"theme\":\"The Las Vegas Strip Experience\",\n      \"places\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"placeDetails\": \"Witness stunning seasonal floral displays in this free indoor botanical garden. The displays change regularly and are visually impressive.\",\n          \"placeImageUrl\": \"https://bellagio.mgmresorts.com/content/dam/MGM/bellagio/conservatory/conservatory-fall-2023-1580x1060.jpg\",\n           \"geoCoordinates\":\"36.1129, -115.1743\",\n           \"ticketPricing\": \"Free\",\n           \"rating\": \"4.7\",\n           \"timeTravel\":\"Varies depending on hotel location. Generally within 20-30 min by car/bus.\"\n        },\n        {\n          \"placeName\":\"Bellagio Fountains\",\n          \"placeDetails\":\"Experience a free water show with a choreographed display of water jets, music, and lights outside the Bellagio. Shows occur throughout the day.\",\n          \"placeImageUrl\":\"https://bellagio.mgmresorts.com/content/dam/MGM/bellagio/entertainment/bellagio-fountains/bellagio-fountains-1580x1060.jpg\",\n          \"geoCoordinates\":\"36.1124, -115.1742\",\n          \"ticketPricing\":\"Free\",\n          \"rating\":\"4.8\",\n          \"timeTravel\":\"1 min walk from Bellagio Conservatory & Botanical Gardens\"\n         },\n         {\n           \"placeName\": \"High Roller Observation Wheel\",\n           \"placeDetails\": \"Ride the world's tallest observation wheel for panoramic views of the Las Vegas Strip and surrounding areas.\",\n            \"placeImageUrl\": \"https://www.caesars.com/content/dam/clv/property/the-linq-hotel/things-to-do/high-roller/high-roller-header-desktop.jpg\",\n           \"geoCoordinates\": \"36.1173, -115.1692\",\n           \"ticketPricing\": \"$30 - $40 per person\",\n           \"rating\": \"4.5\",\n           \"timeTravel\":\"10-15min walk from Bellagio Fountain or take a Taxi/Ride sharing service.\"\n        }\n      ]\n    },\n    \"day3\": {\n       \"theme\":\"Budget Friendly Exploration and Relaxation\",\n      \"places\": [\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"View colorful art installation consisting of seven stacked boulder towers. Located just south of the Las Vegas strip.\",\n          \"placeImageUrl\": \"https://sevenmagicmountains.com/wp-content/uploads/2023/08/seven-magic-mountains-las-vegas-nevada-2023.jpg\",\n          \"geoCoordinates\": \"35.9994, -115.2270\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.4\",\n          \"timeTravel\":\"30-40 min drive from the Las Vegas strip (Recommend renting a car or using ride sharing services.)\"\n        },\n        {\n          \"placeName\":\"Ethel M Chocolate Factory and Botanical Cactus Garden\",\n          \"placeDetails\":\"Enjoy a free self-guided tour of the chocolate factory (tasting available for a fee) and explore a beautiful cactus garden.\",\n          \"placeImageUrl\":\"https://ethelm.com/wp-content/uploads/2020/09/Ethel-M_Exterior-1.jpg\",\n          \"geoCoordinates\":\"36.0642, -115.0562\",\n          \"ticketPricing\":\"Free( Chocolate Tasting Available for a fee)\",\n          \"rating\":\"4.3\",\n          \"timeTravel\":\"15-20 minutes drive from Seven Magic Mountains\"\n        },\n        {\n          \"placeName\": \"Pool Day at your Hotel or nearby Free Public Pool\",\n          \"placeDetails\": \"Spend the afternoon relaxing by the pool. Many hotels offer free pool access for guests. Alternatively, search for free public pools.\",\n           \"placeImageUrl\": \"https://www.lvmpd.com/Home/ShowPublishedImage?id=21987&t=637739357236970000\",\n           \"geoCoordinates\": \"Varies based on Hotel or Pool location.\",\n           \"ticketPricing\": \"Free or included with hotel stay.\",\n           \"rating\": \"N/A\",\n           \"timeTravel\":\"Varies based on Hotel or Pool location.\"\n        }\n      ]\n    }\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  
    
  
 