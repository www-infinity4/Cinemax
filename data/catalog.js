// Cinemax is 1990 onward with an action/crime/thriller/sci-fi identity.
// Sources were checked for full-length runtimes and current YouTube availability.
window.HERMIT_CATALOG = [
  { id:"MAX-001", title:"Sneakers", year:1992, collection:"Tech Caper", runtimeSeconds:7516, videoId:"Qy9XYQBBIJ4", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-002", title:"Stargate", year:1994, collection:"Science-Fiction Adventure", runtimeSeconds:7268, videoId:"lsuY5dYxOCs", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-003", title:"Crouching Tiger, Hidden Dragon", year:2000, collection:"Martial-Arts Epic", runtimeSeconds:7208, videoId:"SAGdBlJrMSA", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-004", title:"Clueless", year:1995, collection:"Modern Comedy Classic", runtimeSeconds:5834, videoId:"fajG1C0xj9c", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-005", title:"The Longest Yard", year:2005, collection:"Sports Action Comedy", runtimeSeconds:6808, videoId:"uGJv_zSRiR0", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-006", title:"Wanted", year:2008, collection:"High-Impact Action", runtimeSeconds:6593, videoId:"bdEqvgVSI2Y", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-007", title:"Zodiac", year:2007, collection:"Crime Investigation", runtimeSeconds:9459, videoId:"ZNOHCuF1Vns", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-008", title:"Payback", year:1999, collection:"Neo-Noir Crime", runtimeSeconds:5201, videoId:"naG_MI5dsbo", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-009", title:"Ava", year:2020, collection:"Assassin Thriller", runtimeSeconds:5821, videoId:"CvZC1dy3LsQ", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-010", title:"Assault on Precinct 13", year:2005, collection:"Siege Thriller", runtimeSeconds:6525, videoId:"mKqIlKhS0YE", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-011", title:"The Fog", year:2005, collection:"Supernatural After Dark", runtimeSeconds:5995, videoId:"J2UYk9HPz28", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-012", title:"Survivor", year:2015, collection:"Conspiracy Action", runtimeSeconds:5799, videoId:"fzfMsnqD-yM", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-013", title:"Rage", year:2014, collection:"Revenge Thriller", runtimeSeconds:5895, videoId:"_MRTR3VGhfc", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-014", title:"Stephen King's A Good Marriage", year:2014, collection:"Psychological Thriller", runtimeSeconds:6093, videoId:"VGW1ShX2_hU", source:"YouTube Movies", networkChannel:"Cinemax", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"Cinemax",
  era:"1990-2026",
  minimumYear:1990,
  genres:["action", "crime", "thriller", "science fiction", "adventure"],
  schedulePolicy:"No title or YouTube video ID may air on another Infinity channel on the same station date."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Cinemax intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Cinemax", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Cinemax station break", durationSeconds:60, videoId:"", cleared:true }
];

(function syncInfinityChannels(){
  if (document.querySelector('script[data-infinity-channels]')) return;
  const script = document.createElement('script');
  script.src = 'https://www-infinity4.github.io/TNT/channels.js';
  script.dataset.infinityChannels = '1';
  document.head.appendChild(script);
})();
