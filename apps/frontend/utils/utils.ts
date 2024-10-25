export const formatMoney = (value: string) => {
  const num = parseFloat(value.replace(/,/g, '')).toFixed(2)
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatDate = (date: string) => {
  const newDate = new Date(date)

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(newDate);
}