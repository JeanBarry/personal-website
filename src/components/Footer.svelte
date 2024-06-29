<script>
import {
	IconBrandX,
	IconBrandGithub,
	IconChevronsUp,
} from "@tabler/icons-svelte";
</script>

<footer class="h-[8vh] bg-zinc-600 w-full flex items-center justify-between px-10">
  <div class="flex items-center gap-4">
    <a href="https://x.com/JeanFrancoisB7" aria-label="Go to x social network profile">
      <IconBrandX size={30} color="#FFFFFF" />
    </a>
    <a href="https://github.com/JeanBarry" aria-label="Go to github profile">
      <IconBrandGithub size={30} color="#FFFFFF" />
    </a>
  </div>
  <a href="#home" aria-label="Return to the top of the page">
    <IconChevronsUp class="animate-bounce" size={30} color="#FFFFFF" />
  </a>
</footer>
