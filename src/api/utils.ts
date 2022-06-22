const defaultApiEndpoint = 'http://localhost:4000'

export const get = async (endpoint: string): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const post = async (endpoint: string, body: any): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}

export const put = async (endpoint: string, body: any): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}

export const deleteMeth = async (endpoint: string, body: any): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}

export const getParamsString = (params: any): string => {
  return Object.entries(params).map((it) => it.map((ti) => encodeURIComponent(`${ti}`)).join('=')).join('&')
}
