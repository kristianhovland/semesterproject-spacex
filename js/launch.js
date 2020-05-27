const url = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.dir(json);
    populateLaunches(json);
  })
  .catch(function (error) {
    console.dir(error);
  });

function populateLaunches(json) {
  const container = document.querySelector(".container");

  let html = "";

  json.forEach((result) => {
    html += `
        <div class="launchcard">
    <div class="mission">${result.mission_name}</div>
    <div class="rocket">Aircraft: ${result.rocket.rocket_name}</div>
    <div class="rocket">Site: ${result.launch_site.site_name_long}</div>
    <div class="rocket">Nationality: ${result.rocket.second_stage.payloads[0].nationality}</div>
    <div class="launch">Date: ${result.launch_date_local}</div>

</div>`;
  });

  container.innerHTML = html;
}
