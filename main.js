

axios.get('https://api.github.com/users/effempee')
  .then(function(response) {
    console.log('Data request done!');
    
    var picElement      = document.querySelector('.pic');
    var nameElement     = document.querySelector('.name');
    var bioElement      = document.querySelector('.bio');
    var locationElement = document.querySelector('.location');
    var profileElement  = document.querySelector('.profile');
    var reposElement   = document.querySelector('.repos');


    function renderAll() {
      function linkText(element ,text) {
        var link = document.createTextNode(text);
        element.appendChild(link);
      }  

      var imgElement = document.createElement('img');
      imgElement.setAttribute('src', response.data.avatar_url);
      picElement.appendChild(imgElement);

      var textNameElement = document.createElement('p');
      linkText(textNameElement, response.data.name);
      textNameElement.setAttribute('class', 'profileName');
      nameElement.appendChild(textNameElement);

      var bioTextElement = document.createElement('p');
      linkText(bioTextElement, (response.data.bio));
      bioTextElement.setAttribute('class', 'bioText');
      bioElement.appendChild(bioTextElement);

      var locationTextElement = document.createElement('p');
      linkText(locationTextElement, (response.data.location));
      locationTextElement.setAttribute('class', 'locationName');
      locationElement.appendChild(locationTextElement);

      var profileTextElement = document.createElement('a');
      linkText(profileTextElement, ('@' + response.data.login));
      profileTextElement.setAttribute('href', 'https://github.com/EffEmPee');
      profileTextElement.setAttribute('class', 'loginName');
      profileTextElement.setAttribute('target','_blank');
      profileElement.appendChild(profileTextElement);

      var reposNumElement = document.createElement('a');
      linkText(reposNumElement, (response.data.public_repos));
      reposNumElement.setAttribute('href', 'https://github.com/EffEmPee?tab=repositories');
      reposNumElement.setAttribute('class', 'reposNum');
      reposNumElement.setAttribute('target','_blank');
      reposElement.appendChild(reposNumElement);
    }

    renderAll();

  })
  .catch(function(error) {
    console.warn(error);
  });

