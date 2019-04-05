function onSignIn(googleUser) {
  postlogin()
  if (!localStorage.getItem('token')) {
    const id_token = googleUser.getAuthResponse().id_token
    $.ajax({
        url: 'http://localhost:3000/google-login',
        method: 'POST',
        data: {
          token: id_token
        }
      })
      .done(response => {

        localStorage.setItem('token', response.token)



      })
      .fail(err => {
        console.log(err)
      })
  }
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.


}

function prelogin() {

  $('#sign-out').hide()

}

function postlogin() {
  $('#sign-in').hide()
  $('#sign-out').show()

}

function postlogout() {
  $('#sign-in').show()
  $('#sign-out').hide()

}


function getIndex() {
  $.ajax({
      url: 'http://127.0.0.1:3000/index',
      method: 'GET',
      headers: {
        token: localStorage.token
      }
    })
    .done(function (response) {
      // console.log(response)
      console.log(response)

    })
    .fail(function (jqXHR, textStatus) {
      console.log('request failed', textStatus)
    })
}


function signOut() {
  postlogout()
  var auth2 = gapi.auth2.getAuthInstance();

  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.clear()
}




$(document).ready(function () {
  $('#sign-out').hide()
  getIndex()
})





 