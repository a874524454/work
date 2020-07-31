import myhttp from '../utils/myhttp'

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