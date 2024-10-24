import React from 'react'

interface Props {
  date: string
}

export const DateFormat = ({
  date
}: Props) => {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const newDate = new Date(date)
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0')
  const year = newDate.getFullYear()

  const formattedDate = `${day} ${months[parseInt(month)]}`;

  console.log(formattedDate)

  return (
    <p>{formattedDate}</p>
  )
}
