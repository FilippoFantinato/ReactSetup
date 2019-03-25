import { IEnvironment } from '../app/types/system/config.types';

class Environment implements IEnvironment
{
	port = parseInt(process.env.API_PORT!);
    host = process.env.API_HOST as string;
    protocol = process.env.API_PROTOCOL as string;

	toString(endpoint: string): string
	{
        return this.protocol + "://" + this.host + (this.port ? ":" + this.port: "") + endpoint;
	}
}

const environment: Environment = new Environment();

export default environment;
