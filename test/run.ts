// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../node_modules/@types/jasmine/index.d.ts" />

import Jasmine from 'jasmine';
import { resolve } from 'path';

const jasmine = new Jasmine(undefined);

jasmine.loadConfigFile(resolve(__dirname, '..', 'jasmine.json'));
jasmine.configureDefaultReporter({ showColors: true });
jasmine.loadConfig(resolve(__dirname, '..', 'jasmine.json'));
jasmine.onComplete((passed) => {
  if (!passed) setTimeout(() => process.exit(1));
});
jasmine.execute();
