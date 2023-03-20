const baseUrl = "http://localhost:1337";

export async function getSinglePage(name, fields) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const url = `${baseUrl}/api/${name}?populate=${fields}`;

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
