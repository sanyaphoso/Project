/* eslint-disable @typescript-eslint/no-namespace */
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import { Request, Response } from 'express';
import * as fileUpload from 'express-fileupload';
import helmet from 'helmet';
import * as httpStatus from 'http-status';
import * as morgan from 'morgan';

import config from '~/config';

import { handleErrors } from '~/packages/api/middlewares/error';
import router from '~/packages/api/router';

const app = express();

declare global {
  namespace Express {
    interface User {
      id?: number;
    }
    interface Request {
      user?: User;
    }
  }
}

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode < httpStatus.BAD_REQUEST,
    stream: process.stderr,
  }),
);

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode >= httpStatus.BAD_GATEWAY,
    stream: process.stdout,
  }),
);

app.use(helmet());
app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  }),
);
app.use(compression());
app.use(express.json());

app.use(router);

app.use(handleErrors);

export default app;
