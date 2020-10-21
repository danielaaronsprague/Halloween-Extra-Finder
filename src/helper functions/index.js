export async function fetchInfo() {
  let url = "https://randomuser.me/api/?results=10";
  const response = await fetch(url, {
    method: "GET",
  });

  const { results } = await response.json();

  return results;
}
