import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../', '.env') });

import { server } from './socket';

const port = process.env.PORT;
server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
