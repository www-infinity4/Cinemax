// Unique seed bucket 4/8 for Cinemax.
// Control Phi's movie source farm expands this channel toward 96 distinct,
// profile-matched full movies. The seed IDs are never shared with another
// movie-channel seed catalog.
(function(){
  "use strict";

  const rows = [
    ["Accidental Family",5672,"XH63ZMpgsAk","Movie Central"],
    ["Cleaver Family Reunion",5445,"r7urqvC_avI","Movie Central"],
    ["The Little Mermaid",5887,"D7UeODAj7Sc","Family Central"],
    ["The Jungle Bunch",5840,"ginVeOgYhF0","Shout! Studios"],
    ["Saving Santaland",5450,"d-EIS1Uik8M","Family Central"],
    ["Mum Said",5577,"O-9hwCESRAA","EncourageTV"],
    ["Hee Haw Farm",3949,"EwjctUn1Sas","EncourageTV"],
    ["A Gift Horse",4970,"AwyNQenGeBM","Movie Central"],
    ["Snowtime!",4933,"zwdXNakjztU","Shout! Studios"],
    ["Miracle at Sage Creek",5016,"gYp_hRYT7dw","FilmRise Movies"]
  ];

  window.HERMIT_CATALOG=rows.map(function(row,index){return{id:"CINEMAX-SEED-"+String(index+1).padStart(3,"0"),title:row[0],year:null,collection:"Sci-Fi / Action Seed",runtimeSeconds:row[1],videoId:row[2],source:row[3],networkChannel:"Cinemax",contentClass:"Seed Feature",rating:"Unrated",cleared:true,posterUrl:""};});
  window.INFINITY_CHANNEL={id:"CINEMAX",sourcePolicy:"Unique static seed bucket 4/8. Runtime catalog expansion comes from Cinemax's own Control Phi source profile.",schedulePolicy:"Seven-day no-repeat scheduler. Missing inventory stays empty until unique sources are harvested; it never wraps the seed list."};
  window.HERMIT_COMMERCIALS=[{id:"AD-001",title:"Cinemax intermission",durationSeconds:60,videoId:"",cleared:true}];
})();
