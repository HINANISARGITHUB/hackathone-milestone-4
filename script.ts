// listing element
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Type assertion
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const addressElement = document.getElementById('address') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLSelectElement;
  const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
  const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

  // Condition
  if (profilePictureInput && nameElement && emailElement && addressElement && phoneElement && educationElement && experienceElement && skillsElement) {

      // Function to update the resume
      function updateResume() {
          const name = nameElement.value;
          const email = emailElement.value; 
          const phone = phoneElement.value;
          const address = addressElement.value;
          const education = educationElement.value;
          const experience = experienceElement.value;
          const skills = skillsElement.value;  

          // Picture element
          const profilePictureFile = profilePictureInput.files?.[0];
          const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

          // Resume output
          const resumeOutput = `
              ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilePicture">` : ""}
              <p><strong>Name:</strong> <span class="editable" id="edit-name">${name}</span></p>
              <p><strong>Email:</strong> <span class="editable" id="edit-email">${email}</span></p>
              <p><strong>Phone:</strong> <span class="editable" id="edit-phone">${phone}</span></p>
              <p><strong>Address:</strong> <span class="editable" id="edit-address">${address}</span></p>

              <h3>Education:</h3>
              <p class="editable" id="edit-education">${education}</p>

              <h3>Experience:</h3>
              <p class="editable" id="edit-experience">${experience}</p>

              <h3>Skills:</h3>
              <p class="editable" id="edit-skills">${skills}</p>
          `;

          // Display output
          const resumeOutputElement = document.getElementById("resumeOutput");
          if (resumeOutputElement) {
              resumeOutputElement.innerHTML = resumeOutput;
              makeEditable();
          }
      }

      // Event listeners without reloading
      nameElement.addEventListener('input', updateResume);
      emailElement.addEventListener('input', updateResume);
      addressElement.addEventListener('input', updateResume);
      phoneElement.addEventListener('input', updateResume);
      educationElement.addEventListener('change', updateResume);
      experienceElement.addEventListener('input', updateResume);
      skillsElement.addEventListener('input', updateResume);
      profilePictureInput.addEventListener('change', updateResume);

      // Initial call to update resume
      updateResume();
  }
});

function makeEditable() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
      element.addEventListener("click", function () {
          const currentElement = element as HTMLElement;
          const currentValue = currentElement.textContent || "";

          // Replace content
          const input = document.createElement("input");
          input.type = "text";
          input.value = currentValue;
          input.classList.add("editing-input");

          input.addEventListener("blur", function () {
              currentElement.textContent = input.value;
              currentElement.style.display = "inline";
              input.remove();
          });

          currentElement.style.display = "none";
          currentElement.parentNode?.insertBefore(input, currentElement);
          input.focus();
      });
  });
}
