let personName : string = || '';

personName = prompt ('what is your name') ||  '';

let lowercase : string = personName. toLowerCase() ;
let upercase  : string = personName. toUpperCase() ;
let titlecase : string = personName. split(' ').map(word => word.charAt(0).toUpperCase () + word.slice (1).toLowerCase ()).join ('')

if (personName !== null && personName !== ''){

alert(`Hellow ${personName},Here are your name in:

LowerCase: ${lowercase}
UperCase : ${upercase}
TitleCase: ${titlecase}`)
}
else{
alert('please fill your name !')
}
