// getUrlOptions = () => {
//     let options = [
//      {"id": "globe", "displayText": "Website", "placeholder": "Enter website URL", "valueId": "web_url"},
//      {"id": "linkedin", "displayText": "LinkedIn", "placeholder": "Enter LinkedIn URL", "valueId": "linkedin_url"},
//      {"id": "facebook", "displayText": "Facebook", "placeholder": "Enter Facebook URL", "valueId": "fb_url"},
//      {"id": "twitter", "displayText": "Twitter", "placeholder": "Enter Twitter URL", "valueId": "twitter_url"},
//     //  {"id": "github", "displayText": "Github", "placeholder": "Enter Github URL", "valueId": "github_url"}
//     ]
//     return options;               
// }
createUrl = (url, value) => {
    var parentElt = document.querySelector('.flex-container');
    let i = document.createElement('i');
    let a = document.createElement('a');
    let div = document.createElement('div');
    i.classList.add('fa');
    i.classList.add('fa-' + url);
    i.style.color = 'darksalmon';

    a.setAttribute('href', value);
    a.setAttribute('target', '_blank');
    div.classList.add('flex');
    a.appendChild(i);
    div.appendChild(a);
    parentElt.appendChild(div);
}

let form = document.getElementById('url-form');
form.addEventListener('submit', () => {
    let object = {};
    if(document.getElementById('globe').checked){
        object["globe"] = document.getElementById("web_url").value.trim();
    }   
    if(document.getElementById('facebook').checked){
        object["facebook"] = document.getElementById("facebook_url").value.trim();
    }   
    if(document.getElementById('twitter').checked){
        object["twitter"] = document.getElementById("twitter_url").value.trim();
    }   
    if(document.getElementById('linkedin').checked){
        object["linkedin"] = document.getElementById("linkedin_url").value.trim();
    }   
    if(document.getElementById('github').checked){
        object["github"] = document.getElementById("github_url").value.trim();
    }   

    chrome.storage.sync.set(object, function(){
    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('url-form');
    chrome.storage.sync.get(["globe", "facebook", "twitter", "linkedin", "github"], function(items){
        if(items.globe || items.facebook || items.twitter || items.linkedin || items.github) {
            form.style.display = 'none';
            document.getElementById('info').style.display = 'none';
        }
        if(items.globe) 
            createUrl('globe', items.globe);
        if(items.facebook) 
            createUrl('facebook', items.facebook);
        if(items.twitter) 
            createUrl('twitter', items.twitter);
        if(items.linkedin) 
            createUrl('linkedin', items.linkedin);
        if(items.github) 
            createUrl('github', items.github);
    });
 
  }, false);