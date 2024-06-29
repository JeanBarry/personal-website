<script>
import { IconBrandX, IconBrandGithub, IconMail } from "@tabler/icons-svelte";
const icons = [
	{
		icon: IconBrandX,
		url: "https://x.com/JeanFrancoisB7",
		label: "Go to x social network profile",
		external: true,
	},
	{
		icon: IconBrandGithub,
		url: "https://github.com/JeanBarry",
		label: "Go to github profile",
		external: true,
	},
	{
		icon: IconMail,
		url: "#contact",
		label: "Navigate to the contact section of the page",
		external: false,
	},
];
</script>

<header class="h-fit lg:px-20">
    <ul class="w-full flex justify-around items-center lg:justify-end lg:gap-12 p-5 h-full">
        {#each icons as icon}
            <li>
              <a class="relative flex items-center justify-center p-8" href={icon.url} aria-label={icon.label} target={icon.external ? '_blank': '_self'} rel="noreferrer">
                <svelte:component class="absolute top-0 left-0 h-10 w-10 lg:h-12 lg:w-12" this={icon.icon} color={'#FFFFFF'} />
                <div class="absolute opacity-0 top-0 left-0 hover:opacity-100">
                  <svelte:component class="absolute blur-xl animate-shadowWiggle h-10 w-10 lg:h-12 lg:w-12 opacity-70" this={icon.icon} color={'#f6050a'} />
                  <svelte:component class="absolute animate-shadowWiggle h-10 w-10 lg:h-12 lg:w-12 opacity-70" this={icon.icon} color={'#f6050a'} />
                  <svelte:component class="absolute blur-xl animate-superShadowWiggle h-10 w-10 lg:h-12 lg:w-12 opacity-70" this={icon.icon} color={'#1ef2f1'} />
                  <svelte:component class="absolute animate-superShadowWiggle h-10 w-10 lg:h-12 lg:w-12 opacity-70" this={icon.icon} color={'#1ef2f1'} />
                </div>
              </a>
            </li>
        {/each}
    </ul>
</header>
