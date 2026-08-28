# full lirbary here
https://formspree.io/library/
you are permitted to use it

# HTML
<!-- modify this form HTML and place wherever you want your form -->
<form
  action="https://formspree.io/f/mwlkevkp"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>


# AJAX
<!-- modify this form HTML and place wherever you want your form -->
<div data-fs-success>Thanks for your submission!</div>
<div data-fs-error>Oops! There was a problem submitting your form.</div>
<form id="my-form">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" data-fs-field />
  <span data-fs-error="email"></span>
  <label for="message">Message:</label>
  <input type="text" id="message" name="message" data-fs-field />
  <span data-fs-error="message"></span>
  <button type="submit" data-fs-submit-btn>Submit</button>
</form>

<!-- Place these scripts at the end of the body tag -->
<script>
  window.formspree =
    window.formspree ||
    function () {
      (formspree.q = formspree.q || []).push(arguments);
    };
  formspree("initForm", {
    formElement: "#my-form",
    formId: "mwlkevkp",
  });
</script>
<script src="https://unpkg.com/@formspree/ajax@1" defer></script>

# REACT
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwlkevkp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;


# HTML with file upload
<!-- modify this form HTML and place wherever you want your form -->
<form
  action="https://formspree.io/f/mwlkevkp"
  method="POST"
  enctype="multipart/form-data"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your file:
    <input type="file" name="upload">
  </label>
  <button type="submit">Send</button>
</form>



# Formbutton
<!-- Read the Formbutton docs at formspree.io/formbutton/docs. See more examples at codepen.io/formspree -->
<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
<script>
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/mwlkevkp",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });
</script>