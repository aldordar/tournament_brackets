var fourTeams = {
  "teams": [
    ["Team 1", "Team 2"],           //Team 1 vs Team 2
    ["Team 3", "Team 4"]            //Team 3 vs Team 4
  ],
  "results": [   
    [
      [[1,2], [23,4]],            //1st round: Team 1(1) vs Team 2(2) || Team 3(23) vs Team 4(4)
      [[5,6]],                    //2nd round: Winner match 1 vs Winner match 2
    ],
    [
      [[3,4]],                    //Losers: Losers 1st round
      [[2,3]]                     //Loser 2nd round vs Winner preivous match
    ],
    [
      [[1,2]],                    //Final Round
      [[1,2]]                     //Final Consolidation
    ]
  ]
};


var otherExample = {
  "teams": [
    ["Team 1", "Team 2"],           //Team 1 vs Team 2
    ["Team 3", "Team 4"]            //Team 3 vs Team 4
  ],
  "results": [   
    [
      [[1,2], [23,4]],            //1st round: Team 1(1) vs Team 2(2) || Team 3(23) vs Team 4(4)
      [[5,6]],                    //2nd round: Winner match 1 vs Winner match 2
    ],
    [
      [[3,4]],                    //Losers: Losers 1st round
      [[2,3]]                     //Loser 2nd round vs Winner preivous match
    ],
    [
      [
        [1,2],                    //Determine 1st and 2nd
        [5,3]                     //Determine 3rd and 4th
      ],
      [
        [1,2]                    //Consolidation fianl
      ]
    ]
  ]
};



$(function() {
  $('#brackets').bracket({
    init: fourTeams 
  });
});

//Ocultamos que se repita la doble final
$(document).ready(function(){
  let finalRounds = document.querySelector('.finals');
  if (finalRounds && finalRounds.childElementCount > 1){
    finalRounds.firstElementChild.style.display = 'none';
  }
});