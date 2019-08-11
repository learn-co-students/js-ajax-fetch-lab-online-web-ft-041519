const baseURL = 'https://api.github.com';
const token = '';
let user = 'Kish-Siva-1'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/forks`

  fetch(
    url,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    }
  )
  .then(res => res.json())
  .then(json => showResults(json))
  
}

function showResults(json) {
  //use this function to display the results from forking via the API

  console.log(json)

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html

  let user = 'Kish-Siva-1'
  const baseURL = 'https://api.github.com';
  const token = '';

  const repo = `${user}/js-ajax-fetch-lab`;
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/issues`

  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };

  fetch(
    url,
    {
      method: 'POST',
      title: JSON.stringify(postData.title),
      body: JSON.stringify(postData.body),
      headers: {
        Authorization: `token ${token}`
      }
    }
  )
  .then(res => res.json())
  .then(json => getIssues())  

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating

  let user = 'Kish-Siva-1'
  const baseURL = 'https://api.github.com';
  const token = '';

  const repo = `${user}/js-ajax-fetch-lab`;
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/issues`

  fetch(
    url,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(res => res.json())
  .then(json => console.log(json))

}
