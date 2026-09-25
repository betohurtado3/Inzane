// ============================= //
//  PERFILES DEL ARTISTA          //
//  (se usan cuando una canción   //
//   no tiene link en esa         //
//   plataforma)                  //
// ============================= //

const PROFILE = {
  spotify: "https://open.spotify.com/intl-es/artist/3RDSei5yWbQCiELOXJE7ss?si=Dzs7wsgcTMuMnEbWAEr8-g",
  youtube: "https://www.youtube.com/@197records",
  appleMusic: "https://music.apple.com/mx/artist/inzane/1526878519",
  instagram: "https://www.instagram.com/_inzanee/"
};

// ============================= //
//  DATOS DE TRACKS               //
//  null = sin link → usa perfil  //
// ============================= //

const tracks = [
  {
    title: "Sin tilde",
    artist: "INZANE, L Diablo, AK M4RKO, KBK",
    duration: "2:48",
    cover: "img/Portadas/SinTilde.png",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/2NMr3KfgmM4L28hhRFEMmY?si=d4a323758b974b89",
      youtube: null,
      appleMusic: null
    }
  },
  {
    title: "TramaDOLL",
    artist: "INZANE, L Diablo, KBK",
    duration: "2:52",
    cover: "img/Portadas/TramaDOLL.png",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/6bzzZeGAlO2OVlMmux7HUF?si=e6e6b3fb2a134973",
      youtube: null,
      appleMusic: null
    }
  },
  {
    title: "EZ freestyle",
    artist: "INZANE & KBK",
    duration: "2:15",
    cover: "img/Portadas/EzFreestyle.png",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/4DdloQTs00jhQAgrxy0Pkk?si=99915ac593514d24",
      youtube: "https://www.youtube.com/watch?v=a6nQFiEcR8w",
      appleMusic: null
    }
  },
  {
    title: "Bellak-Era",
    artist: "INZANE FT. El Lic",
    duration: "2:49",
    cover: "img/Portadas/Bellakera.png",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/5RWpXf5NDxTt51oqRznLHQ?si=fbc3d798d9f04e61",
      youtube: "https://www.youtube.com/watch?v=rIrwRJgpHk0",
      appleMusic: "https://music.apple.com/mx/song/bellak-era/1874845810"
    }
  },
  {
    title: "Kiwifresa",
    artist: "INZANE & KBK",
    duration: "2:58",
    cover: "img/Portadas/KIWIFRESA.png",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/1GN8BX5Zrm7cDfZYjQ5v6i?si=ca4f7e3c8958489d",
      youtube: "https://youtu.be/XNN4nsnPWms",
      appleMusic: "https://music.apple.com/mx/song/kiwifresa/1858121025"
    }
  },
  {
    title: "Bvlgari",
    artist: "INZANE & KBK",
    duration: "3:11",
    cover: "img/Portadas/BVLGARI.jpg",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/05R63ZBeMxAnxTESTKfsn0?si=f852e46a55814220",
      youtube: "https://youtu.be/57KDaESnRQA",
      appleMusic: "https://music.apple.com/mx/song/bvlgari/1842738305"
    }
  },
  {
    title: "Kickflip",
    artist: "INZANE & KBK",
    duration: "2:02",
    cover: "img/Portadas/Kickflip.png",
    platforms: {
      // ⚠️ Mismo ID que Kiwifresa — revisar cuál es el correcto
      spotify: "https://open.spotify.com/intl-es/track/1GN8BX5Zrm7cDfZYjQ5v6i?si=95d0990b1a6144e1",
      youtube: "https://youtu.be/K0QaFHKZVZw",
      appleMusic: "https://music.apple.com/mx/album/kickflip-single/1818442613"
    }
  }
];

const PLATFORM_UI = [
  { key: "spotify", label: "Spotify", icon: "img/icons/Spotify.png" },
  { key: "youtube", label: "YouTube", icon: "img/icons/Youtube.png" },
  { key: "appleMusic", label: "Apple Music", icon: "img/icons/Apple.png" }
];

// ============================= //
//  RENDERIZAR TRACKS             //
// ============================= //

function renderTracks() {
  const container = document.getElementById("tracks-container");
  if (!container) return;

  container.innerHTML = tracks
    .map((track) => {
      const actions = PLATFORM_UI.map((p) => {
        const url = track.platforms[p.key] || PROFILE[p.key];
        const isProfile = !track.platforms[p.key];
        const title = isProfile
          ? `INZANE en ${p.label}`
          : `Escuchar "${track.title}" en ${p.label}`;
        return `
          <a href="${url}" target="_blank" rel="noopener noreferrer"
             title="${title}" aria-label="${title}">
            <img src="${p.icon}" alt="" />
          </a>`;
      }).join("");

      return `
        <article class="track-card">
          <div class="cover">
            <img src="${track.cover}" alt="Portada de ${track.title} — ${track.artist}"
                 loading="lazy" decoding="async" />
          </div>
          <div class="info">
            <h3>${track.title}</h3>
            <p class="artist">${track.artist}</p>
            <div class="meta">
              <span class="duration">${track.duration}</span>
            </div>
          </div>
          <div class="actions">${actions}</div>
        </article>`;
    })
    .join("");
}

// ============================= //
//  PARALLAX (fondo + letras)     //
//  Solo transform → barato       //
// ============================= //

function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bg = document.querySelector('[data-parallax="travel"]');
  const letters = document.querySelector('[data-parallax="letters"]');
  let ticking = false;
  let vh = window.innerHeight;
  let maxScroll = 1;
  let bgH = 0;
  let lettersH = 0;

  function measure() {
    vh = window.innerHeight;
    maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
    bgH = bg ? bg.offsetHeight : 0;
    lettersH = letters ? letters.offsetHeight : 0;
    update();
  }

  function update() {
    ticking = false;
    const p = Math.min(1, Math.max(0, window.scrollY / maxScroll)); // 0 → 1

    // Fondo: recorre la imagen de arriba a abajo durante todo el scroll
    if (bg) {
      const travel = Math.max(0, bgH - vh);
      bg.style.transform = `translate3d(0, ${-p * travel}px, 0)`;
    }

    // Letras: si son más altas que la pantalla (móvil) se recorren completas;
    // si caben (desktop) flotan suavemente alrededor del centro
    if (letters) {
      let y;
      if (lettersH > vh) {
        y = -p * (lettersH - vh);
      } else {
        y = (vh - lettersH) / 2 + (0.5 - p) * vh * 0.35;
      }
      letters.style.transform = `translate3d(0, ${y}px, 0)`;
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", measure);
  window.addEventListener("load", measure); // re-medir cuando cargan imágenes
  measure();
}

// ============================= //
//  INIT                          //
// ============================= //

function init() {
  renderTracks();
  initParallax();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}