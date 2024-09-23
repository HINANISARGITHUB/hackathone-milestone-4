var _a;
// listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var addressElement = document.getElementById('address');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Condition
    if (profilePictureInput && nameElement && emailElement && addressElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Function to update the resume
        function updateResume() {
            var _a;
            var name = nameElement.value;
            var email = emailElement.value;
            var phone = phoneElement.value;
            var address = addressElement.value;
            var education = educationElement.value;
            var experience = experienceElement.value;
            var skills = skillsElement.value;
            // Picture element
            var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
            var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
            // Resume output
            var resumeOutput = "\n              ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilePicture\">") : "", "\n              <p><strong>Name:</strong> <span class=\"editable\" id=\"edit-name\">").concat(name, "</span></p>\n              <p><strong>Email:</strong> <span class=\"editable\" id=\"edit-email\">").concat(email, "</span></p>\n              <p><strong>Phone:</strong> <span class=\"editable\" id=\"edit-phone\">").concat(phone, "</span></p>\n              <p><strong>Address:</strong> <span class=\"editable\" id=\"edit-address\">").concat(address, "</span></p>\n\n              <h3>Education:</h3>\n              <p class=\"editable\" id=\"edit-education\">").concat(education, "</p>\n\n              <h3>Experience:</h3>\n              <p class=\"editable\" id=\"edit-experience\">").concat(experience, "</p>\n\n              <h3>Skills:</h3>\n              <p class=\"editable\" id=\"edit-skills\">").concat(skills, "</p>\n          ");
            // Display output
            var resumeOutputElement = document.getElementById("resumeOutput");
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
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content
            var input = document.createElement("input");
            input.type = "text";
            input.value = currentValue;
            input.classList.add("editing-input");
            input.addEventListener("blur", function () {
                currentElement.textContent = input.value;
                currentElement.style.display = "inline";
                input.remove();
            });
            currentElement.style.display = "none";
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
            input.focus();
        });
    });
}
