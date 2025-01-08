import { rm } from 'fs/promises';
import { join } from 'path';
global.beforeEach(async () => {
  // Delete delete the database before each test run
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (err) {}
});
