const gaId = 'UA-68713352-2';

let gaProperty = '' + gaId;
if (!gaIsEnabled()) {
  gaProperty = 'disabled-' + gaId;
}

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', gaProperty, {'anonymize_ip': true});

function gaIsEnabled() {
  const gaDisabled = localStorage.getItem('gaDisabled') === 'true' || false;
  const cookiesAllowed = localStorage.getItem('consent') === 'true' || false;
  return !gaDisabled && cookiesAllowed;
}

function disableGA() {
  localStorage.setItem('gaDisabled', true);
  document.getElementsByClassName('opt-out-success')[0].style.display = 'block';
}