import myhttp from '../utils/myhttp'

export function apiGetType (userid,page,pagesize) {
  return myhttp({
    url: '/sapi/upfiles/query',
    method: 'POST',
    data: {
      userid,
      page,
      pagesize
    }
  })
}