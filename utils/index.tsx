import { CarProps } from "@/types";

export async function fecthCars() {
    const headers = {
        'X-Api-Key': 
        '0ct5Gl8gkBBmmIDn5slBa5hTuPVOYL2BaMBoSFo9',
        'X-Api-Host': 'api.api-ninjas.com'
    }

    const response = await fetch('https://api.api-ninjas.com/v1/cars?model=carrera', {
        headers: headers,        
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageFactor + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle ? : string ) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const {make, year, model} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);    

    return `${url}`    
}