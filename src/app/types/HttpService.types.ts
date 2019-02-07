export type TypeBody = string | FormData | Blob | ArrayBuffer | DataView;

export enum EnumMethod
{
	GET 	= 'GET',
	POST 	= 'POST',
	PUT 	= 'PUT',
	DELETE 	= 'DELETE'
}

export interface EnumMode
{
	NoCors: 'no-cors', 
	Cors: 'cors',
	SameOrigin: 'same-origin'
}

export interface EnumCache
{
	 Default: 'default', 
	 NoCache: 'no-cache', 
	 Reload: 'reload',
	 ForceCache: 'force-cache',
	 OnlyIfCached: 'only-if-cached'
}

export interface EnumCredentials
{
	Include: 'include',
	SameOrigin: 'same-origin',
	Omit: 'omit'
}

export interface EnumRedirect
{
	Manula: 'manual',
	Follow: 'follow',
	Error: 'error'
}

export interface EnumReferrer
{
	NoReferrer: 'no-referrer',
	Client: 'client'
}

export interface HttpOptions
{
	method: EnumMethod,
	mode?: EnumMode,
	cache?: EnumCache,
	credentials?: EnumCredentials,  
	headers?: HttpHeaders | Headers,
	redirect?: EnumRedirect,
	referrer?: EnumReferrer,
	body: TypeBody
}

export interface HttpHeaders
{
	
}

export interface IHttpService
{
	call: 	(url: String, options: HttpOptions) => Promise<String>,
	get: 	(url: String, options: HttpOptions) => Promise<String>,
	post: 	(url: String, options: HttpOptions) => Promise<String>,
	put: 	(url: String, options: HttpOptions) => Promise<String>,
	delete: (url: String, options: HttpOptions) => Promise<String>
}
