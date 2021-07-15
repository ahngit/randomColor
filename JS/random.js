setInterval(RandomColor, 1000);
function RandomColor() {
var hexValue = '0123456789ABCDEF';
var hexKey = '#';
for (var count = 0; count < 6; count++) {
  hexKey += hexValue[Math.floor(Math.random() * 16)];
}

var all_bg = document.querySelectorAll(".setRandomBgColor");
var all_text = document.querySelectorAll(".setRandomTextColor");
var all_border = document.querySelectorAll(".setRandomBorderColor");
var all_text_shadow = document.querySelectorAll(".setRandomTextShadow");
var all_box_shadow = document.querySelectorAll(".setRandomBoxShadow");
var count;

for (count = 0; count < all_bg.length; count++) {
  all_bg[count].style.backgroundColor = hexKey;
}
// random text color
for (count = 0; count < all_text.length; count++) {
  all_text[count].style.color = hexKey;
}
// random border color
for (count = 0; count < all_border.length; count++) {
  all_border[count].style.border ='1px solid '+hexKey;
}
// random text shadow 
for (count = 0; count < all_text_shadow.length; count++) {
  all_text_shadow[count].style.textShadow ='0 0 0.5em'+hexKey;
}
// random box shadow 
for (count = 0; count < all_box_shadow.length; count++) {
  all_box_shadow[count].style.boxShadow ='0 0 0.5em '+hexKey;
}
  
}
