<script>
import Header from "./Header.svelte";
</script>

<div class="min-h-screen w-full relative flex flex-col" id="home">
  <!-- svelte-ignore a11y-media-has-caption -->
  <div class="absolute w-full h-full top-0 right-0 object-cover z-0 overflow-hidden">
      <video class="w-full h-full object-cover" autoplay muted loop aria-hidden>
          <source src="/assets/videos/bg.mp4" type="video/mp4" />
          <source src="/assets/videos/bg.webm" type="video/webm" />
          <source src="/assets/videos/bg.mkv" type="video/x-matroska" />
      </video>
  </div>
  <div class="absolute w-full h-full top-0-right-0 z-10 bg-black/80">
      <Header />
      <main class="flex flex-col items-center justify-center h-4/5 w-full">
        <h1 class="text-white text-5xl lg:text-7xl font-bold">Jean Barry</h1>
        <h2 class="text-white text-2xl lg:text-4xl">&lt;developer&gt;</h2>
      </main>
  </div>
</div>
