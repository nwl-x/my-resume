import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosInstance } from 'axios'
import structure from '@/resume.sample.json'
import structureDefault from '@/resume.sample.json'

// == TypeScript ==
import type { Structure } from '@/type'

export const getResumeDataFromJson = () => structure satisfies Structure

export const getResumeFromMongoDB = async (): Promise<Structure> => {
  const url = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-jzamnnl/endpoint/data/v1/action/find'
  const data = { dataSource: 'Cluster0', database: 'resume', collection: 'structure' }
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY
    } as RawAxiosRequestHeaders
  }

  try {
    const client: AxiosInstance = axios.create()

    const response: AxiosResponse<{ documents: Structure[] }> = await client.post(url, data, config)

    if (response.status === 200) {
      const { documents } = response.data

      if (documents?.length) {
        return documents[0]
      }
    }

    return structureDefault
  } catch (err: unknown) {
    console.log(err instanceof Error ? err.message : err)

    return structureDefault
  }
}
