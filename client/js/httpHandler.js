(function() {
  console.log('this running')
  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////
  
  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        // console.log('post:',data)
        // window.location = window.location.href;
      }
    });

    
  };

  const ajaxGetRequest = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: (data) => {
        SwimTeam.move(data);
        console.log('This is the:', data);
        //ajaxGetRequest();
      },
      error: (err) => {
        console.log('Error is the:', err);
      }
    })
  }

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

  //ajaxGetRequest();
  setInterval(ajaxGetRequest,1000);
  
  
})();
