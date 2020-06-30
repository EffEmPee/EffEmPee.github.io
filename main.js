function renderInfo() {
  axios.get('https://api.github.com/users/effempee')
    .then(function(response) {
      console.log('Data request done!');
      
    var picElement      = document.querySelector('.pic');
    var nameElement     = document.querySelector('.name');
    var bioElement      = document.querySelector('.bio');
    var locationElement = document.querySelector('.location');
    var profileElement  = document.querySelector('.profile');
    var reposElement    = document.querySelector('.repos');

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
  })
  .catch(function(error) {
    console.warn(error);
  });
}

function renderProjects(){
  axios.get('https://api.github.com/users/EffEmPee/repos')
    .then(function(response) {
      function linkText(element ,text) {
        var link = document.createTextNode(text);
        element.appendChild(link);
      }

      var i = 0;
      var listElement = document.querySelector('.list');

      while(i < 3){
        if(response.data[i] !== undefined){
          var nameElement = document.createElement('li');
          var pElement = document.createElement('a');
          linkText(pElement, response.data[i].name);
          nameElement.setAttribute('class', 'project' + i);

          pElement.setAttribute('href', response.data[i].html_url);
          pElement.setAttribute('target', '_blank');
          pElement.setAttribute('class', 'title');

          nameElement.appendChild(pElement);
          listElement.appendChild(nameElement);

          var classe = '.project' + i;

          var descElement = document.querySelector(classe);
          var descTextElement = document.createElement('p');

          if(response.data[i].description !== null)
            linkText(descTextElement, response.data[i].description);
          else
            linkText(descTextElement, 'sem descrição');

          descElement.appendChild(descTextElement);

        } else {
          return;
        }
        i++;
      }  

    })
    .catch(function(error) {
      console.warn(error);
    })

}

function renderAll() {
  renderInfo();
  renderProjects();
}

renderAll();
