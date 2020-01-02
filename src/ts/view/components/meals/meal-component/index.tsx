import React from "react";

interface IProps {
  id: number;
  name: string;
  description: string;
  callories: number;
  image: string;
  days: string[];
}

export function MealItem({ id, name, description, callories, image, days }: IProps): JSX.Element {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{callories}</p>
      <p>{image}</p>
      <p>{...days}</p>
    </div>
  )
}