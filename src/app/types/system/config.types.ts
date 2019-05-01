export interface IEnvironment
{
    port?: string | undefined;
    host?: string | undefined;
    protocol?: string | undefined;
    
    getServer : (endpoint: string) => string;
}

export interface Route
{
	path?: string,
	component?: React.ReactNode,
	redirect?: string,
	exact?: boolean,
	props?: any,
	fallback?: React.ReactNode
}
