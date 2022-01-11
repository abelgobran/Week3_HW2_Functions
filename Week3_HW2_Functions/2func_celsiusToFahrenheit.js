//2a. Create a function called celsiusToFahrenheit:

//- Take a Celsius temperature from the user and convert it to Fahrenheit

//- Return string as output: "SOMETHING degrees Celsius is Something degrees Fahrenheit"




const celsiusToFahrenheit= (temperature)=>{

    let formula = ((temperature*9/5)+32)
    return (
        console.log(temperature+' degrees Celsius is '+ formula +' degrees Fahrenheit')
    )

}

(celsiusToFahrenheit(44)); 


//2b. Create a function called fahrenheitToCelsius:

//- Now take a Fahrenheit temperature from the user and convert it to Celsius

//- Return string as output: "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

const fahrenheitToCelcius = (temperature)=>{

    let formula = ((temperature-32)*5/9)
    return (
        console.log(temperature+' degrees Fahrenheit is '+ formula +' degrees Celsius')
    )
}

(fahrenheitToCelcius(59));
