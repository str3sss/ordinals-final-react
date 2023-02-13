const api_url = 'https://api.ords.world/get_projects?'

async function getData(name) {
  try {
    const response = await fetch(api_url + new URLSearchParams({name}), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })

    if (response.ok) {
      const res = await response.json()
      return res
    }

  } catch (e) {
    console.log(e)
    return null
  }
}



export default getData