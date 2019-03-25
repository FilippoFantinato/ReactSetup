export interface Paginator
{
	offset: number,
	limit: number,
	pages: number
}

export interface InfinityScroll
{
	offset: number,
	limit: number
}

export interface Status
{
	status: string
}
