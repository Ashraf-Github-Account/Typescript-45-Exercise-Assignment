
let Changing_Guest_List :string [ ] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

// for(let i=0 ; i< Changing_Guest_List.length; + i++){

//     console.log ('Dear Mr.' + Changing_Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks you!\n\n')
   
// }

let Absent_Guest :string = 'Imran Khan';

let New_Guest :string = 'Kamran Tessori';

Changing_Guest_List [0] = New_Guest ;

for(let i=0 ; i< Changing_Guest_List.length; + i++){

    console.log('Dear Mr. ' + Changing_Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks you!\n\n')
  
}
console.log(`Mr.${Absent_Guest} is not commong to the party.` );

console.log('Good News! We find Big table so we are inviting 3 more Guests');

Changing_Guest_List.unshift('Sir Zia Khan');
Changing_Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Changing_Guest_List.push('Bilawal Bhutto Zardari');

for(let i=0 ; i< Changing_Guest_List.length; + i++){

    console.log('Dear Mr. ' + Changing_Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks you!\n\n')
  
}
