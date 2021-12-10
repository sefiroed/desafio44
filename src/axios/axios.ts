import axios from 'axios'

axios
  .get('http://localhost:8080/api/info')
  .then((response) => {
    console.log('GET', response.data)
  })
  .catch((error) => {
    console.error(error.message)
  })

const data = {
  email: 'magakaef1@hotmail.com',
  password: "12345678",
}

const url = 'http://localhost:8080/api/signup'

const funcionAsync = async () => {
  try {
    const resp = await axios.post(url, data)
    console.log('POST', resp.data)
  } catch (err) {
    console.log(err)
  }
}

funcionAsync()