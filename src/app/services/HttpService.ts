import { HttpServiceOptions, MethodEnum, BodyType } from '../types/system/HttpService.types';

class IHTTPService
{
	static composeURL(endpoint: string, params?: any): RequestInfo
	{
		var url: URL = new URL(endpoint); 

		if(params)
		{
			url.search = new URLSearchParams(params);
		}

		return url;
	}
 
					method: MethodEnum.GET,
					...options
				}).then((res: Response) => res.json().then((data) => data as T));
	}

	static post<T>(endpoint: string, body: BodyType, options: RequestInit): Promise<T>
	{
		return fetch(Environment.toString(endpoint), {
					method: MethodEnum.POST,
					body,
					...options
				}).then((res: Response) => res.json().then((data) => data as T));
	}

	static put<T>(endpoint: string, body: BodyType, options: RequestInit): Promise<T>
	{
		return fetch(Environment.toString(endpoint), {
					method: MethodEnum.PUT,
					body,
					...options
				}).then((res: Response) => res.json().then((data) => data as T));
	}

	static delete<T>(endpoint: string, body: BodyType, options: RequestInit): Promise<T>
	{
		return fetch(Environment.toString(endpoint), {
					method: MethodEnum.DELETE,
					body,
					...options
				}).then((res: Response) => res.json().then((data) => data as T));
	}
}
