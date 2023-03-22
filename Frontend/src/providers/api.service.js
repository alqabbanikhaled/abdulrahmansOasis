const baseUrl = "https://abdelrahmanoasis-cms-fjf3vmxuqa-uc.a.run.app";

export async function getSinglePage(locale = "ar", name, fields = "") {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const url = `${baseUrl}/api/${name}?populate=${fields}&locale=${locale}`;

  try {
    const res = await fetch(url, requestOptions);
    const fetchJson = await res.json();
    return fetchJson;
  } catch (e) {
    // throw e;
    console.log(e);
    return null;
  }
}

export async function getCollectionsPages(locale = "ar", name, fields = "") {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const url = `${baseUrl}/api/${name}?populate=${fields}&locale=${locale}`;

  try {
    const res = await fetch(url, requestOptions);
    const fetchJson = await res.json();
    return fetchJson;
  } catch (e) {
    // throw e;
    console.log(e);
    return null;
  }
}

export async function getNewsItem(locale = "ar", slug, id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  //by slug
  const urlSlug = `${baseUrl}/api/latest-news?filters[Slug][$eq]=${slug}&locale=${locale}`;

  //by id
  const urlId = `${baseUrl}/api/latest-news/${id}?locale=${locale}`;

  try {
    const res = await fetch(urlId, requestOptions);
    const fetchJson = await res.json();
    return fetchJson;
  } catch (e) {
    // throw e;
    console.log(e);
    return null;
  }
}

export async function contactUs(data) {
  const link = `${baseUrl}/api/contacts`;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const JSONdata = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSONdata,
  };

  return fetch(link, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error.error));
}

export async function subscribeNews(data) {
  const link = `${baseUrl}/api/subscribe-news`;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const JSONdata = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSONdata,
  };

  return fetch(link, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error.error));
}
