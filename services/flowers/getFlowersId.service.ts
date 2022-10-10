import { createFlowersIdsAdapter } from '@/adapters'
import { kunanpa } from '@/config'
import { FetcherWithoutBody } from '@/types/fetcher'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { getFlowersByPage } from './getFlowersByPage.service'

export const getFlowersId:FetcherWithoutBody<string[]> = async () => {
  try {
    const { data: firstPage } = await kunanpa.get<ResponseFlowers>('/flores')
    const idsFirstPage = createFlowersIdsAdapter(firstPage)
    const linkOtherPages = firstPage.links.filter((link) => (!link.active && link.url !== null && link.label !== 'Siguiente &raquo;')) as {active:boolean, url:string, label:string}[]
    console.log('links other pages ', linkOtherPages)
    const otherPages = await Promise.all(linkOtherPages.map((link) => getFlowersByPage(link.url.split('/').pop() as string)))
    console.log('other pages ', otherPages)
    const ids = otherPages.reduce((acc, page) => {
      return acc.concat(page.flowers.map((flower) => flower._id.toString()))
    }
    , idsFirstPage)
    return ids
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
