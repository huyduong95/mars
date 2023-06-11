import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../configuration/.env` });


const accounts = new DataTable(['url'])
accounts.add([process.env.URL]);

export const customScenario = Data(accounts).Scenario
