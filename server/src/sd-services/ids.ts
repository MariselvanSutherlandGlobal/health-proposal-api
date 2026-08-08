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
import * as sd_JNBD4uznkMgNPRbS from './idsutil'; //_splitter_
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
          bh = await this.sd_d7cbyLm09fPfJrFQ(bh, parentSpanInst);
          //appendnew_next_sd_BGYzaBlgslkELLhv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BGYzaBlgslkELLhv');
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
          bh = await this.sd_xJLdzaWQIOt4Xyj5(bh, parentSpanInst);
          //appendnew_next_sd_zQNhChvznJZKgjDR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zQNhChvznJZKgjDR');
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
          bh = await this.sd_B02DNFzNWvGKPu1g(bh, parentSpanInst);
          //appendnew_next_sd_ZbpGwPhUeNCxhHW5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZbpGwPhUeNCxhHW5');
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
          bh = await this.sd_p59dxwrJRwAzpQP8(bh, parentSpanInst);
          //appendnew_next_sd_w77NmEFnakZF7W9e
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_w77NmEFnakZF7W9e');
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
          bh = await this.sd_sMeX0Eok4kd6hkpb(bh, parentSpanInst);
          //appendnew_next_sd_jCBg3GNyc0fOpLUz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jCBg3GNyc0fOpLUz');
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
          bh = await this.sd_cCnQ9LQ8ueXaVfJ8(bh, parentSpanInst);
          //appendnew_next_sd_VZ78J4NwvVgHceaf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VZ78J4NwvVgHceaf');
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
          bh = await this.sd_RIoGSmlY93kOpSLv(bh, parentSpanInst);
          //appendnew_next_sd_K7cqu1q73Cq7KVm2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_K7cqu1q73Cq7KVm2');
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

  async sd_B02DNFzNWvGKPu1g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B02DNFzNWvGKPu1g',
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
      bh = await this.sd_kG19iyw5hf4edgvy(bh, parentSpanInst);
      //appendnew_next_sd_B02DNFzNWvGKPu1g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B02DNFzNWvGKPu1g',
        spanInst,
        'sd_B02DNFzNWvGKPu1g'
      );
    }
  }

  async sd_kG19iyw5hf4edgvy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kG19iyw5hf4edgvy',
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
        bh = await this.sd_jY4vyvUaORaYXISo(bh, parentSpanInst);
      } else {
        bh = await this.sd_rmTtywNFzuZXztC4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kG19iyw5hf4edgvy',
        spanInst,
        'sd_kG19iyw5hf4edgvy'
      );
    }
  }

  async sd_jY4vyvUaORaYXISo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jY4vyvUaORaYXISo',
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
      bh = await this.sd_hjIbxrN1iD7vmyfx(bh, parentSpanInst);
      //appendnew_next_sd_jY4vyvUaORaYXISo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jY4vyvUaORaYXISo',
        spanInst,
        'sd_jY4vyvUaORaYXISo'
      );
    }
  }

  async sd_hjIbxrN1iD7vmyfx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hjIbxrN1iD7vmyfx',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ibwLhwDiXjwKI7H9(bh, parentSpanInst);
      //appendnew_next_sd_hjIbxrN1iD7vmyfx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hjIbxrN1iD7vmyfx',
        spanInst,
        'sd_hjIbxrN1iD7vmyfx'
      );
    }
  }

  async sd_ibwLhwDiXjwKI7H9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ibwLhwDiXjwKI7H9',
      parentSpanInst
    );
    try {
      const sd_JNBD4uznkMgNPRbSInstance: sd_JNBD4uznkMgNPRbS.idsutil =
        sd_JNBD4uznkMgNPRbS.idsutil.getInstance();
      let outputVariables =
        await sd_JNBD4uznkMgNPRbSInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iZ5K0AAW7efZoEFe(bh, parentSpanInst);
      //appendnew_next_sd_ibwLhwDiXjwKI7H9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ibwLhwDiXjwKI7H9',
        spanInst,
        'sd_ibwLhwDiXjwKI7H9'
      );
    }
  }

  async sd_iZ5K0AAW7efZoEFe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iZ5K0AAW7efZoEFe',
      parentSpanInst
    );
    try {
      const sd_JNBD4uznkMgNPRbSInstance: sd_JNBD4uznkMgNPRbS.idsutil =
        sd_JNBD4uznkMgNPRbS.idsutil.getInstance();
      let outputVariables =
        await sd_JNBD4uznkMgNPRbSInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RBK0Sxal1gD6COXM(bh, parentSpanInst);
      //appendnew_next_sd_iZ5K0AAW7efZoEFe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iZ5K0AAW7efZoEFe',
        spanInst,
        'sd_iZ5K0AAW7efZoEFe'
      );
    }
  }

  async sd_RBK0Sxal1gD6COXM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RBK0Sxal1gD6COXM',
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
      await this.sd_XlgtpYckZYpqs5DI(bh, parentSpanInst);
      //appendnew_next_sd_RBK0Sxal1gD6COXM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RBK0Sxal1gD6COXM',
        spanInst,
        'sd_RBK0Sxal1gD6COXM'
      );
    }
  }

  async sd_XlgtpYckZYpqs5DI(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XlgtpYckZYpqs5DI');
    }
  }

  async sd_rmTtywNFzuZXztC4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rmTtywNFzuZXztC4',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BIGadMc19HT03b7t(bh, parentSpanInst);
      //appendnew_next_sd_rmTtywNFzuZXztC4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rmTtywNFzuZXztC4',
        spanInst,
        'sd_rmTtywNFzuZXztC4'
      );
    }
  }

  async sd_BIGadMc19HT03b7t(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BIGadMc19HT03b7t');
    }
  }

  async sd_d7cbyLm09fPfJrFQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d7cbyLm09fPfJrFQ',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wf8HCuznpqNoiewY(bh, parentSpanInst);
      //appendnew_next_sd_d7cbyLm09fPfJrFQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d7cbyLm09fPfJrFQ',
        spanInst,
        'sd_d7cbyLm09fPfJrFQ'
      );
    }
  }

  async sd_wf8HCuznpqNoiewY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wf8HCuznpqNoiewY',
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
        'sd_wf8HCuznpqNoiewY',
        spanInst,
        'sd_wf8HCuznpqNoiewY'
      );
    }
  }

  async sd_p59dxwrJRwAzpQP8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p59dxwrJRwAzpQP8',
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
      bh = await this.sd_7Cs9qBD6gykrvC3s(bh, parentSpanInst);
      //appendnew_next_sd_p59dxwrJRwAzpQP8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p59dxwrJRwAzpQP8',
        spanInst,
        'sd_p59dxwrJRwAzpQP8'
      );
    }
  }

  async sd_7Cs9qBD6gykrvC3s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7Cs9qBD6gykrvC3s',
      parentSpanInst
    );
    try {
      const sd_JNBD4uznkMgNPRbSInstance: sd_JNBD4uznkMgNPRbS.idsutil =
        sd_JNBD4uznkMgNPRbS.idsutil.getInstance();
      let outputVariables =
        await sd_JNBD4uznkMgNPRbSInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2y2pJTYqI8kC950y(bh, parentSpanInst);
      //appendnew_next_sd_7Cs9qBD6gykrvC3s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7Cs9qBD6gykrvC3s',
        spanInst,
        'sd_7Cs9qBD6gykrvC3s'
      );
    }
  }

  async sd_2y2pJTYqI8kC950y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2y2pJTYqI8kC950y',
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
      bh = await this.sd_9UNk0jNgcIYwOIDd(bh, parentSpanInst);
      //appendnew_next_sd_2y2pJTYqI8kC950y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2y2pJTYqI8kC950y',
        spanInst,
        'sd_2y2pJTYqI8kC950y'
      );
    }
  }

  async sd_9UNk0jNgcIYwOIDd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9UNk0jNgcIYwOIDd',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1PvXIdq5MxOXEWxc(bh, parentSpanInst);
      //appendnew_next_sd_9UNk0jNgcIYwOIDd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9UNk0jNgcIYwOIDd',
        spanInst,
        'sd_9UNk0jNgcIYwOIDd'
      );
    }
  }

  async sd_1PvXIdq5MxOXEWxc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1PvXIdq5MxOXEWxc',
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
        bh = await this.sd_9TIjWYgStqyPdaDU(bh, parentSpanInst);
      } else {
        bh = await this.sd_ABic3riO1pCpYXEH(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1PvXIdq5MxOXEWxc',
        spanInst,
        'sd_1PvXIdq5MxOXEWxc'
      );
    }
  }

  async sd_9TIjWYgStqyPdaDU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9TIjWYgStqyPdaDU',
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
      await this.sd_7itMF836dK6ZzJCv(bh, parentSpanInst);
      //appendnew_next_sd_9TIjWYgStqyPdaDU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9TIjWYgStqyPdaDU',
        spanInst,
        'sd_9TIjWYgStqyPdaDU'
      );
    }
  }

  async sd_7itMF836dK6ZzJCv(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7itMF836dK6ZzJCv');
    }
  }

  async sd_ABic3riO1pCpYXEH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ABic3riO1pCpYXEH',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mqM8gJF5EqqI1EP0(bh, parentSpanInst);
      //appendnew_next_sd_ABic3riO1pCpYXEH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ABic3riO1pCpYXEH',
        spanInst,
        'sd_ABic3riO1pCpYXEH'
      );
    }
  }

  async sd_mqM8gJF5EqqI1EP0(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mqM8gJF5EqqI1EP0');
    }
  }

  async sd_sMeX0Eok4kd6hkpb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sMeX0Eok4kd6hkpb',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_OBH3Tv1PxTAy6o0Q(bh, parentSpanInst);
      //appendnew_next_sd_sMeX0Eok4kd6hkpb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sMeX0Eok4kd6hkpb',
        spanInst,
        'sd_sMeX0Eok4kd6hkpb'
      );
    }
  }

  async sd_OBH3Tv1PxTAy6o0Q(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OBH3Tv1PxTAy6o0Q');
    }
  }

  async sd_k6RN3E7AZBuTkcD7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k6RN3E7AZBuTkcD7',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_k6RN3E7AZBuTkcD7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k6RN3E7AZBuTkcD7',
        spanInst,
        'sd_k6RN3E7AZBuTkcD7'
      );
    }
  }

  async sd_cCnQ9LQ8ueXaVfJ8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cCnQ9LQ8ueXaVfJ8',
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
      bh = await this.sd_W0QK250CbH6UczKH(bh, parentSpanInst);
      //appendnew_next_sd_cCnQ9LQ8ueXaVfJ8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cCnQ9LQ8ueXaVfJ8',
        spanInst,
        'sd_cCnQ9LQ8ueXaVfJ8'
      );
    }
  }

  async sd_W0QK250CbH6UczKH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W0QK250CbH6UczKH',
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
      bh = await this.sd_aC1kLC8VwfSBLfJe(bh, parentSpanInst);
      //appendnew_next_sd_W0QK250CbH6UczKH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W0QK250CbH6UczKH',
        spanInst,
        'sd_W0QK250CbH6UczKH'
      );
    }
  }

  async sd_aC1kLC8VwfSBLfJe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aC1kLC8VwfSBLfJe',
      parentSpanInst
    );
    try {
      const sd_JNBD4uznkMgNPRbSInstance: sd_JNBD4uznkMgNPRbS.idsutil =
        sd_JNBD4uznkMgNPRbS.idsutil.getInstance();
      let outputVariables =
        await sd_JNBD4uznkMgNPRbSInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ciH7ZYUFEu91f9DY(bh, parentSpanInst);
      //appendnew_next_sd_aC1kLC8VwfSBLfJe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aC1kLC8VwfSBLfJe',
        spanInst,
        'sd_aC1kLC8VwfSBLfJe'
      );
    }
  }

  async sd_ciH7ZYUFEu91f9DY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ciH7ZYUFEu91f9DY',
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
        bh = await this.sd_y1meFu02STjJvi0w(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_EUdvVBh4egl2h4Zf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ciH7ZYUFEu91f9DY',
        spanInst,
        'sd_ciH7ZYUFEu91f9DY'
      );
    }
  }

  async sd_y1meFu02STjJvi0w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y1meFu02STjJvi0w',
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
      //appendnew_next_sd_y1meFu02STjJvi0w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y1meFu02STjJvi0w',
        spanInst,
        'sd_y1meFu02STjJvi0w'
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
      await this.sd_8pnOO6Pscb7Mr6VO(bh, parentSpanInst);
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

  async sd_8pnOO6Pscb7Mr6VO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8pnOO6Pscb7Mr6VO');
    }
  }

  async sd_EUdvVBh4egl2h4Zf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EUdvVBh4egl2h4Zf',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8pnOO6Pscb7Mr6VO(bh, parentSpanInst);
      //appendnew_next_sd_EUdvVBh4egl2h4Zf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EUdvVBh4egl2h4Zf',
        spanInst,
        'sd_EUdvVBh4egl2h4Zf'
      );
    }
  }

  async sd_RIoGSmlY93kOpSLv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RIoGSmlY93kOpSLv',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vbFCzLwxpnZ0faC1(bh, parentSpanInst);
      //appendnew_next_sd_RIoGSmlY93kOpSLv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RIoGSmlY93kOpSLv',
        spanInst,
        'sd_RIoGSmlY93kOpSLv'
      );
    }
  }

  async sd_vbFCzLwxpnZ0faC1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vbFCzLwxpnZ0faC1',
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
        bh = await this.sd_9joSLUtH7PGidZWL(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rCKxgK0BQW120YmZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vbFCzLwxpnZ0faC1',
        spanInst,
        'sd_vbFCzLwxpnZ0faC1'
      );
    }
  }

  async sd_9joSLUtH7PGidZWL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9joSLUtH7PGidZWL',
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
      await this.sd_MTMzNq9y99ChTdeJ(bh, parentSpanInst);
      //appendnew_next_sd_9joSLUtH7PGidZWL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9joSLUtH7PGidZWL',
        spanInst,
        'sd_9joSLUtH7PGidZWL'
      );
    }
  }

  async sd_MTMzNq9y99ChTdeJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MTMzNq9y99ChTdeJ');
    }
  }

  async sd_rCKxgK0BQW120YmZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rCKxgK0BQW120YmZ',
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
      bh = await this.sd_BJkOA1Ik4nCpuoA9(bh, parentSpanInst);
      //appendnew_next_sd_rCKxgK0BQW120YmZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rCKxgK0BQW120YmZ',
        spanInst,
        'sd_rCKxgK0BQW120YmZ'
      );
    }
  }

  async sd_BJkOA1Ik4nCpuoA9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BJkOA1Ik4nCpuoA9',
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
      bh = await this.sd_0KdK43NclPmkggP5(bh, parentSpanInst);
      //appendnew_next_sd_BJkOA1Ik4nCpuoA9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BJkOA1Ik4nCpuoA9',
        spanInst,
        'sd_BJkOA1Ik4nCpuoA9'
      );
    }
  }

  async sd_0KdK43NclPmkggP5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0KdK43NclPmkggP5',
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
        bh = await this.sd_TrmEKvzCuiBq8BiV(bh, parentSpanInst);
      } else {
        bh = await this.sd_E73MAyTjqgMUhZDC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0KdK43NclPmkggP5',
        spanInst,
        'sd_0KdK43NclPmkggP5'
      );
    }
  }

  async sd_TrmEKvzCuiBq8BiV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TrmEKvzCuiBq8BiV',
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
      await this.sd_BvHnma9gpI6UQd5y(bh, parentSpanInst);
      //appendnew_next_sd_TrmEKvzCuiBq8BiV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TrmEKvzCuiBq8BiV',
        spanInst,
        'sd_TrmEKvzCuiBq8BiV'
      );
    }
  }

  async sd_BvHnma9gpI6UQd5y(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BvHnma9gpI6UQd5y');
    }
  }

  async sd_E73MAyTjqgMUhZDC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E73MAyTjqgMUhZDC',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_iZoEdcG5Q6OCWBcv(bh, parentSpanInst);
      //appendnew_next_sd_E73MAyTjqgMUhZDC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E73MAyTjqgMUhZDC',
        spanInst,
        'sd_E73MAyTjqgMUhZDC'
      );
    }
  }

  async sd_iZoEdcG5Q6OCWBcv(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iZoEdcG5Q6OCWBcv');
    }
  }

  async sd_xJLdzaWQIOt4Xyj5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xJLdzaWQIOt4Xyj5',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0ZF1R2UgxKJ4Y7et(bh, parentSpanInst);
      //appendnew_next_sd_xJLdzaWQIOt4Xyj5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xJLdzaWQIOt4Xyj5',
        spanInst,
        'sd_xJLdzaWQIOt4Xyj5'
      );
    }
  }

  async sd_0ZF1R2UgxKJ4Y7et(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0ZF1R2UgxKJ4Y7et',
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
      bh = await this.sd_JGMnfo9XX96OjCg6(bh, parentSpanInst);
      //appendnew_next_sd_0ZF1R2UgxKJ4Y7et
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0ZF1R2UgxKJ4Y7et',
        spanInst,
        'sd_0ZF1R2UgxKJ4Y7et'
      );
    }
  }

  async sd_JGMnfo9XX96OjCg6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JGMnfo9XX96OjCg6',
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
      bh = await this.sd_XQGhSGImhDaklea9(bh, parentSpanInst);
      //appendnew_next_sd_JGMnfo9XX96OjCg6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JGMnfo9XX96OjCg6',
        spanInst,
        'sd_JGMnfo9XX96OjCg6'
      );
    }
  }

  async sd_XQGhSGImhDaklea9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XQGhSGImhDaklea9',
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
        bh = await this.sd_VneZL2hj0sSlqJPJ(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_vL4UZmMTcbjYMTia(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XQGhSGImhDaklea9',
        spanInst,
        'sd_XQGhSGImhDaklea9'
      );
    }
  }

  async sd_VneZL2hj0sSlqJPJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VneZL2hj0sSlqJPJ',
      parentSpanInst
    );
    try {
      const sd_JNBD4uznkMgNPRbSInstance: sd_JNBD4uznkMgNPRbS.idsutil =
        sd_JNBD4uznkMgNPRbS.idsutil.getInstance();
      let outputVariables = await sd_JNBD4uznkMgNPRbSInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cn9dDJSMxCUwWfwm(bh, parentSpanInst);
      //appendnew_next_sd_VneZL2hj0sSlqJPJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VneZL2hj0sSlqJPJ',
        spanInst,
        'sd_VneZL2hj0sSlqJPJ'
      );
    }
  }

  async sd_cn9dDJSMxCUwWfwm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cn9dDJSMxCUwWfwm',
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
        bh = await this.sd_Lk7idI2vW3e6vQZR(bh, parentSpanInst);
      } else {
        bh = await this.sd_pBcDoZ0BH6VpgOAx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cn9dDJSMxCUwWfwm',
        spanInst,
        'sd_cn9dDJSMxCUwWfwm'
      );
    }
  }

  async sd_Lk7idI2vW3e6vQZR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Lk7idI2vW3e6vQZR',
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
      bh = await this.sd_NjttKLQ3jHUBmA9a(bh, parentSpanInst);
      //appendnew_next_sd_Lk7idI2vW3e6vQZR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lk7idI2vW3e6vQZR',
        spanInst,
        'sd_Lk7idI2vW3e6vQZR'
      );
    }
  }

  async sd_NjttKLQ3jHUBmA9a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NjttKLQ3jHUBmA9a',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rXSu3oZWJKRmVBje(bh, parentSpanInst);
      //appendnew_next_sd_NjttKLQ3jHUBmA9a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NjttKLQ3jHUBmA9a',
        spanInst,
        'sd_NjttKLQ3jHUBmA9a'
      );
    }
  }

  async sd_rXSu3oZWJKRmVBje(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rXSu3oZWJKRmVBje');
    }
  }

  async sd_pBcDoZ0BH6VpgOAx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pBcDoZ0BH6VpgOAx',
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
        bh = await this.sd_G8YXlxJDZcdS4ez5(bh, parentSpanInst);
      } else {
        bh = await this.sd_5Lvb6RBLcoBQlqC4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pBcDoZ0BH6VpgOAx',
        spanInst,
        'sd_pBcDoZ0BH6VpgOAx'
      );
    }
  }

  async sd_G8YXlxJDZcdS4ez5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G8YXlxJDZcdS4ez5',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2LfSaNFyerfA2LJi(bh, parentSpanInst);
      //appendnew_next_sd_G8YXlxJDZcdS4ez5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G8YXlxJDZcdS4ez5',
        spanInst,
        'sd_G8YXlxJDZcdS4ez5'
      );
    }
  }

  async sd_2LfSaNFyerfA2LJi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2LfSaNFyerfA2LJi',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5Lvb6RBLcoBQlqC4(bh, parentSpanInst);
      //appendnew_next_sd_2LfSaNFyerfA2LJi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2LfSaNFyerfA2LJi',
        spanInst,
        'sd_2LfSaNFyerfA2LJi'
      );
    }
  }

  async sd_5Lvb6RBLcoBQlqC4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5Lvb6RBLcoBQlqC4',
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
        'sd_5Lvb6RBLcoBQlqC4',
        spanInst,
        'sd_5Lvb6RBLcoBQlqC4'
      );
    }
  }

  async sd_vL4UZmMTcbjYMTia(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vL4UZmMTcbjYMTia',
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
        bh = await this.sd_PnLgGJPyp9xEJkA4(bh, parentSpanInst);
      } else {
        bh = await this.sd_auroVyDLOvTInzjY(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vL4UZmMTcbjYMTia',
        spanInst,
        'sd_vL4UZmMTcbjYMTia'
      );
    }
  }

  async sd_PnLgGJPyp9xEJkA4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PnLgGJPyp9xEJkA4',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rXSu3oZWJKRmVBje(bh, parentSpanInst);
      //appendnew_next_sd_PnLgGJPyp9xEJkA4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PnLgGJPyp9xEJkA4',
        spanInst,
        'sd_PnLgGJPyp9xEJkA4'
      );
    }
  }

  async sd_auroVyDLOvTInzjY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_auroVyDLOvTInzjY',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rXSu3oZWJKRmVBje(bh, parentSpanInst);
      //appendnew_next_sd_auroVyDLOvTInzjY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_auroVyDLOvTInzjY',
        spanInst,
        'sd_auroVyDLOvTInzjY'
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
      (await this.sd_IvudmlTnZiw9MPkm(bh, parentSpanInst)) ||
      (await this.sd_m42upUqB6UVOuB1X(bh, parentSpanInst))
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
  async sd_IvudmlTnZiw9MPkm(bh, parentSpanInst) {
    const nodes = [
      'sd_iZ5K0AAW7efZoEFe',
      'sd_w77NmEFnakZF7W9e',
      'sd_7Cs9qBD6gykrvC3s',
      'sd_2y2pJTYqI8kC950y',
      'sd_p59dxwrJRwAzpQP8',
      'sd_1PvXIdq5MxOXEWxc',
      'sd_9TIjWYgStqyPdaDU',
      'sd_ABic3riO1pCpYXEH',
      'sd_7itMF836dK6ZzJCv',
      'sd_mqM8gJF5EqqI1EP0',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_k6RN3E7AZBuTkcD7(bh, parentSpanInst);
      //appendnew_next_sd_IvudmlTnZiw9MPkm
      return true;
    }
    return false;
  }
  async sd_m42upUqB6UVOuB1X(bh, parentSpanInst) {
    const nodes = ['sd_VneZL2hj0sSlqJPJ'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_NjttKLQ3jHUBmA9a(bh, parentSpanInst);
      //appendnew_next_sd_m42upUqB6UVOuB1X
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
