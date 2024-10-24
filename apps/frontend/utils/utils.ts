export const formatMoney = (value: string) => {
  const num = parseFloat(value.replace(/,/g, '')).toFixed(2)
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
