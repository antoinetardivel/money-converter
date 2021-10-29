export const getCoef = async () => {
  try {
    let res = await fetch(`https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY}`)
    if (res.ok) {
      return res.json()
    }
    return null

  } catch (error) {
    console.log(error);
    return null
  }
}