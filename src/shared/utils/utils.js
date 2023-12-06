const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const formatDate = (dateString) => {
  const dateObj = new Date(dateString);
  const day = DAYS[dateObj.getDay()];
  const date = dateObj.getDate();
  const month = MONTHS[dateObj.getMonth()];
  return `${day} - ${month} ${date}`
}