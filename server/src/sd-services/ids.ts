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
import * as sd_SvGRmmGVRPROW9vh from './idsutil'; //_splitter_
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
          bh = await this.sd_1MNB32BAgplEnBr4(bh, parentSpanInst);
          //appendnew_next_sd_CluP246QDvmh9v3c
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CluP246QDvmh9v3c');
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
          bh = await this.sd_9zGzjtCheQrhJhLA(bh, parentSpanInst);
          //appendnew_next_sd_nVKpxzIPQomAuR3n
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nVKpxzIPQomAuR3n');
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
          bh = await this.sd_WyN4fs52xFHBPw97(bh, parentSpanInst);
          //appendnew_next_sd_z7ejd9MKmroWflvw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z7ejd9MKmroWflvw');
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
          bh = await this.sd_ZrEymq8U3EwIRxMR(bh, parentSpanInst);
          //appendnew_next_sd_irkxBQytcY7CBg7e
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_irkxBQytcY7CBg7e');
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
          bh = await this.sd_LIi35KJa9Q63RDDA(bh, parentSpanInst);
          //appendnew_next_sd_Lj1yqJuSyOGoNQkF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Lj1yqJuSyOGoNQkF');
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
          bh = await this.sd_0O0584CSdjklptJw(bh, parentSpanInst);
          //appendnew_next_sd_GGiZzd5vv3JMRy5d
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GGiZzd5vv3JMRy5d');
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
          bh = await this.sd_nofcbGXH7LM9mQLC(bh, parentSpanInst);
          //appendnew_next_sd_JgTIGDMQq2cKfoWo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JgTIGDMQq2cKfoWo');
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

  async sd_WyN4fs52xFHBPw97(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WyN4fs52xFHBPw97',
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
      bh = await this.sd_uPz6zTnCaUw1BC3x(bh, parentSpanInst);
      //appendnew_next_sd_WyN4fs52xFHBPw97
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WyN4fs52xFHBPw97',
        spanInst,
        'sd_WyN4fs52xFHBPw97'
      );
    }
  }

  async sd_uPz6zTnCaUw1BC3x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uPz6zTnCaUw1BC3x',
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
        bh = await this.sd_ysefzAzm1WLbJfIg(bh, parentSpanInst);
      } else {
        bh = await this.sd_MFVD9x5bvyRGWwRC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uPz6zTnCaUw1BC3x',
        spanInst,
        'sd_uPz6zTnCaUw1BC3x'
      );
    }
  }

  async sd_ysefzAzm1WLbJfIg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ysefzAzm1WLbJfIg',
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
      bh = await this.sd_X4mWRARcUlnNcZcU(bh, parentSpanInst);
      //appendnew_next_sd_ysefzAzm1WLbJfIg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ysefzAzm1WLbJfIg',
        spanInst,
        'sd_ysefzAzm1WLbJfIg'
      );
    }
  }

  async sd_X4mWRARcUlnNcZcU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X4mWRARcUlnNcZcU',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4synoWg0NP1rX7Zy(bh, parentSpanInst);
      //appendnew_next_sd_X4mWRARcUlnNcZcU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X4mWRARcUlnNcZcU',
        spanInst,
        'sd_X4mWRARcUlnNcZcU'
      );
    }
  }

  async sd_4synoWg0NP1rX7Zy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4synoWg0NP1rX7Zy',
      parentSpanInst
    );
    try {
      const sd_SvGRmmGVRPROW9vhInstance: sd_SvGRmmGVRPROW9vh.idsutil =
        sd_SvGRmmGVRPROW9vh.idsutil.getInstance();
      let outputVariables =
        await sd_SvGRmmGVRPROW9vhInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5XytIKJhmeTC7hII(bh, parentSpanInst);
      //appendnew_next_sd_4synoWg0NP1rX7Zy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4synoWg0NP1rX7Zy',
        spanInst,
        'sd_4synoWg0NP1rX7Zy'
      );
    }
  }

  async sd_5XytIKJhmeTC7hII(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5XytIKJhmeTC7hII',
      parentSpanInst
    );
    try {
      const sd_SvGRmmGVRPROW9vhInstance: sd_SvGRmmGVRPROW9vh.idsutil =
        sd_SvGRmmGVRPROW9vh.idsutil.getInstance();
      let outputVariables =
        await sd_SvGRmmGVRPROW9vhInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NMmL5KitKKxBR2ei(bh, parentSpanInst);
      //appendnew_next_sd_5XytIKJhmeTC7hII
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5XytIKJhmeTC7hII',
        spanInst,
        'sd_5XytIKJhmeTC7hII'
      );
    }
  }

  async sd_NMmL5KitKKxBR2ei(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NMmL5KitKKxBR2ei',
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
      await this.sd_ZSN8pgCh4jF31cuN(bh, parentSpanInst);
      //appendnew_next_sd_NMmL5KitKKxBR2ei
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NMmL5KitKKxBR2ei',
        spanInst,
        'sd_NMmL5KitKKxBR2ei'
      );
    }
  }

  async sd_ZSN8pgCh4jF31cuN(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZSN8pgCh4jF31cuN');
    }
  }

  async sd_MFVD9x5bvyRGWwRC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MFVD9x5bvyRGWwRC',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pFh8cILsKuTxvIZo(bh, parentSpanInst);
      //appendnew_next_sd_MFVD9x5bvyRGWwRC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MFVD9x5bvyRGWwRC',
        spanInst,
        'sd_MFVD9x5bvyRGWwRC'
      );
    }
  }

  async sd_pFh8cILsKuTxvIZo(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pFh8cILsKuTxvIZo');
    }
  }

  async sd_1MNB32BAgplEnBr4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1MNB32BAgplEnBr4',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tJG1x12qkRkMXMi1(bh, parentSpanInst);
      //appendnew_next_sd_1MNB32BAgplEnBr4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1MNB32BAgplEnBr4',
        spanInst,
        'sd_1MNB32BAgplEnBr4'
      );
    }
  }

  async sd_tJG1x12qkRkMXMi1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tJG1x12qkRkMXMi1',
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
        'sd_tJG1x12qkRkMXMi1',
        spanInst,
        'sd_tJG1x12qkRkMXMi1'
      );
    }
  }

  async sd_ZrEymq8U3EwIRxMR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZrEymq8U3EwIRxMR',
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
      bh = await this.sd_GPLO3bEyjwyzQF7I(bh, parentSpanInst);
      //appendnew_next_sd_ZrEymq8U3EwIRxMR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZrEymq8U3EwIRxMR',
        spanInst,
        'sd_ZrEymq8U3EwIRxMR'
      );
    }
  }

  async sd_GPLO3bEyjwyzQF7I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GPLO3bEyjwyzQF7I',
      parentSpanInst
    );
    try {
      const sd_SvGRmmGVRPROW9vhInstance: sd_SvGRmmGVRPROW9vh.idsutil =
        sd_SvGRmmGVRPROW9vh.idsutil.getInstance();
      let outputVariables =
        await sd_SvGRmmGVRPROW9vhInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PJQ0j32iVOJv7uLM(bh, parentSpanInst);
      //appendnew_next_sd_GPLO3bEyjwyzQF7I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GPLO3bEyjwyzQF7I',
        spanInst,
        'sd_GPLO3bEyjwyzQF7I'
      );
    }
  }

  async sd_PJQ0j32iVOJv7uLM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PJQ0j32iVOJv7uLM',
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
      bh = await this.sd_Ck0lhVhxIZ0ch9ti(bh, parentSpanInst);
      //appendnew_next_sd_PJQ0j32iVOJv7uLM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PJQ0j32iVOJv7uLM',
        spanInst,
        'sd_PJQ0j32iVOJv7uLM'
      );
    }
  }

  async sd_Ck0lhVhxIZ0ch9ti(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ck0lhVhxIZ0ch9ti',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oG0W4RvY0jgyLb0d(bh, parentSpanInst);
      //appendnew_next_sd_Ck0lhVhxIZ0ch9ti
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ck0lhVhxIZ0ch9ti',
        spanInst,
        'sd_Ck0lhVhxIZ0ch9ti'
      );
    }
  }

  async sd_oG0W4RvY0jgyLb0d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oG0W4RvY0jgyLb0d',
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
        bh = await this.sd_LCBRJgMn4OVlSVWY(bh, parentSpanInst);
      } else {
        bh = await this.sd_tcsMNIOCrqI68nRM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oG0W4RvY0jgyLb0d',
        spanInst,
        'sd_oG0W4RvY0jgyLb0d'
      );
    }
  }

  async sd_LCBRJgMn4OVlSVWY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LCBRJgMn4OVlSVWY',
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
      await this.sd_1isfAA9D7K849CdP(bh, parentSpanInst);
      //appendnew_next_sd_LCBRJgMn4OVlSVWY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LCBRJgMn4OVlSVWY',
        spanInst,
        'sd_LCBRJgMn4OVlSVWY'
      );
    }
  }

  async sd_1isfAA9D7K849CdP(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1isfAA9D7K849CdP');
    }
  }

  async sd_tcsMNIOCrqI68nRM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tcsMNIOCrqI68nRM',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cewtgwpUv4eqVrUX(bh, parentSpanInst);
      //appendnew_next_sd_tcsMNIOCrqI68nRM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tcsMNIOCrqI68nRM',
        spanInst,
        'sd_tcsMNIOCrqI68nRM'
      );
    }
  }

  async sd_cewtgwpUv4eqVrUX(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cewtgwpUv4eqVrUX');
    }
  }

  async sd_LIi35KJa9Q63RDDA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LIi35KJa9Q63RDDA',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_hlRCWkVSggfvEchX(bh, parentSpanInst);
      //appendnew_next_sd_LIi35KJa9Q63RDDA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LIi35KJa9Q63RDDA',
        spanInst,
        'sd_LIi35KJa9Q63RDDA'
      );
    }
  }

  async sd_hlRCWkVSggfvEchX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hlRCWkVSggfvEchX');
    }
  }

  async sd_YNnmYLYVNolmU3zW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YNnmYLYVNolmU3zW',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_YNnmYLYVNolmU3zW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YNnmYLYVNolmU3zW',
        spanInst,
        'sd_YNnmYLYVNolmU3zW'
      );
    }
  }

  async sd_0O0584CSdjklptJw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0O0584CSdjklptJw',
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
      bh = await this.sd_r2Sms124kxs6op4k(bh, parentSpanInst);
      //appendnew_next_sd_0O0584CSdjklptJw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0O0584CSdjklptJw',
        spanInst,
        'sd_0O0584CSdjklptJw'
      );
    }
  }

  async sd_r2Sms124kxs6op4k(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r2Sms124kxs6op4k',
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
      bh = await this.sd_gLHc8mx9Mep0dXOI(bh, parentSpanInst);
      //appendnew_next_sd_r2Sms124kxs6op4k
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r2Sms124kxs6op4k',
        spanInst,
        'sd_r2Sms124kxs6op4k'
      );
    }
  }

  async sd_gLHc8mx9Mep0dXOI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gLHc8mx9Mep0dXOI',
      parentSpanInst
    );
    try {
      const sd_SvGRmmGVRPROW9vhInstance: sd_SvGRmmGVRPROW9vh.idsutil =
        sd_SvGRmmGVRPROW9vh.idsutil.getInstance();
      let outputVariables =
        await sd_SvGRmmGVRPROW9vhInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gb9uE7UIbLHjwtCo(bh, parentSpanInst);
      //appendnew_next_sd_gLHc8mx9Mep0dXOI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gLHc8mx9Mep0dXOI',
        spanInst,
        'sd_gLHc8mx9Mep0dXOI'
      );
    }
  }

  async sd_gb9uE7UIbLHjwtCo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gb9uE7UIbLHjwtCo',
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
        bh = await this.sd_GCulhxhVyZvvuuFP(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_VHKx4yYPMXFHOYSg(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gb9uE7UIbLHjwtCo',
        spanInst,
        'sd_gb9uE7UIbLHjwtCo'
      );
    }
  }

  async sd_GCulhxhVyZvvuuFP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GCulhxhVyZvvuuFP',
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
      //appendnew_next_sd_GCulhxhVyZvvuuFP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GCulhxhVyZvvuuFP',
        spanInst,
        'sd_GCulhxhVyZvvuuFP'
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
      await this.sd_Pd4mye4cj7Rg9Ev1(bh, parentSpanInst);
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

  async sd_Pd4mye4cj7Rg9Ev1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pd4mye4cj7Rg9Ev1');
    }
  }

  async sd_VHKx4yYPMXFHOYSg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VHKx4yYPMXFHOYSg',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Pd4mye4cj7Rg9Ev1(bh, parentSpanInst);
      //appendnew_next_sd_VHKx4yYPMXFHOYSg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VHKx4yYPMXFHOYSg',
        spanInst,
        'sd_VHKx4yYPMXFHOYSg'
      );
    }
  }

  async sd_nofcbGXH7LM9mQLC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nofcbGXH7LM9mQLC',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_n3roxS51jgdPU5cB(bh, parentSpanInst);
      //appendnew_next_sd_nofcbGXH7LM9mQLC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nofcbGXH7LM9mQLC',
        spanInst,
        'sd_nofcbGXH7LM9mQLC'
      );
    }
  }

  async sd_n3roxS51jgdPU5cB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n3roxS51jgdPU5cB',
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
        bh = await this.sd_CvKy0exn4s1XuOLL(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1gRd00MDu9GNCI7b(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n3roxS51jgdPU5cB',
        spanInst,
        'sd_n3roxS51jgdPU5cB'
      );
    }
  }

  async sd_CvKy0exn4s1XuOLL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CvKy0exn4s1XuOLL',
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
      await this.sd_vNDL1xRwI6iXpdHM(bh, parentSpanInst);
      //appendnew_next_sd_CvKy0exn4s1XuOLL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CvKy0exn4s1XuOLL',
        spanInst,
        'sd_CvKy0exn4s1XuOLL'
      );
    }
  }

  async sd_vNDL1xRwI6iXpdHM(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vNDL1xRwI6iXpdHM');
    }
  }

  async sd_1gRd00MDu9GNCI7b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1gRd00MDu9GNCI7b',
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
      bh = await this.sd_fbIEIvQohZgSyK68(bh, parentSpanInst);
      //appendnew_next_sd_1gRd00MDu9GNCI7b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1gRd00MDu9GNCI7b',
        spanInst,
        'sd_1gRd00MDu9GNCI7b'
      );
    }
  }

  async sd_fbIEIvQohZgSyK68(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fbIEIvQohZgSyK68',
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
      bh = await this.sd_gvcpUgAJuEPxhEQc(bh, parentSpanInst);
      //appendnew_next_sd_fbIEIvQohZgSyK68
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fbIEIvQohZgSyK68',
        spanInst,
        'sd_fbIEIvQohZgSyK68'
      );
    }
  }

  async sd_gvcpUgAJuEPxhEQc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gvcpUgAJuEPxhEQc',
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
        bh = await this.sd_ez0prJ4aYOSvDL25(bh, parentSpanInst);
      } else {
        bh = await this.sd_nPT8OI5etGsMCuQf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gvcpUgAJuEPxhEQc',
        spanInst,
        'sd_gvcpUgAJuEPxhEQc'
      );
    }
  }

  async sd_ez0prJ4aYOSvDL25(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ez0prJ4aYOSvDL25',
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
      await this.sd_PjTTkeECATfOIe7P(bh, parentSpanInst);
      //appendnew_next_sd_ez0prJ4aYOSvDL25
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ez0prJ4aYOSvDL25',
        spanInst,
        'sd_ez0prJ4aYOSvDL25'
      );
    }
  }

  async sd_PjTTkeECATfOIe7P(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PjTTkeECATfOIe7P');
    }
  }

  async sd_nPT8OI5etGsMCuQf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nPT8OI5etGsMCuQf',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_aMemHCqxzMa5nChA(bh, parentSpanInst);
      //appendnew_next_sd_nPT8OI5etGsMCuQf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nPT8OI5etGsMCuQf',
        spanInst,
        'sd_nPT8OI5etGsMCuQf'
      );
    }
  }

  async sd_aMemHCqxzMa5nChA(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aMemHCqxzMa5nChA');
    }
  }

  async sd_9zGzjtCheQrhJhLA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9zGzjtCheQrhJhLA',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zLgXaQBHrDlfqEEC(bh, parentSpanInst);
      //appendnew_next_sd_9zGzjtCheQrhJhLA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9zGzjtCheQrhJhLA',
        spanInst,
        'sd_9zGzjtCheQrhJhLA'
      );
    }
  }

  async sd_zLgXaQBHrDlfqEEC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zLgXaQBHrDlfqEEC',
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
      bh = await this.sd_Y9TM2VPJLu9mvn27(bh, parentSpanInst);
      //appendnew_next_sd_zLgXaQBHrDlfqEEC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zLgXaQBHrDlfqEEC',
        spanInst,
        'sd_zLgXaQBHrDlfqEEC'
      );
    }
  }

  async sd_Y9TM2VPJLu9mvn27(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y9TM2VPJLu9mvn27',
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
      bh = await this.sd_FFO8WpAT1St0J98z(bh, parentSpanInst);
      //appendnew_next_sd_Y9TM2VPJLu9mvn27
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y9TM2VPJLu9mvn27',
        spanInst,
        'sd_Y9TM2VPJLu9mvn27'
      );
    }
  }

  async sd_FFO8WpAT1St0J98z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FFO8WpAT1St0J98z',
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
        bh = await this.sd_CJssbWyFw0tySnlw(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_8pzHXiL9YuGaGPdu(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FFO8WpAT1St0J98z',
        spanInst,
        'sd_FFO8WpAT1St0J98z'
      );
    }
  }

  async sd_CJssbWyFw0tySnlw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CJssbWyFw0tySnlw',
      parentSpanInst
    );
    try {
      const sd_SvGRmmGVRPROW9vhInstance: sd_SvGRmmGVRPROW9vh.idsutil =
        sd_SvGRmmGVRPROW9vh.idsutil.getInstance();
      let outputVariables = await sd_SvGRmmGVRPROW9vhInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4BBjsDep1nVhIQfS(bh, parentSpanInst);
      //appendnew_next_sd_CJssbWyFw0tySnlw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CJssbWyFw0tySnlw',
        spanInst,
        'sd_CJssbWyFw0tySnlw'
      );
    }
  }

  async sd_4BBjsDep1nVhIQfS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4BBjsDep1nVhIQfS',
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
        bh = await this.sd_ogzVlEYwrkgoM3qG(bh, parentSpanInst);
      } else {
        bh = await this.sd_MZBxRjUzr2z8MM08(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4BBjsDep1nVhIQfS',
        spanInst,
        'sd_4BBjsDep1nVhIQfS'
      );
    }
  }

  async sd_ogzVlEYwrkgoM3qG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ogzVlEYwrkgoM3qG',
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
      bh = await this.sd_CEO70rrrlOXVMuEl(bh, parentSpanInst);
      //appendnew_next_sd_ogzVlEYwrkgoM3qG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ogzVlEYwrkgoM3qG',
        spanInst,
        'sd_ogzVlEYwrkgoM3qG'
      );
    }
  }

  async sd_CEO70rrrlOXVMuEl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CEO70rrrlOXVMuEl',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NGE6mXfMos4iwCZD(bh, parentSpanInst);
      //appendnew_next_sd_CEO70rrrlOXVMuEl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CEO70rrrlOXVMuEl',
        spanInst,
        'sd_CEO70rrrlOXVMuEl'
      );
    }
  }

  async sd_NGE6mXfMos4iwCZD(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NGE6mXfMos4iwCZD');
    }
  }

  async sd_MZBxRjUzr2z8MM08(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MZBxRjUzr2z8MM08',
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
        bh = await this.sd_06pO75uZsVNzS2bR(bh, parentSpanInst);
      } else {
        bh = await this.sd_5OU9zwZR8RuImtp4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MZBxRjUzr2z8MM08',
        spanInst,
        'sd_MZBxRjUzr2z8MM08'
      );
    }
  }

  async sd_06pO75uZsVNzS2bR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_06pO75uZsVNzS2bR',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NyF4nkUSFt1XGOaf(bh, parentSpanInst);
      //appendnew_next_sd_06pO75uZsVNzS2bR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_06pO75uZsVNzS2bR',
        spanInst,
        'sd_06pO75uZsVNzS2bR'
      );
    }
  }

  async sd_NyF4nkUSFt1XGOaf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NyF4nkUSFt1XGOaf',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5OU9zwZR8RuImtp4(bh, parentSpanInst);
      //appendnew_next_sd_NyF4nkUSFt1XGOaf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NyF4nkUSFt1XGOaf',
        spanInst,
        'sd_NyF4nkUSFt1XGOaf'
      );
    }
  }

  async sd_5OU9zwZR8RuImtp4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5OU9zwZR8RuImtp4',
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
        'sd_5OU9zwZR8RuImtp4',
        spanInst,
        'sd_5OU9zwZR8RuImtp4'
      );
    }
  }

  async sd_8pzHXiL9YuGaGPdu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8pzHXiL9YuGaGPdu',
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
        bh = await this.sd_oXcJ0v09CKBXGx6G(bh, parentSpanInst);
      } else {
        bh = await this.sd_GX8PBOjiTxFKj5Ms(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8pzHXiL9YuGaGPdu',
        spanInst,
        'sd_8pzHXiL9YuGaGPdu'
      );
    }
  }

  async sd_oXcJ0v09CKBXGx6G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oXcJ0v09CKBXGx6G',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NGE6mXfMos4iwCZD(bh, parentSpanInst);
      //appendnew_next_sd_oXcJ0v09CKBXGx6G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oXcJ0v09CKBXGx6G',
        spanInst,
        'sd_oXcJ0v09CKBXGx6G'
      );
    }
  }

  async sd_GX8PBOjiTxFKj5Ms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GX8PBOjiTxFKj5Ms',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NGE6mXfMos4iwCZD(bh, parentSpanInst);
      //appendnew_next_sd_GX8PBOjiTxFKj5Ms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GX8PBOjiTxFKj5Ms',
        spanInst,
        'sd_GX8PBOjiTxFKj5Ms'
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
      (await this.sd_4s886it3l6XMLVNK(bh, parentSpanInst)) ||
      (await this.sd_prAMkGxbkljqPhEU(bh, parentSpanInst))
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
  async sd_4s886it3l6XMLVNK(bh, parentSpanInst) {
    const nodes = [
      'sd_5XytIKJhmeTC7hII',
      'sd_irkxBQytcY7CBg7e',
      'sd_GPLO3bEyjwyzQF7I',
      'sd_PJQ0j32iVOJv7uLM',
      'sd_ZrEymq8U3EwIRxMR',
      'sd_oG0W4RvY0jgyLb0d',
      'sd_LCBRJgMn4OVlSVWY',
      'sd_tcsMNIOCrqI68nRM',
      'sd_1isfAA9D7K849CdP',
      'sd_cewtgwpUv4eqVrUX',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_YNnmYLYVNolmU3zW(bh, parentSpanInst);
      //appendnew_next_sd_4s886it3l6XMLVNK
      return true;
    }
    return false;
  }
  async sd_prAMkGxbkljqPhEU(bh, parentSpanInst) {
    const nodes = ['sd_CJssbWyFw0tySnlw'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_CEO70rrrlOXVMuEl(bh, parentSpanInst);
      //appendnew_next_sd_prAMkGxbkljqPhEU
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
