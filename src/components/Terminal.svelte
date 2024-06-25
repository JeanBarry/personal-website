<script>
const CONTENT_TYPES = {
	OUTPUT: "output",
	INPUT: "input",
};

const content = [
	{
		type: CONTENT_TYPES.INPUT,
		text: 'echo "svelte" >> frontend.txt',
	},
	{
		type: CONTENT_TYPES.INPUT,
		text: "ls",
		newChanges: true,
	},
	{
		type: CONTENT_TYPES.OUTPUT,
		text: "frontend.txt backend.txt devops.txt",
		newChanges: true,
	},
	{
		type: CONTENT_TYPES.INPUT,
		text: "cat frontend.txt",
		newChanges: true,
	},
	{
		type: CONTENT_TYPES.OUTPUT,
		text: "javascript<br/>react<br/>vue<br/>angular<br />nextjs<br/>svelte<br/>",
		newChanges: true,
	},
	{
		type: CONTENT_TYPES.INPUT,
		text: "git add .",
		newChanges: true,
	},
	{
		type: CONTENT_TYPES.INPUT,
		text: 'git commit -m "Learning about svelte"',
		newChanges: true,
	},
	{
		type: CONTENT_TYPES.INPUT,
		text: "git push origin learning",
		newChanges: true,
	},
	{
		type: CONTENT_TYPES.OUTPUT,
		text: `Enumerating objects: 1, done.<br />
    Counting objects: 100% (1/1), done.<br />
    Delta compresion using up to 4 threads.<br />
    Compresing objects: 100% (1/1) 684 bytes | 8.9MiB/s, done<br />
    Total 1 (delta 1), reused 0 (delta 0)<br />
    remote: Resolving deltas: 100% (1/1), completed with 1 local object.<br />
    To https://github.com/JeanBarry/me.git<br />
    52brf33..1s53df1 learning -> learning<br />
    `,
		newChanges: true,
	},
];
</script>

<div class="flex flex-col rounded-lg w-full max-w-[1200px] min-w-[350px]">
  <div class="grid grid-cols-3 bg-zinc-800 rounded-t-lg p-2">
    <div
      class="flex justify-center items-center gap-1.5 place-self-start self-center"
    >
      <div class="w-4 h-4 rounded-full bg-red-500"></div>
      <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
      <div class="w-4 h-4 rounded-full bg-green-500"></div>
    </div>
    <p class="text-zinc-300 text-sm place-self-center self-center">
      ~/Projects/me
    </p>
  </div>
  <div class="flex flex-col items-start bg-[#151515] px-2 pt-4 pb-1 gap-2">
    {#each content as instruction}
      <p class="text-sm text-white">
        {#if instruction.type === CONTENT_TYPES.INPUT}
          <span class="text-emerald-200">~/Projects/me</span>
          <span class="text-violet-400">&gt;&gt;</span>
          <span class="text-emerald-600">(</span><span class="text-green-400"
            >learning</span
          >{#if instruction.newChanges}<span class="text-yellow-500">*</span
            >{/if}<span class="text-emerald-600">)</span>
          {instruction.text}
        {:else}
          {@html instruction.text}
        {/if}
      </p>
    {/each}
    <div class="flex gap-2">
      <p class="text-sm text-white">
        <span class="text-emerald-200">~/Projects/me</span>
            <span class="text-violet-400">&gt;&gt;</span>
            <span class="text-emerald-600">(</span><span class="text-green-400">learning</span><span class="text-emerald-600">)</span>
          </p>
        <div class="w-2 h-4 bg-gray-400 animate-blink"></div>
    </div>
    <div class="w-full bg-zinc-800 h-8 flex justify-between items-center pl-2">
      <p class="text-sm text-zinc-400">0:zsh 1:vim</p>
      <div class="flex h-full">
        <div class="bg-zinc-500 flex items-center justify-center w-20 lg:w-28">
          <p class="text-sm text-white">06/25</p>
        </div>
        <div class="bg-gray-400 flex items-center justify-center w-20 lg:w-28">
          <p class="text-sm">18:19:22</p>
        </div>
      </div>
    </div>
  </div>
</div>
