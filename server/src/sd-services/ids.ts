// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_zFH71KKxKuGVmzFR from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_sG9Jot3SzbmTjJ9J(bh, parentSpanInst);
          //appendnew_next_sd_oGbwyNj4tfKCyAoa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oGbwyNj4tfKCyAoa');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_zdz6hszRbr8oBdSZ(bh, parentSpanInst);
          //appendnew_next_sd_CYe4uHvqvZGN4IqJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CYe4uHvqvZGN4IqJ');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_YzHpVdk4RzcMoHVB(bh, parentSpanInst);
          //appendnew_next_sd_IP2ymTLuZyJdIeRN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IP2ymTLuZyJdIeRN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Adl3R5778lQh6aH4(bh, parentSpanInst);
          //appendnew_next_sd_oxx6d0G5uQ1IBo9r
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oxx6d0G5uQ1IBo9r');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_H4CI7aRMJUeT74FP(bh, parentSpanInst);
          //appendnew_next_sd_1XH324vuLbKJ7CqW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1XH324vuLbKJ7CqW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_KsRnqBQp414tyLp1(bh, parentSpanInst);
          //appendnew_next_sd_bDNTnGAXdORrvzEU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bDNTnGAXdORrvzEU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_pUePDE2OeqXrbSX8(bh, parentSpanInst);
          //appendnew_next_sd_3IiPpA0MN6V7r1jF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3IiPpA0MN6V7r1jF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_YzHpVdk4RzcMoHVB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YzHpVdk4RzcMoHVB',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rsIeQsHgczJDdhE9(bh, parentSpanInst);
      //appendnew_next_sd_YzHpVdk4RzcMoHVB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YzHpVdk4RzcMoHVB',
        spanInst,
        'sd_YzHpVdk4RzcMoHVB'
      );
    }
  }

  async sd_rsIeQsHgczJDdhE9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rsIeQsHgczJDdhE9',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_iSfBuMKliPoT4zBH(bh, parentSpanInst);
      } else {
        bh = await this.sd_V335skzrmS2ao7BC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rsIeQsHgczJDdhE9',
        spanInst,
        'sd_rsIeQsHgczJDdhE9'
      );
    }
  }

  async sd_iSfBuMKliPoT4zBH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iSfBuMKliPoT4zBH',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oUEVchB3UQbi9qJF(bh, parentSpanInst);
      //appendnew_next_sd_iSfBuMKliPoT4zBH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iSfBuMKliPoT4zBH',
        spanInst,
        'sd_iSfBuMKliPoT4zBH'
      );
    }
  }

  async sd_oUEVchB3UQbi9qJF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oUEVchB3UQbi9qJF',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_F1PHv9Pltn5KbHkz(bh, parentSpanInst);
      //appendnew_next_sd_oUEVchB3UQbi9qJF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oUEVchB3UQbi9qJF',
        spanInst,
        'sd_oUEVchB3UQbi9qJF'
      );
    }
  }

  async sd_F1PHv9Pltn5KbHkz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F1PHv9Pltn5KbHkz',
      parentSpanInst
    );
    try {
      const sd_zFH71KKxKuGVmzFRInstance: sd_zFH71KKxKuGVmzFR.idsutil =
        sd_zFH71KKxKuGVmzFR.idsutil.getInstance();
      let outputVariables =
        await sd_zFH71KKxKuGVmzFRInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_agQYV2Fe0znhgOTi(bh, parentSpanInst);
      //appendnew_next_sd_F1PHv9Pltn5KbHkz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F1PHv9Pltn5KbHkz',
        spanInst,
        'sd_F1PHv9Pltn5KbHkz'
      );
    }
  }

  async sd_agQYV2Fe0znhgOTi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_agQYV2Fe0znhgOTi',
      parentSpanInst
    );
    try {
      const sd_zFH71KKxKuGVmzFRInstance: sd_zFH71KKxKuGVmzFR.idsutil =
        sd_zFH71KKxKuGVmzFR.idsutil.getInstance();
      let outputVariables =
        await sd_zFH71KKxKuGVmzFRInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bo3rl9XFP6qbCNCK(bh, parentSpanInst);
      //appendnew_next_sd_agQYV2Fe0znhgOTi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_agQYV2Fe0znhgOTi',
        spanInst,
        'sd_agQYV2Fe0znhgOTi'
      );
    }
  }

  async sd_bo3rl9XFP6qbCNCK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bo3rl9XFP6qbCNCK',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_eMjxeN5SDA8O4IkU(bh, parentSpanInst);
      //appendnew_next_sd_bo3rl9XFP6qbCNCK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bo3rl9XFP6qbCNCK',
        spanInst,
        'sd_bo3rl9XFP6qbCNCK'
      );
    }
  }

  async sd_eMjxeN5SDA8O4IkU(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eMjxeN5SDA8O4IkU');
    }
  }

  async sd_V335skzrmS2ao7BC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V335skzrmS2ao7BC',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DEF1ZHjiY8Vft3m2(bh, parentSpanInst);
      //appendnew_next_sd_V335skzrmS2ao7BC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V335skzrmS2ao7BC',
        spanInst,
        'sd_V335skzrmS2ao7BC'
      );
    }
  }

  async sd_DEF1ZHjiY8Vft3m2(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DEF1ZHjiY8Vft3m2');
    }
  }

  async sd_sG9Jot3SzbmTjJ9J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sG9Jot3SzbmTjJ9J',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_g1E1H3LEa6S9ysW5(bh, parentSpanInst);
      //appendnew_next_sd_sG9Jot3SzbmTjJ9J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sG9Jot3SzbmTjJ9J',
        spanInst,
        'sd_sG9Jot3SzbmTjJ9J'
      );
    }
  }

  async sd_g1E1H3LEa6S9ysW5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g1E1H3LEa6S9ysW5',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g1E1H3LEa6S9ysW5',
        spanInst,
        'sd_g1E1H3LEa6S9ysW5'
      );
    }
  }

  async sd_Adl3R5778lQh6aH4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Adl3R5778lQh6aH4',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YRWqsCNZEswIzsVL(bh, parentSpanInst);
      //appendnew_next_sd_Adl3R5778lQh6aH4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Adl3R5778lQh6aH4',
        spanInst,
        'sd_Adl3R5778lQh6aH4'
      );
    }
  }

  async sd_YRWqsCNZEswIzsVL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YRWqsCNZEswIzsVL',
      parentSpanInst
    );
    try {
      const sd_zFH71KKxKuGVmzFRInstance: sd_zFH71KKxKuGVmzFR.idsutil =
        sd_zFH71KKxKuGVmzFR.idsutil.getInstance();
      let outputVariables =
        await sd_zFH71KKxKuGVmzFRInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1XsmFdDxSAAjqt79(bh, parentSpanInst);
      //appendnew_next_sd_YRWqsCNZEswIzsVL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YRWqsCNZEswIzsVL',
        spanInst,
        'sd_YRWqsCNZEswIzsVL'
      );
    }
  }

  async sd_1XsmFdDxSAAjqt79(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1XsmFdDxSAAjqt79',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HduptyO2iurxwfAE(bh, parentSpanInst);
      //appendnew_next_sd_1XsmFdDxSAAjqt79
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1XsmFdDxSAAjqt79',
        spanInst,
        'sd_1XsmFdDxSAAjqt79'
      );
    }
  }

  async sd_HduptyO2iurxwfAE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HduptyO2iurxwfAE',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X46hyRj5eqi4oujc(bh, parentSpanInst);
      //appendnew_next_sd_HduptyO2iurxwfAE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HduptyO2iurxwfAE',
        spanInst,
        'sd_HduptyO2iurxwfAE'
      );
    }
  }

  async sd_X46hyRj5eqi4oujc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X46hyRj5eqi4oujc',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_T9nQblyFcO7BJWQ3(bh, parentSpanInst);
      } else {
        bh = await this.sd_5I3MxpOCmPtp0H9h(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X46hyRj5eqi4oujc',
        spanInst,
        'sd_X46hyRj5eqi4oujc'
      );
    }
  }

  async sd_T9nQblyFcO7BJWQ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T9nQblyFcO7BJWQ3',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wQEoHwhVUpxuOzJv(bh, parentSpanInst);
      //appendnew_next_sd_T9nQblyFcO7BJWQ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T9nQblyFcO7BJWQ3',
        spanInst,
        'sd_T9nQblyFcO7BJWQ3'
      );
    }
  }

  async sd_wQEoHwhVUpxuOzJv(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wQEoHwhVUpxuOzJv');
    }
  }

  async sd_5I3MxpOCmPtp0H9h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5I3MxpOCmPtp0H9h',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9yGbxoYEUIO9o5DC(bh, parentSpanInst);
      //appendnew_next_sd_5I3MxpOCmPtp0H9h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5I3MxpOCmPtp0H9h',
        spanInst,
        'sd_5I3MxpOCmPtp0H9h'
      );
    }
  }

  async sd_9yGbxoYEUIO9o5DC(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9yGbxoYEUIO9o5DC');
    }
  }

  async sd_H4CI7aRMJUeT74FP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H4CI7aRMJUeT74FP',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_wgkmQGZIMzuorBla(bh, parentSpanInst);
      //appendnew_next_sd_H4CI7aRMJUeT74FP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H4CI7aRMJUeT74FP',
        spanInst,
        'sd_H4CI7aRMJUeT74FP'
      );
    }
  }

  async sd_wgkmQGZIMzuorBla(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wgkmQGZIMzuorBla');
    }
  }

  async sd_V2AMPwEdiV5Q5TDI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V2AMPwEdiV5Q5TDI',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_V2AMPwEdiV5Q5TDI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V2AMPwEdiV5Q5TDI',
        spanInst,
        'sd_V2AMPwEdiV5Q5TDI'
      );
    }
  }

  async sd_KsRnqBQp414tyLp1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KsRnqBQp414tyLp1',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_O3vymMChqG9n3Hqx(bh, parentSpanInst);
      //appendnew_next_sd_KsRnqBQp414tyLp1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KsRnqBQp414tyLp1',
        spanInst,
        'sd_KsRnqBQp414tyLp1'
      );
    }
  }

  async sd_O3vymMChqG9n3Hqx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O3vymMChqG9n3Hqx',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4BUB6msfluJBDM8G(bh, parentSpanInst);
      //appendnew_next_sd_O3vymMChqG9n3Hqx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O3vymMChqG9n3Hqx',
        spanInst,
        'sd_O3vymMChqG9n3Hqx'
      );
    }
  }

  async sd_4BUB6msfluJBDM8G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4BUB6msfluJBDM8G',
      parentSpanInst
    );
    try {
      const sd_zFH71KKxKuGVmzFRInstance: sd_zFH71KKxKuGVmzFR.idsutil =
        sd_zFH71KKxKuGVmzFR.idsutil.getInstance();
      let outputVariables =
        await sd_zFH71KKxKuGVmzFRInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_s5fOUvio32Urlc7i(bh, parentSpanInst);
      //appendnew_next_sd_4BUB6msfluJBDM8G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4BUB6msfluJBDM8G',
        spanInst,
        'sd_4BUB6msfluJBDM8G'
      );
    }
  }

  async sd_s5fOUvio32Urlc7i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s5fOUvio32Urlc7i',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yXoPUIT4JuDaVAzC(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_xfDgWOMrOwbRauDD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s5fOUvio32Urlc7i',
        spanInst,
        'sd_s5fOUvio32Urlc7i'
      );
    }
  }

  async sd_yXoPUIT4JuDaVAzC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yXoPUIT4JuDaVAzC',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_yXoPUIT4JuDaVAzC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yXoPUIT4JuDaVAzC',
        spanInst,
        'sd_yXoPUIT4JuDaVAzC'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IdQRSLXKk3XoUEhz(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_IdQRSLXKk3XoUEhz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IdQRSLXKk3XoUEhz');
    }
  }

  async sd_xfDgWOMrOwbRauDD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xfDgWOMrOwbRauDD',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IdQRSLXKk3XoUEhz(bh, parentSpanInst);
      //appendnew_next_sd_xfDgWOMrOwbRauDD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xfDgWOMrOwbRauDD',
        spanInst,
        'sd_xfDgWOMrOwbRauDD'
      );
    }
  }

  async sd_pUePDE2OeqXrbSX8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pUePDE2OeqXrbSX8',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zrkmKZneCtx36kbM(bh, parentSpanInst);
      //appendnew_next_sd_pUePDE2OeqXrbSX8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pUePDE2OeqXrbSX8',
        spanInst,
        'sd_pUePDE2OeqXrbSX8'
      );
    }
  }

  async sd_zrkmKZneCtx36kbM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zrkmKZneCtx36kbM',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_GSa0nonlL2xekzVO(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_j2iWAFci6HDDPXxT(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zrkmKZneCtx36kbM',
        spanInst,
        'sd_zrkmKZneCtx36kbM'
      );
    }
  }

  async sd_GSa0nonlL2xekzVO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GSa0nonlL2xekzVO',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vXKNeTz48aOS14rZ(bh, parentSpanInst);
      //appendnew_next_sd_GSa0nonlL2xekzVO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GSa0nonlL2xekzVO',
        spanInst,
        'sd_GSa0nonlL2xekzVO'
      );
    }
  }

  async sd_vXKNeTz48aOS14rZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vXKNeTz48aOS14rZ');
    }
  }

  async sd_j2iWAFci6HDDPXxT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j2iWAFci6HDDPXxT',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tS2osKQTWE2AQlIX(bh, parentSpanInst);
      //appendnew_next_sd_j2iWAFci6HDDPXxT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j2iWAFci6HDDPXxT',
        spanInst,
        'sd_j2iWAFci6HDDPXxT'
      );
    }
  }

  async sd_tS2osKQTWE2AQlIX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tS2osKQTWE2AQlIX',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zkwDbkzhWOhP5OpY(bh, parentSpanInst);
      //appendnew_next_sd_tS2osKQTWE2AQlIX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tS2osKQTWE2AQlIX',
        spanInst,
        'sd_tS2osKQTWE2AQlIX'
      );
    }
  }

  async sd_zkwDbkzhWOhP5OpY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zkwDbkzhWOhP5OpY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ukNc2RZ9qy8Y0jqi(bh, parentSpanInst);
      } else {
        bh = await this.sd_nz9yXtxK73Gt1eq0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zkwDbkzhWOhP5OpY',
        spanInst,
        'sd_zkwDbkzhWOhP5OpY'
      );
    }
  }

  async sd_ukNc2RZ9qy8Y0jqi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ukNc2RZ9qy8Y0jqi',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_JnH9AJJilNQP9NTc(bh, parentSpanInst);
      //appendnew_next_sd_ukNc2RZ9qy8Y0jqi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ukNc2RZ9qy8Y0jqi',
        spanInst,
        'sd_ukNc2RZ9qy8Y0jqi'
      );
    }
  }

  async sd_JnH9AJJilNQP9NTc(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JnH9AJJilNQP9NTc');
    }
  }

  async sd_nz9yXtxK73Gt1eq0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nz9yXtxK73Gt1eq0',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_P8LvsyqiNBU1gvfP(bh, parentSpanInst);
      //appendnew_next_sd_nz9yXtxK73Gt1eq0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nz9yXtxK73Gt1eq0',
        spanInst,
        'sd_nz9yXtxK73Gt1eq0'
      );
    }
  }

  async sd_P8LvsyqiNBU1gvfP(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P8LvsyqiNBU1gvfP');
    }
  }

  async sd_zdz6hszRbr8oBdSZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zdz6hszRbr8oBdSZ',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6RG0QHC1xMwLbnc3(bh, parentSpanInst);
      //appendnew_next_sd_zdz6hszRbr8oBdSZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zdz6hszRbr8oBdSZ',
        spanInst,
        'sd_zdz6hszRbr8oBdSZ'
      );
    }
  }

  async sd_6RG0QHC1xMwLbnc3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6RG0QHC1xMwLbnc3',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_46y8Sa0mQHJVzPbo(bh, parentSpanInst);
      //appendnew_next_sd_6RG0QHC1xMwLbnc3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6RG0QHC1xMwLbnc3',
        spanInst,
        'sd_6RG0QHC1xMwLbnc3'
      );
    }
  }

  async sd_46y8Sa0mQHJVzPbo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_46y8Sa0mQHJVzPbo',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4QETfjGCzvhthKCG(bh, parentSpanInst);
      //appendnew_next_sd_46y8Sa0mQHJVzPbo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_46y8Sa0mQHJVzPbo',
        spanInst,
        'sd_46y8Sa0mQHJVzPbo'
      );
    }
  }

  async sd_4QETfjGCzvhthKCG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4QETfjGCzvhthKCG',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_AV0FSF9uFMky9aIz(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_3QEG5G11ExK8Q1PD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4QETfjGCzvhthKCG',
        spanInst,
        'sd_4QETfjGCzvhthKCG'
      );
    }
  }

  async sd_AV0FSF9uFMky9aIz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AV0FSF9uFMky9aIz',
      parentSpanInst
    );
    try {
      const sd_zFH71KKxKuGVmzFRInstance: sd_zFH71KKxKuGVmzFR.idsutil =
        sd_zFH71KKxKuGVmzFR.idsutil.getInstance();
      let outputVariables = await sd_zFH71KKxKuGVmzFRInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TkCYICMvGX5EIcRH(bh, parentSpanInst);
      //appendnew_next_sd_AV0FSF9uFMky9aIz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AV0FSF9uFMky9aIz',
        spanInst,
        'sd_AV0FSF9uFMky9aIz'
      );
    }
  }

  async sd_TkCYICMvGX5EIcRH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TkCYICMvGX5EIcRH',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2IDATg1kpmZdh52f(bh, parentSpanInst);
      } else {
        bh = await this.sd_eqgpDeLJYQqY8kOn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TkCYICMvGX5EIcRH',
        spanInst,
        'sd_TkCYICMvGX5EIcRH'
      );
    }
  }

  async sd_2IDATg1kpmZdh52f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2IDATg1kpmZdh52f',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_blS4OydNoPv9JRr8(bh, parentSpanInst);
      //appendnew_next_sd_2IDATg1kpmZdh52f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2IDATg1kpmZdh52f',
        spanInst,
        'sd_2IDATg1kpmZdh52f'
      );
    }
  }

  async sd_blS4OydNoPv9JRr8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_blS4OydNoPv9JRr8',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XiKuz7yXwdkmn1Ta(bh, parentSpanInst);
      //appendnew_next_sd_blS4OydNoPv9JRr8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_blS4OydNoPv9JRr8',
        spanInst,
        'sd_blS4OydNoPv9JRr8'
      );
    }
  }

  async sd_XiKuz7yXwdkmn1Ta(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XiKuz7yXwdkmn1Ta');
    }
  }

  async sd_eqgpDeLJYQqY8kOn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eqgpDeLJYQqY8kOn',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_i4hxAVl6hWjepask(bh, parentSpanInst);
      } else {
        bh = await this.sd_v1Qs6hzA4vJUJU7k(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eqgpDeLJYQqY8kOn',
        spanInst,
        'sd_eqgpDeLJYQqY8kOn'
      );
    }
  }

  async sd_i4hxAVl6hWjepask(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i4hxAVl6hWjepask',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IJxH69ePPGjei1If(bh, parentSpanInst);
      //appendnew_next_sd_i4hxAVl6hWjepask
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i4hxAVl6hWjepask',
        spanInst,
        'sd_i4hxAVl6hWjepask'
      );
    }
  }

  async sd_IJxH69ePPGjei1If(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IJxH69ePPGjei1If',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_v1Qs6hzA4vJUJU7k(bh, parentSpanInst);
      //appendnew_next_sd_IJxH69ePPGjei1If
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IJxH69ePPGjei1If',
        spanInst,
        'sd_IJxH69ePPGjei1If'
      );
    }
  }

  async sd_v1Qs6hzA4vJUJU7k(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_v1Qs6hzA4vJUJU7k',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v1Qs6hzA4vJUJU7k',
        spanInst,
        'sd_v1Qs6hzA4vJUJU7k'
      );
    }
  }

  async sd_3QEG5G11ExK8Q1PD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3QEG5G11ExK8Q1PD',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gockNYbGootOv21N(bh, parentSpanInst);
      } else {
        bh = await this.sd_YMTUox7PJAHhcNLs(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3QEG5G11ExK8Q1PD',
        spanInst,
        'sd_3QEG5G11ExK8Q1PD'
      );
    }
  }

  async sd_gockNYbGootOv21N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gockNYbGootOv21N',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XiKuz7yXwdkmn1Ta(bh, parentSpanInst);
      //appendnew_next_sd_gockNYbGootOv21N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gockNYbGootOv21N',
        spanInst,
        'sd_gockNYbGootOv21N'
      );
    }
  }

  async sd_YMTUox7PJAHhcNLs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YMTUox7PJAHhcNLs',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XiKuz7yXwdkmn1Ta(bh, parentSpanInst);
      //appendnew_next_sd_YMTUox7PJAHhcNLs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YMTUox7PJAHhcNLs',
        spanInst,
        'sd_YMTUox7PJAHhcNLs'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_SMEht63RqtgWD00J(bh, parentSpanInst)) ||
      (await this.sd_m6mspd0f4uiEJsnh(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_SMEht63RqtgWD00J(bh, parentSpanInst) {
    const nodes = [
      'sd_agQYV2Fe0znhgOTi',
      'sd_oxx6d0G5uQ1IBo9r',
      'sd_YRWqsCNZEswIzsVL',
      'sd_1XsmFdDxSAAjqt79',
      'sd_Adl3R5778lQh6aH4',
      'sd_X46hyRj5eqi4oujc',
      'sd_T9nQblyFcO7BJWQ3',
      'sd_5I3MxpOCmPtp0H9h',
      'sd_wQEoHwhVUpxuOzJv',
      'sd_9yGbxoYEUIO9o5DC',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_V2AMPwEdiV5Q5TDI(bh, parentSpanInst);
      //appendnew_next_sd_SMEht63RqtgWD00J
      return true;
    }
    return false;
  }
  async sd_m6mspd0f4uiEJsnh(bh, parentSpanInst) {
    const nodes = ['sd_AV0FSF9uFMky9aIz'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_blS4OydNoPv9JRr8(bh, parentSpanInst);
      //appendnew_next_sd_m6mspd0f4uiEJsnh
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
