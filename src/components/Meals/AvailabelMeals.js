import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card';



    const AvailableMeals = ()=> {
      const[meals,setMeals] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [httpError, setHttpError] = useState(null)
      useEffect(()=> {
        const fetchMeals =async() => {
        const response= await fetch('https://react-http-test-d3459-default-rtdb.firebaseio.com/meals.json')
        if(!response.ok) {
            throw new Error('Something is wrong')
        }
        const responseData = await response.json();

        const loadMeals = [];
        for(const key in responseData) {
            loadMeals.push({
                id:key,
                name: responseData[key].name,
                description: responseData[key].description,
                price:responseData[key].price
            })
        }
        setMeals(loadMeals);
        setIsLoading(false);
    }   
    fetchMeals().catch(err => {
        setIsLoading(false);
        setHttpError(err.message)
    })    
        },[])  

        if(isLoading) {
            return <section className={classes.mealIsloading}>
                <p>...Loading</p>
            </section>
        }

        if(httpError) {
            return <section className={classes.mealIsError}>
                <p>{httpError}</p>
            </section>
        }
        const mealList = meals.map(meal =>(
            <MealItem
            id={meal.id}
            key={meal.id}
            name ={meal.name}
            description= {meal.description}
            price={meal.price}

            />
        ))
        return <section className={classes.meals}>
          <Card>
            <ul>
                {mealList}
            </ul>
          </Card>

        </section>
  
    
    }

    export default AvailableMeals;
     
