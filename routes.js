import express from 'express';

import AccountController from './controllers/accounts.js';

const routes = express();

//router
routes.post('/deposit', AccountController.deposit);
routes.post('/withdraw', AccountController.withdraw);
routes.delete('/remove', AccountController.delete);
routes.get('/contas', AccountController.contas);
routes.get('/balance', AccountController.getBalance);
routes.post('/transfer', AccountController.transfer);
routes.get('/avg', AccountController.avgAgency);
routes.get('/lowest', AccountController.lowestBalances);
routes.get('/top', AccountController.topBalances);
routes.get('/transferTop', AccountController.transferTopBalances);

routes.get('/test', AccountController.transferTopBalances);
routes.get('/test2', AccountController.transferTopBalances);

export default routes;
