// Cinemax classic after-dark catalog.
// Keep this rotation separate from Showtime. Every scheduled title below is a
// full-length upload from a verified/licensed distributor channel on YouTube.
// Do not schedule trailers, clips, YouTube Movies storefront/DRM IDs or random reposts.
window.HERMIT_CATALOG = [
  { id:"MAX-CLASSIC-001", title:"Saturn 3", year:1980, collection:"Sci-Fi Cult Classic", runtimeSeconds:5231, videoId:"wgBnLO4Pnb0", source:"Popcornflix", sourceClass:"verified distributor", networkChannel:"Cinemax", contentClass:"Movie", cleared:true },
  { id:"MAX-CLASSIC-002", title:"Call of the Wild", year:1994, collection:"Classic Adventure", runtimeSeconds:5400, videoId:"qDd3Wuliw3E", source:"Popcornflix", sourceClass:"verified distributor", networkChannel:"Cinemax", contentClass:"Movie", cleared:true },
  { id:"MAX-CLASSIC-003", title:"Black Fox", year:1995, collection:"Western Action", runtimeSeconds:5520, videoId:"GI2TFFWrBlc", source:"Popcornflix", sourceClass:"verified distributor", networkChannel:"Cinemax", contentClass:"Movie", cleared:true },
  { id:"MAX-CLASSIC-004", title:"The Ranger, The Cook and a Hole in the Sky", year:1995, collection:"Mountain Adventure", runtimeSeconds:5576, videoId:"3sZpzJLmtFs", source:"Popcornflix", sourceClass:"verified distributor", networkChannel:"Cinemax", contentClass:"Movie", cleared:true },
  { id:"MAX-CLASSIC-005", title:"The Canterville Ghost", year:1996, collection:"Mystery / Gothic", runtimeSeconds:5504, videoId:"oWMJSl_ARSA", source:"Popcornflix", sourceClass:"verified distributor", networkChannel:"Cinemax", contentClass:"Movie", cleared:true },
  { id:"MAX-CLASSIC-006", title:"Hijack", year:1998, collection:"Action Thriller", runtimeSeconds:5431, videoId:"oOzODYq1i1A", source:"Popcornflix", sourceClass:"verified distributor", networkChannel:"Cinemax", contentClass:"Movie", cleared:true },
  { id:"MAX-CLASSIC-007", title:"Fever", year:1999, collection:"Dark Mystery Thriller", runtimeSeconds:5318, videoId:"NG4UEfI2qes", source:"Popcornflix", sourceClass:"verified distributor", networkChannel:"Cinemax", contentClass:"Movie", cleared:true }
].map(movie => ({ ...movie, posterUrl:"", watchUrl:`https://www.youtube.com/watch?v=${movie.videoId}` }));

window.INFINITY_CHANNEL = {
  id:"Cinemax",
  era:"1980s-1990s classic after-dark rotation",
  minimumYear:1980,
  genres:["action", "adventure", "thriller", "science fiction", "mystery", "western"],
  sourcePolicy:"Verified/licensed distributor full-length uploads only; no DRM storefront IDs, trailers, promos or random reposts.",
  schedulePolicy:"Cinemax has its own catalog and does not duplicate Showtime's scheduled movies."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Cinemax intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Cinemax", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Cinemax station break", durationSeconds:60, videoId:"", cleared:true }
];
