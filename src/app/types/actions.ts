export interface GeneralAction<T>
{
	type: string,
	payload: T
}

type Action = any; // Any is only to avoid errors

export default Action;
