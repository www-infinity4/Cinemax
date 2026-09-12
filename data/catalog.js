// Cinemax resilient catalog.
// Paid YouTube Movies/DRM listings are excluded because protected storefront IDs
// are not dependable third-party embeds. Keep the 1990+ action/adventure identity
// while preferring ordinary full-length uploads that can play inside the station.
window.HERMIT_CATALOG = [
  { id:"MAX-SAFE-001", title:"Black Fox", year:1995, collection:"Western Action", runtimeSeconds:5520, videoId:"GI2TFFWrBlc", source:"Established full-length upload", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-SAFE-002", title:"Chairman of the Board", year:1998, collection:"Late-Night Comedy", runtimeSeconds:5735, videoId:"jse-_ROi4sI", source:"Ordinary full-length YouTube upload", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-SAFE-003", title:"Moving McAllister", year:2007, collection:"Road Adventure Comedy", runtimeSeconds:5340, videoId:"mVZOMXWsExs", source:"Established full-length upload", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-SAFE-004", title:"Khumba", year:2013, collection:"Adventure Feature", runtimeSeconds:5100, videoId:"tf7sVfOjWYU", source:"Established full-length upload", networkChannel:"Cinemax", cleared:true },
  { id:"MAX-SAFE-005", title:"Runs in the Family", year:2023, collection:"Adventure Comedy", runtimeSeconds:6300, videoId:"AuwUwN1JVec", source:"Established full-length upload", networkChannel:"Cinemax", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"Cinemax",
  era:"1990-2026",
  minimumYear:1990,
  genres:["action", "adventure", "thriller", "science fiction", "comedy"],
  sourcePolicy:"No YouTube Movies DRM IDs, age-restricted videos, trailers, promos or short clips.",
  schedulePolicy:"Only ordinary full-length uploads may enter the live rotation."
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
