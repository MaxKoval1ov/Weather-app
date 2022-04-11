interface WeatherInfo{
    name: string
    weather:{
        main: string,
        description: string,
        icon:string,
    }
    main:{
        temp: number,
        feels_like:number,
        preasure:number,
        humidity
    }
    wind: {
        speed:number
    }
}