//公共工具——防抖:减少函数的调用次数
export function debounce(fun,delay){
  let timer=null;//闭包
  return function(...argus){
    if(timer!=null){//如果首次是null，不清楚定时器，如果在delay时间内继续调用该函数，清楚定时器
      clearTimeout(timer)
    }
    timer=setTimeout(function(){
      fun.apply(this,argus)
    },delay)
  } 
}

//公共工具——时间格式
export function formatDate(date,fmt){
  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1,(date.getFullYear()+"").substr(4-RegExp.$1.length));
  }
  let o={
    'M+':date.getMonth()+1,
    'd+':date.getDate(),
    'h+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds()
  };
  for(let k in o){
    if(new RegExp(`(${k})`).test(fmt)){
      let str=o[k]+'';
      fmt=fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str){
  return ('00'+str).substr(str.length);
};

//正则验证工具-电话验证
export function isvalidPhone(value){
  const reg = /^1[3|4|5|7|8]\d{9}$/;
  return reg.test(value);
}
//正则验证-邮箱验证
export function isvalidEmail(value){
  const reg =/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(value);
}
//正则验证-密码
export function isvalidUpwd(value){
  const reg =/^[0-9]{6}$/;
  return reg.test(value);
}
//正则验证-用户名
export function isvalidUname(value){
  const reg=/^\w{4,12}$/;
  return reg.test(value)
}