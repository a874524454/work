import myhttp from './myhttp'

export function apiGetType (where,page) {
  return myhttp({
    url: '/sapi/upfiles/query',
    method: 'POST',
    data: {
      where,
      page
    }
  })
}