import { createApplication } from 'graphql-modules';
import { authModule } from './auth';
import { userModule } from './user';

const application = createApplication({
  modules: [authModule, userModule],
});

const { schema } = application;

export { application, schema };
