export type BodyType = string | FormData | Blob | ArrayBuffer | DataView;

export enum MethodEnum
{
	GET 	= 'GET',
	POST 	= 'POST',
	PUT 	= 'PUT',
	DELETE 	= 'DELETE'
}

export interface HttpServiceOptions extends RequestInit
{
	params?: any;
}

// export interface EnumMode
// {
// 	NoCors: 'no-cors', 
// 	Cors: 'cors',
// 	SameOrigin: 'same-origin'
// }

// export interface EnumCache
// {
// 	 Default: 'default', 
// 	 NoCache: 'no-cache', 
// 	 Reload: 'reload',
// 	 ForceCache: 'force-cache',
// 	 OnlyIfCached: 'only-if-cached'
// }

// export interface EnumCredentials
// {
// 	Include: 'include',
// 	SameOrigin: 'same-origin',
// 	Omit: 'omit'
// }

// export interface EnumRedirect
// {
// 	Manula: 'manual',
// 	Follow: 'follow',
// 	Error: 'error'
// }

// export interface EnumReferrer
// {
// 	NoReferrer: 'no-referrer',
// 	Client: 'client'
// }

// export interface HttpOptions
// {
// 	method: MethodEnum,
// 	mode?: EnumMode,
// 	cache?: EnumCache,
// 	credentials?: EnumCredentials,  
// 	headers?: HttpHeaders | Headers,
// 	redirect?: EnumRedirect,
// 	referrer?: EnumReferrer,
// 	body: BodyType
// }

// export interface HttpHeaders
// {
	
// }
