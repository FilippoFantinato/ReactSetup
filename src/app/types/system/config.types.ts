export interface IEnvironment
{
    port?: number | undefined;
    host: string;
    protocol: string;
    
    toString : (endpoint: string) => string;
}

export interface Route
{
	path?: string,
	component?: React.ReactNode,
	redirect?: string,
	exact?: boolean
}
