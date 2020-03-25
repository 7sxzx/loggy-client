import { setup, signIn } from './auth';
import { getUser } from './user';
import { getAllErrors } from './errors';
import { createService } from './service';

export default { signIn, setup, getUser, getAllErrors, createService };