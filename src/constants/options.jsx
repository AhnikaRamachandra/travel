export const SelectTravellist=[
    {
        id:1,
        title:"Just Me",
        desc:"Solo travel",
        icon:'/solo.png',
        people:'1'
    },
    {
        id:2,
        title:"A Couple",
        desc:"Two traveles in tandem",
        icon:'/couple.png',
        people:'2'
    },
    {
        id:3,
        title:"Family",
        desc:"A group of fun loving adv",
        icon:'/family.png',
        people:'3 to 5'
    },
    {
        id:4,
        title:"Friends",
        desc:"A bunch of thrill-seekes",
        icon:'/friends.png',
        people:'5 to 10 People'
    },
    
    
]
export const SelectBudget=[
    {
        id:1,
        title:"cheap",
        icon:"money.png",
        desc:"Stay conscious of costs"
    },
    {
        id:2,
        title:"Moderate",
        icon:"money.png",
        desc:"Keep cost on the average side"
    },
    {
        id:1,
        title:"Luxury",
        icon:"money.png",
        desc:"Dont worry about cost"
    },
]
export const AI_PROMPT="Generate Travel Plan for Location: {location},for {noofday} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."