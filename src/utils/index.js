

const utils={
  formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
  
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')
  
    return `${t1} ${t2}`
  },
  formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
  },
  formatDate(str) {
    let times = new Date(str);
      let Y = times.getFullYear()
      let M = times.getMonth()+1<10?'0'+(times.getMonth()+1):times.getMonth()+1
      let D = times.getDate()<10?'0'+(times.getDate()):times.getDate()
      // return times = Y + "年" + M + "月" +D+'日';
      return times = Y + "-" + M + "-" +D;
  },
}

export default utils
