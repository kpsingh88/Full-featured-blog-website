// Get the modals and the buttons that open them
const modal = document.getElementById('modal');
const btn = document.getElementById('open-modal-btn');
const cancelBtn = document.getElementById('cancel-btn');
const saveBtn = document.getElementById('save-btn');

const modal1 = document.getElementById('modal1');
const btn1 = document.getElementById('open-modal-btn1');
const cancelBtn1 = document.getElementById('cancel-btn1');
const saveBtn1 = document.getElementById('save-btn1');

const modal2 = document.getElementById('modal2');
const btn2 = document.getElementById('open-modal-btn2');
const cancelBtn2 = document.getElementById('cancel-btn2');
const saveBtn2 = document.getElementById('save-btn2');

// Get the modal and the button that opens it
const changePasswordModal = document.getElementById('modal3');
const openChangePasswordModalBtn = document.getElementById('open-modal-btn3');

// Get the form and the buttons from the modal
const changePasswordForm = document.getElementById('change-password-form');
const cancelChangePasswordBtn = document.getElementById('cancel-btn3');
const saveChangePasswordBtn = document.getElementById('save-btn3');





 // When the user clicks on the cancel button or anywhere outside the email modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modal1) {
      modal1.style.display = "none";
    } else if (event.target == modal2) {
		modal2.style.display = "none";
	  } else if (event.target == changePasswordModal) {
		changePasswordModal.style.display = "none";
	  }
  }

  // When the user clicks on the button, open the email modal
  btn.onclick = function() {
    modal.style.display = "block";
  }


  cancelBtn.onclick = function() {
    modal.style.display = "none";
  }

  
  // When the user clicks on the save button, update the email address and close the email modal
  saveBtn.onclick = function() {
    const newEmail = document.getElementById('email').value;
    // Perform some validation on the email address here
    // ...
    // If the email address is valid, update it and close the email modal
    // ...
    modal.style.display = "none";
  }

  
  // When the user clicks on the button, open the username modal
  btn1.onclick = function() {
    modal1.style.display = "block";
  }

  cancelBtn1.onclick = function() {
    modal1.style.display = "none";
  }

  // When the user clicks on the save button, update the username and close the username modal
  saveBtn1.onclick = function() {
    const newUsername = document.getElementById('username').value;
    // Perform some validation on the username here
    // ...
    // If the username is valid, update it and close the username modal
    // ...
    modal1.style.display = "none";
  }

  // When the user clicks on the button, open the modal
btn2.onclick = function() {
	modal2.style.display = "block";
  }

  cancelBtn2.onclick = function() {
	modal2.style.display = "none";
  }

  
  // When the user clicks on the save button, update the cover picture and close the modal
saveBtn2.onclick = function(event) {
	event.preventDefault(); // prevent the default form submission behavior
	const newCoverPicture = document.getElementById('cover-picture').value;
	// Perform some validation on the cover picture here
	// ...
	// If the cover picture is valid, update it and close the modal
	// ...
	modal2.style.display = "none";
  }
  


// When the user clicks on the button, open the modal
openChangePasswordModalBtn.onclick = function() {
  changePasswordModal.style.display = "block";
}
cancelChangePasswordBtn.onclick = function() {
	changePasswordModal.style.display = "none";
  }

// When the user clicks on the save button, submit the form and close the modal
changePasswordForm.onsubmit = function(event) {
  event.preventDefault();
  // Perform some validation on the old and new passwords here
  // ...
  // If the passwords are valid, submit the form and close the modal
  // ...
  changePasswordModal.style.display = "none";
}

  // Get the popup button element
const popupBtn = document.getElementById('open-modal-btn');

// Add a click event listener to the popup button
popupBtn.addEventListener('click', function(event) {
  // Prevent the default form submission or link click behavior
  event.preventDefault();

  // Open the popup window
  // ...
});
const popupBtn1 = document.getElementById('open-modal-btn1');

// Add a click event listener to the popup button
popupBtn1.addEventListener('click', function(event) {
  // Prevent the default form submission or link click behavior
  event.preventDefault();

  // Open the popup window
  // ...
});

const popupBtn2 = document.getElementById('open-modal-btn2');

// Add a click event listener to the popup button
popupBtn2.addEventListener('click', function(event) {
  // Prevent the default form submission or link click behavior
  event.preventDefault();

  // Open the popup window
  // ...
});

const popupBtn3 = document.getElementById('open-modal-btn3');

// Add a click event listener to the popup button
popupBtn3.addEventListener('click', function(event) {
  // Prevent the default form submission or link click behavior
  event.preventDefault();

  // Open the popup window
  // ...
});


