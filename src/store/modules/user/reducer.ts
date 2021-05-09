import { Reducer } from 'redux';
import { IUser } from './types';

const INITIAL_STATE: IUser = {
  username: '',
  password: '',
  assinaturas: [{
    title: '',
    habilitada: false,
  }]
}

const user: Reducer<IUser> = ()  => {
  return INITIAL_STATE;
}

export default user;