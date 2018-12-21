export function parseTime(date){
  if (date) {
    const d = new Date(date)
    const minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    const second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    const hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' +
        d.getDate() + ' ' + hours + ' : ' + minutes + ' : ' + second
  }
}

export function toDate(date){
  if (date) {
    const d = new Date(date)
    const minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    const hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' +
        d.getDate()
  }
}