import React from "react";

import { MealItem } from "../meal-component";

interface IProps {
  name: string;
}

const _meals: any = {
  ukrainian: [
    {
      id: 1,
      name: "Салат",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3', '4']
    },
    {
      id: 2,
      name: "Борщ",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '3', '4']
    },
    {
      id: 3,
      name: "Молоко",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3']
    },
  ],
  greek: [
    {
      id: 1,
      name: "Грецький салат",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3', '4']
    },
    {
      id: 2,
      name: "Дакос",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '3', '4']
    },
    {
      id: 3,
      name: "Фава",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3']
    },
  ],
  italian: [
    {
      id: 1,
      name: "Паста",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3', '4']
    },
    {
      id: 2,
      name: "Равіолі",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '3', '4']
    },
    {
      id: 3,
      name: "Рікота",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3']
    },
  ],
  chinese: [
    {
      id: 1,
      name: "Тофу",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3', '4']
    },
    {
      id: 2,
      name: "Рис",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '3', '4']
    },
    {
      id: 3,
      name: "Локшина",
      description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
      callories: 541,
      image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
      days: ['1', '2', '3']
    },
  ],
}


export function MealCollection({name}: any): JSX.Element {
  const mealList = _meals[name.toLowerCase()]
  return (
    <div className={'meals'}>
      {mealList.map((meal: any) => <MealItem key={meal.id} {...meal} />)}
    </div>
  )
}