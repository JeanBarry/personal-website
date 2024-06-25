<script>
import Hero from "../Hero.svelte";
import Terminal from "../Terminal.svelte";
import Form from "../Form.svelte";
import Footer from "../Footer.svelte";
</script>

<Hero />
<section class="w-full min-h-screen bg-neutral-700 px-10 flex items-center justify-center">
  <Terminal />
</section>
<section id="contact" class="w-full min-h-[92vh] bg-black flex flex-col items-center justify-center pt-10 px-10">
  <p class="text-white text-3xl">Contact</p>
  <Form />
</section>
<Footer />
