import axios from 'axios'
import structure from '@/resume.json'

export const getResumeFromDb = async () =>
  await axios({
    method: 'post',
    url: 'https://eu-west-2.aws.data.mongodb-api.com/app/data-jzamnnl/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY
    },
    data: JSON.stringify({ dataSource: 'Cluster0', database: 'resume', collection: 'structure' })
  })
    .then(({ data }) => data?.documents[0])
    .catch((error) => console.log(error))

export const getResumeDataFromJson = async () => structure
