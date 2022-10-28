const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hex = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
const hex_value = document.getElementById('hex');
const cpy = document.getElementById('myCopy');
const NameColor = [
    'IndianRed', 'DeepPink','Gold','DarkViolet','LawnGreen', 'MediumSpringGreen', 'Teal'
, 'Teal', 'DarkBlue', 'pink', 'Black', 'BlueViolet', 'Chocolate', 'Crimson', 'DarkSeaGreen','ForestGreen', 'Aqua', 'SandyBrown', 'Grey', 'Indigo', 'MediumPurple',
'NavajoWhite', 'Olive', 'OrangeRed', 'YellowGreen', 'Tomato', 'Thistle', 'Tan', 'Purple', 'PowderBlue', 'MediumTurquoise', 'Ivory',
'HoneyDew', 'Aquamarine', 'MediumS,pringGreen', 'MediumOrchid', 'GoldenRod', 'DarkSlateGray', 'DarkCyan', 'Crimson', 'SeaGreen', 
'GreenYellow','Lavender','Green', 'Lime', 'NavajoWhit', 'Orange', 'Red', 'SlateGray', 'White', 'Yellow', 'Wheat','RosyBrown', 'RebeccaPurple', 'OldLace', 'Olive',
'Navy', 'MediumVioletRed', 'MediumAquamarine', 'LightCyan', 'HotPink', 'GhostWhite', 'DeepSkyBlue', 'Chartreuse', 'Bisque', 
'Brown','CadetBlue','Cya', 'arkOliveGree','DarkSlateGra','DimGrey', 'indian red','lightpink', 'FireBrick', 'PaleVioletRed','DarkKhaki','DarkOrchid', 'Sienna', 'LightSlateGray',
'DarkSlateGrey','blue']

body.style.backgroundColor = '#000000';
hex_value.innerHTML = '#000000';
btn.addEventListener('click',function(){
    let hex_key = '#';
   
const values = Math.floor(Math.random() * NameColor.length); // 2

    hex_value.innerHTML = NameColor [values];
    document.getElementById('myHex').value = NameColor [values];
    body.style.backgroundColor = NameColor[values];
    body.style.transition = '1s';
});

cpy.addEventListener('click', function(){
    let hex = document.getElementById('myHex');

    hex.select();
    hex.setSelectionRange(0,99999);

    navigator.clipboard.writeText(hex.value);
    alert('copied Hex Color : ' + hex.value);


});



