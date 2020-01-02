import React from "react";

interface IProps {
  day: string
}

export function DayItem({day}:IProps):JSX.Element {
  return (
    <div>Day - {day}</div>
  )
}