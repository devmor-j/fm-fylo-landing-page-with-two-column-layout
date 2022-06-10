// hold forms inside a null-prototyped object for security reasons
const allForms = Object.create(null);

document.querySelectorAll('form')
  .forEach(form => {
    // if a form has no id it won't be available here
    if (form.id.length < 1) return;
    allForms[form.id] = form;
  })

// allForms now contains all form elements named with their ids
// we freeze allForms because we don't want to create new forms later on
Object.freeze(allForms);


// we use regex to validate emails
// though validations must also occur in the back-end
function validateEmail(email) {
  const emailValidationRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

  if (emailValidationRegex.test(email)) return true;
  return false;
}

// when any of the forms with id emits submit event
function onFormSubmit(event) {
  event.preventDefault();

  const formTarget = event.target;
  const formTargetData = Object.freeze(
    Object.fromEntries(
      new FormData(formTarget)
    )
  );

  const errorMessageElement = formTarget.querySelector('small');
  const isEmailValid = validateEmail(formTargetData['user-email'])

  if (isEmailValid) {
    errorMessageElement.classList.add('hidden')
  } else {
    errorMessageElement.classList.remove('hidden')
  }
}

// when user clicks on input again we remove possible error messages from previous states
function hideErrorMessageElement(event) {
  // find error element in this case 'small' is next sibling to 'input' element
  const errorMessageElement = event.target.nextElementSibling;

  // hide it using 'hidden' class of tailwind
  errorMessageElement.classList.add('hidden')
}
