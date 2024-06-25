<form name="contact" method="post" data-netlify="true" class="flex flex-col items-center gap-3 w-full max-w-[800px]" data-netlify-recaptcha="true">
  <input type="hidden" name="form-name" value="contact">
  <div class="w-full">
    <label for="name" class="text-white">Name</label>
    <input class="p-2 w-full rounded-sm" type="text" name="name" id="name" maxlength="50" placeholder="John Doe" required>
  </div>
  <div class="w-full">
    <label for="email" class="text-white">Email</label>
    <input class="p-2 w-full rounded-sm" type="email" name="email" id="email" maxlength="50" placeholder="johndoe@gmail.com" required>
  </div>
  <div class="w-full">
    <label for="message" class="text-white">Message</label>
    <textarea class="p-2 w-full min-h-40 max-h-72 rounded-sm resize-none resize-textarea" name="message" id="message" placeholder="I'm interested in your profile, etc." required></textarea>
  </div>
  <div data-netlify-recaptcha="true"></div>
  <button class="p-2 w-full rounded-sm bg-white" type="submit">Send</button>
</form>

<style>
  .resize-textarea {
    field-sizing: content;
  }
</style>
