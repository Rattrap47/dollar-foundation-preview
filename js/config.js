/* ==========================================================================
   Dollar Foundation — site settings.
   The only file that should need editing to go live. Public values only.
   ========================================================================== */
window.DF_CONFIG = {
  // Where the contact form POSTs JSON (Formspree, Web3Forms, a Worker, etc.).
  // Leave empty and the form falls back to the visitor's own email app.
  contactEndpoint: '',

  // The foundation's inbox (the founder's). Also printed on the contact page,
  // the get-involved page, in every footer and in the structured data on
  // index.html — change all of them together.
  // Empty = the form points people at the phone number and Facebook instead.
  contactEmail: 'richardamoakotvl@gmail.com',

  // Donation page (Paystack payment page, Flutterwave, PayPal, GoFundMe, etc.).
  // Leave empty and the Donate buttons stay pointed at the "How to give" section.
  donateUrl: '',

  // WhatsApp number in international format, digits only (e.g. '233246030338').
  // Only set this once the foundation confirms the number is on WhatsApp.
  whatsappNumber: '',

  facebookUrl: 'https://www.facebook.com/dollarfoundation1'
};
