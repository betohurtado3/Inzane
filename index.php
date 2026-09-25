<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>INZANE — Música y lanzamientos | 197 Records</title>
    <meta
      name="description"
      content="Música de INZANE. Escucha sus últimos lanzamientos en Spotify, Apple Music y YouTube."
    />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" type="image/png" href="public/logo.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    />
    <link rel="preload" as="image" href="img/bg/fondo-vertical-blur.webp" />
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <!-- ===== CAPAS DE FONDO (decorativas) ===== -->
    <!-- Capa 1: imagen vertical desenfocada, recorre la imagen al hacer scroll -->
    <div class="bg-layer" aria-hidden="true">
      <img class="bg-image" data-parallax="travel" src="img/bg/fondo-vertical-blur.webp" alt="" />
    </div>
    <!-- Capa 2: degradado oscuro encima de la imagen -->
    <div class="bg-shade" aria-hidden="true"></div>
    <!-- Capa 3: letras INZANE (horizontal en desktop / vertical en móvil) -->
    <div class="letters-layer" aria-hidden="true">
      <div class="letters" data-parallax="letters">
        <img src="img/letters/I.webp" alt="" />
        <img src="img/letters/N.webp" alt="" />
        <img src="img/letters/Z.webp" alt="" />
        <img src="img/letters/A.webp" alt="" />
        <img src="img/letters/N.webp" alt="" />
        <img src="img/letters/E.webp" alt="" />
      </div>
    </div>

    <div class="site-wrap">
      <!-- ===== HERO ===== -->
      <header class="hero-section">
        <h1 class="visually-hidden">INZANE</h1>
        <div class="logo-container">
          <img src="public/logo.png" alt="Logo de INZANE" />
        </div>
      </header>

      <!-- ===== TRACKS ===== -->
      <main class="tracks-section">
        <h2 class="section-title">Últimos lanzamientos</h2>
        <div id="tracks-container" class="tracks-container">
          <!-- Se genera dinámicamente con script.js -->
        </div>
      </main>

      <!-- ===== SOCIALS ===== -->
      <section class="socials-section">
        <h2 class="section-title">Escúchame en</h2>
        <div class="socials-grid">
          <a
            href="https://open.spotify.com/intl-es/artist/3RDSei5yWbQCiELOXJE7ss?si=Dzs7wsgcTMuMnEbWAEr8-g"
            class="social-card"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="img/icons/Spotify.png" alt="" />
            <span>Spotify</span>
          </a>
          <a
            href="https://www.youtube.com/@197records"
            class="social-card"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="img/icons/Youtube.png" alt="" />
            <span>YouTube</span>
          </a>
          <a
            href="https://music.apple.com/mx/artist/inzane/1526878519"
            class="social-card"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="img/icons/Apple.png" alt="" />
            <span>Apple Music</span>
          </a>
          <a
            href="https://www.instagram.com/_inzanee/"
            class="social-card"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="img/icons/Instagram.png" alt="" />
            <span>Instagram</span>
          </a>
        </div>
      </section>

      <!-- ===== FOOTER ===== -->
      <footer class="site-footer">
        <p>© 2026 INZANE · 197 Records. Todos los derechos reservados.</p>
      </footer>
    </div>

    <script src="script.js"></script>
  </body>
</html>