import axios from 'axios';

const getSkills = async () => {
  return axios({
    method: 'post',
    url: 'https://eu-west-2.aws.data.mongodb-api.com/app/data-jzamnnl/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY,
    },
    data: JSON.stringify({
      dataSource: 'Cluster0',
      database: 'resume',
      collection: 'skills',
    }),
  })
    .then((response) => response.data.documents)
    .catch((error) => console.log(error));
};

export default getSkills;
