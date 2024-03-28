
let Changing_Guest_List :string [ ] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

// for(let i=0 ; i< Changing_Guest_List.length; + i++){

//     console.log ('Dear Mr.' + Changing_Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks you!\n\n')
   
// }

let Absent_Guest :string = 'Imran Khan';
let New_Guest :string = 'Kamran Tessori';
Changing_Guest_List [0] = New_Guest ;

// for(let i=0 ; i< Changing_Guest_List.length; + i++){
//     console.log('Dear Mr. ' + Changing_Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks you!\n\n')
//   }

console.log(`Mr.${Absent_Guest} is not commong to the party.` );
console.log('Good News! We find Big table so we are inviting 3 more Guests');

// Array me 3 guest add kiye hain.
Changing_Guest_List.unshift('Sir Zia Khan');
Changing_Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Changing_Guest_List.push('Bilawal Bhutto Zardari');


// Yahan per mene 6 guest k array ko print karaya hai.
for(let i=0 ; i< Changing_Guest_List.length; + i++){
    console.log('Dear Mr. ' + Changing_Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks you!\n\n')
  }

  // Sorry message to guest not invited.
  console.log('\n Sorry We can not arrange Big table, Only two people will be invited.');

  // Yahan per mene guest remove kiye hain.
  while (Changing_Guest_List.length > 2) {
        let remove_Guest = Changing_Guest_List.pop();
    console.log(`Sorry Mr . ${remove_Guest}, You are not invited for Dinner`);
  }

  // Hamare bache howe 2 invited guest.
  // for(let i=0 ; i< Changing_Guest_List.length; + i++){
  //   console.log('Dear Mr. ' + Changing_Guest_List [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThanks you!\n\n')
  // }
  
  
  // mene sare guest Array se remove ker diye.
  Changing_Guest_List.splice(0 , 2);
  console.log(Changing_Guest_List);

  // Exercise 19
  // print a message indicating the number of people you are inviting to dinner.

  console.log(`Total number of Guest Are: ${Changing_Guest_List.length}`);
  
  
  