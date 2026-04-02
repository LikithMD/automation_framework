import {test as base} from './base.fixture';
import { LandingPage } from '../pages/landing.page';

type TestFixtures = {
    landingPage: LandingPage;
};

export const test = base.extend<TestFixtures>({
    landingPage: async ({page}, use) => {
        await use(new LandingPage(page));
    }
});