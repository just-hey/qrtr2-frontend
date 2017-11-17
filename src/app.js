// const baseURL = 'http://localhost:3000/'
const baseURL = 'https://damp-atoll-31773.herokuapp.com/'

//on the home page, this is a button not the nav bar
$('#listTherapists').on('click', () => {
  axios.get(`${baseURL}therapists`)
    .then(response=> {
      for (var i = 0; i < response.data.data.length; i++) {
        $('#therapist_list').append(`<br><li>${response.data.data[i].first_name} ${response.data.data[i].last_name}, ID: ${response.data.data[i].id}</li>`)
      }
    })
})

//on the home page, this is a button not the nav bar
$('#listClients').on('click', () => {
  axios.get(`${baseURL}clients`)
    .then(response=> {
      for (var i = 0; i < response.data.data.length; i++) {
        $('#client_list').append(`<br><li>${response.data.data[i].first_name} ${response.data.data[i].last_name}, ID: ${response.data.data[i].id}</li>`)
      }
    })
})

//on the home page, this is a button not the nav bar
$('#listNotes').on('click', () => {
  axios.get(`${baseURL}notes`)
    .then(response => {
      for (var i = 0; i < response.data.data.length; i++) {
        $('#note_list').append(`<br><li>Therapist ID: ${response.data.data[i].therapist_id}, Client ID: ${response.data.data[i].client_id}, Created: ${response.data.data[i].created_at}</li>`)
      }
    })
})

//on therapist page, this should get only 1 therapist
$('#getATherapist').on('click', (event) => {
  event.preventDefault()
  let id = $('#tID').val()
  axios.get(`${baseURL}therapists/${id}`)
    .then(response => {
      console.log(response);
      console.log('almost to fuckfuckfuck', response.data.data);
      let bullshit = response.data.data

      $('#fuckfuckfuck').html('<h1>' + response.data.data[0].first_name + '</h1>')
    })
})

//generates list soap notes
$(document).ready( () => {
  axios.get(`${baseURL}notes`)
    .then(response=> {
      for (var i = 0; i < response.data.data.length; i++) {
        $('#note_list').append(`<br><li>Therapist ID: ${response.data.data[i].therapist_id}, Client ID: ${response.data.data[i].client_id},<br> Created: ${response.data.data[i].created_at}<br> Content: ${response.data.data[i].content}</li>`)
      }
    })
})

//generates list of therapists
$(document).ready( () => {
  axios.get(`${baseURL}therapists`)
    .then(response=> {
      for (var i = 0; i < response.data.data.length; i++) {
        $('#therapistList').append(`<br><li>${response.data.data[i].first_name} ${response.data.data[i].last_name}, ID: ${response.data.data[i].id}</li>`)
      }
    })
})

//generates list of clients
$(document).ready( () => {
  axios.get(`${baseURL}clients`)
    .then(response=> {
      for (var i = 0; i < response.data.data.length; i++) {
        $('#clientList').append(`<br><li class="getANote">${response.data.data[i].first_name} ${response.data.data[i].last_name}, ID: ${response.data.data[i].id}</li>`)
      }
    })
})

//create a new note
$('#newNote').on('click', (event) => {
  event.preventDefault()
  let therapist_id = $('#tID').val()
  let client_id = $('#cID').val()
  let content = $('#flex').val()
  let sending = {therapist_id, client_id, content}
  axios.post(`${baseURL}notes`, sending)
    .then(response => {
      console.log(response);
      $('#createNoteForm').trigger("reset")
      location.reload()
    })
})

//create a new therapist
$('#newTherapist').on('click', (event) => {
  event.preventDefault()
  console.log('firing');
  let first_name = $('#fname').val()
  let last_name = $('#lname').val()
  let sending = {first_name, last_name}
  axios.post(`${baseURL}therapists`, sending)
    .then(response => {
      console.log(response);
      $('#createTherapistForm').trigger("reset")
      location.reload()
    })
})

//create a new client
$('#newClient').on('click', (event) => {
  event.preventDefault()
  console.log('firing');
  let first_name = $('#fname').val()
  let last_name = $('#lname').val()
  let sending = {first_name, last_name}
  axios.post(`${baseURL}clients`, sending)
    .then(response => {
      console.log(response);
      $('#createTherapistForm').trigger("reset")
      location.reload()
    })
})

//update therapists
$('#updateTherapist').on('click', (event) => {
  event.preventDefault()
  console.log('firing');
  let id = $('#therID').val()
  let first_name = $('#finame').val()
  let last_name = $('#laname').val()
  let isActive = $('#active').val()
  let sending = {id, first_name, last_name, isActive}
  console.log('this is sending ', sending);
  axios.patch(`${baseURL}therapists/${id}`, sending)
    .then(response => {
      console.log(response);
      $('#updateTherapistForm').trigger("reset")

    })
})
