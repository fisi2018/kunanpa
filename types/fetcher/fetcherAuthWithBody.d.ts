export type FetcherAuthWithBody<Form, Response> =(form:Form, token:string)=>Promise<Response>
