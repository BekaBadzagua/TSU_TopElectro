import * as React from 'react';
import Categories from './Categories/Categories'
import Locations from './Locations/Location'
import Products from './Products/Products'
import Services from './Services/Services'
import Slider from './Slider/Slider'
import { Helmet } from 'react-helmet';

const Home = (props: any) => {


  return (
    <React.Fragment>
      <Helmet>
        <title>Top Electro</title>
        <meta name='robots' content='index' />
        <meta name="description" content=" ,,TOP ELEKTRO’’ -ს საქმიანობას წარმოადგენს დაბალი და მაღალი ძაბვის ელექტროსამონტაჟო და გამანაწილებელი პროდუქციის დისტრიბუცია საქართველოს ბაზარზე. ჩვენ ვამარაგებთ ყველა სამშენებლო ჰიპერმარკეტებს.აგრეთვე 1000ზე მეტ სამშენებლო მაღაზიას ქვეყნის მაშტაბით. ,,TOP ELEKTRO’’ გთავაზობთ უმაღლესი ხარისხის ნებისმიერი ტიპის ელექტროტექნიკურ პროდუქციას." />
        <meta name="keywords" content="ელექტრონული მაღაზია,TDM topelektro,TDM topelectro,topelectro, topelektro, მაღაია,ელექტრო მოწყობილობები, ელექტრობა, როზეტები, რეტრო,Top Electro" />
      </Helmet>
      <Slider />
      <Categories />
      <Services />
      <Products />
      <Locations />
    </React.Fragment>
  );
}

export default Home;
