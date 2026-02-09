<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar active="register" />

<section class="pt-32 max-w-xl mx-auto px-6">
  <h1 class="font-[Teko] text-4xl text-[#F6B14B] mb-3">Join Team 1540</h1>

  <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    <form action="#">
      
      <div class="mb-6">
        <label for="first_name" class="block text-lg font-medium text-gray-700 mb-2">First Name (required)</label>
        <input type="text" id="first_name" name="first_name" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]" />
      </div>

      <div class="mb-6">
        <label for="last_name" class="block text-lg font-medium text-gray-700 mb-2">Last Name (required)</label>
        <input type="text" id="last_name" name="last_name" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]" />
      </div>

      <div class="mb-6">
        <label for="email" class="block text-lg font-medium text-gray-700 mb-2">Email (required)</label>
        <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]" />
      </div>

      <div class="mb-6">
        <label for="grade" class="block text-lg font-medium text-gray-700 mb-2">Grade (required)</label>
        <select id="grade" name="grade" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]">
          <option value="">Select Grade</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
      </div>

      <div class="mb-6">
        <label for="programs" class="block text-lg font-medium text-gray-700 mb-2">Program(s) of Interest</label>
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="robotics" name="programs[]" value="Robotics" class="focus:ring-2 focus:ring-[#3581B8]" />
            <label for="robotics" class="text-gray-700">Robotics</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="community_engineering" name="programs[]" value="Community Engineering" class="focus:ring-2 focus:ring-[#3581B8]" />
            <label for="community_engineering" class="text-gray-700">Community Engineering</label>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <label for="comments" class="block text-lg font-medium text-gray-700 mb-2">Comments/Questions</label>
        <textarea id="comments" name="comments" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]" placeholder="Enter your comments or questions here..."></textarea>
      </div>

      <div class="text-center">
        <button type="submit" class="w-full py-3 bg-[#FF4848] text-white font-semibold rounded-lg hover:bg-[#FF8547] focus:outline-none focus:ring-2 focus:ring-[#FF4848]">
          Submit
        </button>
      </div>
    </form>
  </div>
</section>
