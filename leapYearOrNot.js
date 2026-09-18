function leapYear(yr){
//   if(yr%4 == 0){
//     console.log("Its a Leap Year")
//   }else{
//     console.log("Not a leap year")
//   }
if(yr%400 == 0){
  console.log("Its a Leap Year")
}else if(yr%100 == 0){
  console.log("Not a leap year")
}else if(yr%4 == 0){
  console.log("Leap year!!!")
}else{
  console.log("not leap :(")
}
}

// Proper whole year check for leap years

leapYear(1900)