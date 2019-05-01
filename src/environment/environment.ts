import { IEnvironment } from '../app/types/system/config.types';

class Environment implements IEnvironment
{
	port = process.env.SERVER_PORT;
    host = process.env.SERVER_HOST;
    protocol = process.env.SERVER_PROTOCOL;

	getServer(endpoint?: string): string
	{
		var port = this.port ? ":" + this.port : ""; 

		if(!endpoint)
		{
			endpoint = "";
		}

        return this.protocol + "://" + this.host + port + endpoint;
	}
}

const environment: Environment = new Environment();

export default environment;
