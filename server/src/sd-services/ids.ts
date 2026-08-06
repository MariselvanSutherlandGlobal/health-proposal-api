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
import * as sd_YMDbx0Q56bGgQO8H from './idsutil'; //_splitter_
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
          bh = await this.sd_PlSmscwdN4FBVj11(bh, parentSpanInst);
          //appendnew_next_sd_YO2P8Ee4LrPFuASB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YO2P8Ee4LrPFuASB');
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
          bh = await this.sd_wUuUAkylw8DW6eqb(bh, parentSpanInst);
          //appendnew_next_sd_9v85BuKE2sMDhSLX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9v85BuKE2sMDhSLX');
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
          bh = await this.sd_9XcJh0UU35BoRnHD(bh, parentSpanInst);
          //appendnew_next_sd_WeL1C0vDImaUmNy7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WeL1C0vDImaUmNy7');
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
          bh = await this.sd_V9fC2ZLUVrrKq68K(bh, parentSpanInst);
          //appendnew_next_sd_Uo6u3JVJmPjPVnaV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Uo6u3JVJmPjPVnaV');
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
          bh = await this.sd_IBKrlI71t9gWgXuG(bh, parentSpanInst);
          //appendnew_next_sd_aYKOfFsIqBwJwAFU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aYKOfFsIqBwJwAFU');
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
          bh = await this.sd_Dxua10qCKaUb0HnJ(bh, parentSpanInst);
          //appendnew_next_sd_D5n4oLspkvXZgmXp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_D5n4oLspkvXZgmXp');
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
          bh = await this.sd_ta2MAoGzxjjeZtpz(bh, parentSpanInst);
          //appendnew_next_sd_xVkz3WWQDpdxrosj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xVkz3WWQDpdxrosj');
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

  async sd_9XcJh0UU35BoRnHD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9XcJh0UU35BoRnHD',
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
      bh = await this.sd_cvyeClztHl6Tyapi(bh, parentSpanInst);
      //appendnew_next_sd_9XcJh0UU35BoRnHD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9XcJh0UU35BoRnHD',
        spanInst,
        'sd_9XcJh0UU35BoRnHD'
      );
    }
  }

  async sd_cvyeClztHl6Tyapi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cvyeClztHl6Tyapi',
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
        bh = await this.sd_wZFpqSmqTmHQCI2M(bh, parentSpanInst);
      } else {
        bh = await this.sd_vnOGCYCojlnaVhL3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cvyeClztHl6Tyapi',
        spanInst,
        'sd_cvyeClztHl6Tyapi'
      );
    }
  }

  async sd_wZFpqSmqTmHQCI2M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wZFpqSmqTmHQCI2M',
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
      bh = await this.sd_ccPGdwfVErSajGpA(bh, parentSpanInst);
      //appendnew_next_sd_wZFpqSmqTmHQCI2M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wZFpqSmqTmHQCI2M',
        spanInst,
        'sd_wZFpqSmqTmHQCI2M'
      );
    }
  }

  async sd_ccPGdwfVErSajGpA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ccPGdwfVErSajGpA',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vhJjfY48Po3pteW1(bh, parentSpanInst);
      //appendnew_next_sd_ccPGdwfVErSajGpA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ccPGdwfVErSajGpA',
        spanInst,
        'sd_ccPGdwfVErSajGpA'
      );
    }
  }

  async sd_vhJjfY48Po3pteW1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vhJjfY48Po3pteW1',
      parentSpanInst
    );
    try {
      const sd_YMDbx0Q56bGgQO8HInstance: sd_YMDbx0Q56bGgQO8H.idsutil =
        sd_YMDbx0Q56bGgQO8H.idsutil.getInstance();
      let outputVariables =
        await sd_YMDbx0Q56bGgQO8HInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qpBQOcaDWy1qXNEx(bh, parentSpanInst);
      //appendnew_next_sd_vhJjfY48Po3pteW1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vhJjfY48Po3pteW1',
        spanInst,
        'sd_vhJjfY48Po3pteW1'
      );
    }
  }

  async sd_qpBQOcaDWy1qXNEx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qpBQOcaDWy1qXNEx',
      parentSpanInst
    );
    try {
      const sd_YMDbx0Q56bGgQO8HInstance: sd_YMDbx0Q56bGgQO8H.idsutil =
        sd_YMDbx0Q56bGgQO8H.idsutil.getInstance();
      let outputVariables =
        await sd_YMDbx0Q56bGgQO8HInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e3aM08pM4AuzpnOB(bh, parentSpanInst);
      //appendnew_next_sd_qpBQOcaDWy1qXNEx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qpBQOcaDWy1qXNEx',
        spanInst,
        'sd_qpBQOcaDWy1qXNEx'
      );
    }
  }

  async sd_e3aM08pM4AuzpnOB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e3aM08pM4AuzpnOB',
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
      await this.sd_niWG0rooxohTsvFK(bh, parentSpanInst);
      //appendnew_next_sd_e3aM08pM4AuzpnOB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e3aM08pM4AuzpnOB',
        spanInst,
        'sd_e3aM08pM4AuzpnOB'
      );
    }
  }

  async sd_niWG0rooxohTsvFK(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_niWG0rooxohTsvFK');
    }
  }

  async sd_vnOGCYCojlnaVhL3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vnOGCYCojlnaVhL3',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kVoFivQ8B7zGv8QE(bh, parentSpanInst);
      //appendnew_next_sd_vnOGCYCojlnaVhL3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vnOGCYCojlnaVhL3',
        spanInst,
        'sd_vnOGCYCojlnaVhL3'
      );
    }
  }

  async sd_kVoFivQ8B7zGv8QE(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kVoFivQ8B7zGv8QE');
    }
  }

  async sd_PlSmscwdN4FBVj11(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PlSmscwdN4FBVj11',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_l0EfowJy8DeKYpbK(bh, parentSpanInst);
      //appendnew_next_sd_PlSmscwdN4FBVj11
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PlSmscwdN4FBVj11',
        spanInst,
        'sd_PlSmscwdN4FBVj11'
      );
    }
  }

  async sd_l0EfowJy8DeKYpbK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l0EfowJy8DeKYpbK',
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
        'sd_l0EfowJy8DeKYpbK',
        spanInst,
        'sd_l0EfowJy8DeKYpbK'
      );
    }
  }

  async sd_V9fC2ZLUVrrKq68K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V9fC2ZLUVrrKq68K',
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
      bh = await this.sd_E510PaGiMZBngboq(bh, parentSpanInst);
      //appendnew_next_sd_V9fC2ZLUVrrKq68K
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V9fC2ZLUVrrKq68K',
        spanInst,
        'sd_V9fC2ZLUVrrKq68K'
      );
    }
  }

  async sd_E510PaGiMZBngboq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E510PaGiMZBngboq',
      parentSpanInst
    );
    try {
      const sd_YMDbx0Q56bGgQO8HInstance: sd_YMDbx0Q56bGgQO8H.idsutil =
        sd_YMDbx0Q56bGgQO8H.idsutil.getInstance();
      let outputVariables =
        await sd_YMDbx0Q56bGgQO8HInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ydo5MTSyrfw4GeK7(bh, parentSpanInst);
      //appendnew_next_sd_E510PaGiMZBngboq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E510PaGiMZBngboq',
        spanInst,
        'sd_E510PaGiMZBngboq'
      );
    }
  }

  async sd_Ydo5MTSyrfw4GeK7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ydo5MTSyrfw4GeK7',
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
      bh = await this.sd_krTHgE5djC1RTAOZ(bh, parentSpanInst);
      //appendnew_next_sd_Ydo5MTSyrfw4GeK7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ydo5MTSyrfw4GeK7',
        spanInst,
        'sd_Ydo5MTSyrfw4GeK7'
      );
    }
  }

  async sd_krTHgE5djC1RTAOZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_krTHgE5djC1RTAOZ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5EuNWCWSIOxGVdIO(bh, parentSpanInst);
      //appendnew_next_sd_krTHgE5djC1RTAOZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_krTHgE5djC1RTAOZ',
        spanInst,
        'sd_krTHgE5djC1RTAOZ'
      );
    }
  }

  async sd_5EuNWCWSIOxGVdIO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5EuNWCWSIOxGVdIO',
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
        bh = await this.sd_6EOU9HVMqvWbNulU(bh, parentSpanInst);
      } else {
        bh = await this.sd_iDwz4xPTfMHO51lS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5EuNWCWSIOxGVdIO',
        spanInst,
        'sd_5EuNWCWSIOxGVdIO'
      );
    }
  }

  async sd_6EOU9HVMqvWbNulU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6EOU9HVMqvWbNulU',
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
      await this.sd_velS6RwBdMp3FdK6(bh, parentSpanInst);
      //appendnew_next_sd_6EOU9HVMqvWbNulU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6EOU9HVMqvWbNulU',
        spanInst,
        'sd_6EOU9HVMqvWbNulU'
      );
    }
  }

  async sd_velS6RwBdMp3FdK6(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_velS6RwBdMp3FdK6');
    }
  }

  async sd_iDwz4xPTfMHO51lS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iDwz4xPTfMHO51lS',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_56QvwCDFJp29m6pm(bh, parentSpanInst);
      //appendnew_next_sd_iDwz4xPTfMHO51lS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iDwz4xPTfMHO51lS',
        spanInst,
        'sd_iDwz4xPTfMHO51lS'
      );
    }
  }

  async sd_56QvwCDFJp29m6pm(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_56QvwCDFJp29m6pm');
    }
  }

  async sd_IBKrlI71t9gWgXuG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IBKrlI71t9gWgXuG',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_wRZCoDcvnwuCiFlC(bh, parentSpanInst);
      //appendnew_next_sd_IBKrlI71t9gWgXuG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IBKrlI71t9gWgXuG',
        spanInst,
        'sd_IBKrlI71t9gWgXuG'
      );
    }
  }

  async sd_wRZCoDcvnwuCiFlC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wRZCoDcvnwuCiFlC');
    }
  }

  async sd_AGEYEhpEABfpnTmC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AGEYEhpEABfpnTmC',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_AGEYEhpEABfpnTmC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AGEYEhpEABfpnTmC',
        spanInst,
        'sd_AGEYEhpEABfpnTmC'
      );
    }
  }

  async sd_Dxua10qCKaUb0HnJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Dxua10qCKaUb0HnJ',
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
      bh = await this.sd_Pi4csYaJQNTnIFHA(bh, parentSpanInst);
      //appendnew_next_sd_Dxua10qCKaUb0HnJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dxua10qCKaUb0HnJ',
        spanInst,
        'sd_Dxua10qCKaUb0HnJ'
      );
    }
  }

  async sd_Pi4csYaJQNTnIFHA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pi4csYaJQNTnIFHA',
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
      bh = await this.sd_YzWtSYDtq9okX40i(bh, parentSpanInst);
      //appendnew_next_sd_Pi4csYaJQNTnIFHA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pi4csYaJQNTnIFHA',
        spanInst,
        'sd_Pi4csYaJQNTnIFHA'
      );
    }
  }

  async sd_YzWtSYDtq9okX40i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YzWtSYDtq9okX40i',
      parentSpanInst
    );
    try {
      const sd_YMDbx0Q56bGgQO8HInstance: sd_YMDbx0Q56bGgQO8H.idsutil =
        sd_YMDbx0Q56bGgQO8H.idsutil.getInstance();
      let outputVariables =
        await sd_YMDbx0Q56bGgQO8HInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_w2gK4x6uj2Xq2k6P(bh, parentSpanInst);
      //appendnew_next_sd_YzWtSYDtq9okX40i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YzWtSYDtq9okX40i',
        spanInst,
        'sd_YzWtSYDtq9okX40i'
      );
    }
  }

  async sd_w2gK4x6uj2Xq2k6P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_w2gK4x6uj2Xq2k6P',
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
        bh = await this.sd_0flIWVOx93OVPfRb(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_ZlpXcDqs4CChYKxl(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w2gK4x6uj2Xq2k6P',
        spanInst,
        'sd_w2gK4x6uj2Xq2k6P'
      );
    }
  }

  async sd_0flIWVOx93OVPfRb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0flIWVOx93OVPfRb',
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
      //appendnew_next_sd_0flIWVOx93OVPfRb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0flIWVOx93OVPfRb',
        spanInst,
        'sd_0flIWVOx93OVPfRb'
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
      await this.sd_sY8GciZ5kGQAqmzJ(bh, parentSpanInst);
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

  async sd_sY8GciZ5kGQAqmzJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sY8GciZ5kGQAqmzJ');
    }
  }

  async sd_ZlpXcDqs4CChYKxl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZlpXcDqs4CChYKxl',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sY8GciZ5kGQAqmzJ(bh, parentSpanInst);
      //appendnew_next_sd_ZlpXcDqs4CChYKxl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZlpXcDqs4CChYKxl',
        spanInst,
        'sd_ZlpXcDqs4CChYKxl'
      );
    }
  }

  async sd_ta2MAoGzxjjeZtpz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ta2MAoGzxjjeZtpz',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qyHOMT4OVFSz9iak(bh, parentSpanInst);
      //appendnew_next_sd_ta2MAoGzxjjeZtpz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ta2MAoGzxjjeZtpz',
        spanInst,
        'sd_ta2MAoGzxjjeZtpz'
      );
    }
  }

  async sd_qyHOMT4OVFSz9iak(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qyHOMT4OVFSz9iak',
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
        bh = await this.sd_IwspGVryyH6ulTT7(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_nQaU19lLPFdQtUVS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qyHOMT4OVFSz9iak',
        spanInst,
        'sd_qyHOMT4OVFSz9iak'
      );
    }
  }

  async sd_IwspGVryyH6ulTT7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IwspGVryyH6ulTT7',
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
      await this.sd_xhkMnnrfYBoDmvs2(bh, parentSpanInst);
      //appendnew_next_sd_IwspGVryyH6ulTT7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IwspGVryyH6ulTT7',
        spanInst,
        'sd_IwspGVryyH6ulTT7'
      );
    }
  }

  async sd_xhkMnnrfYBoDmvs2(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xhkMnnrfYBoDmvs2');
    }
  }

  async sd_nQaU19lLPFdQtUVS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nQaU19lLPFdQtUVS',
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
      bh = await this.sd_07hfPYIhkqHHJIcq(bh, parentSpanInst);
      //appendnew_next_sd_nQaU19lLPFdQtUVS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nQaU19lLPFdQtUVS',
        spanInst,
        'sd_nQaU19lLPFdQtUVS'
      );
    }
  }

  async sd_07hfPYIhkqHHJIcq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_07hfPYIhkqHHJIcq',
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
      bh = await this.sd_e1Odcso0FQR6NygX(bh, parentSpanInst);
      //appendnew_next_sd_07hfPYIhkqHHJIcq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_07hfPYIhkqHHJIcq',
        spanInst,
        'sd_07hfPYIhkqHHJIcq'
      );
    }
  }

  async sd_e1Odcso0FQR6NygX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e1Odcso0FQR6NygX',
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
        bh = await this.sd_KEmU5XiOLPAEp9cp(bh, parentSpanInst);
      } else {
        bh = await this.sd_KiiJy9QxTaEFyJK9(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e1Odcso0FQR6NygX',
        spanInst,
        'sd_e1Odcso0FQR6NygX'
      );
    }
  }

  async sd_KEmU5XiOLPAEp9cp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KEmU5XiOLPAEp9cp',
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
      await this.sd_SGDiylBfMp3lkqLm(bh, parentSpanInst);
      //appendnew_next_sd_KEmU5XiOLPAEp9cp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KEmU5XiOLPAEp9cp',
        spanInst,
        'sd_KEmU5XiOLPAEp9cp'
      );
    }
  }

  async sd_SGDiylBfMp3lkqLm(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SGDiylBfMp3lkqLm');
    }
  }

  async sd_KiiJy9QxTaEFyJK9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KiiJy9QxTaEFyJK9',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_C9d6Cc1ep7hFYSdF(bh, parentSpanInst);
      //appendnew_next_sd_KiiJy9QxTaEFyJK9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KiiJy9QxTaEFyJK9',
        spanInst,
        'sd_KiiJy9QxTaEFyJK9'
      );
    }
  }

  async sd_C9d6Cc1ep7hFYSdF(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C9d6Cc1ep7hFYSdF');
    }
  }

  async sd_wUuUAkylw8DW6eqb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wUuUAkylw8DW6eqb',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_favkUfrqXIlM7hGR(bh, parentSpanInst);
      //appendnew_next_sd_wUuUAkylw8DW6eqb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wUuUAkylw8DW6eqb',
        spanInst,
        'sd_wUuUAkylw8DW6eqb'
      );
    }
  }

  async sd_favkUfrqXIlM7hGR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_favkUfrqXIlM7hGR',
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
      bh = await this.sd_SZxRpujmhc6Cmj9A(bh, parentSpanInst);
      //appendnew_next_sd_favkUfrqXIlM7hGR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_favkUfrqXIlM7hGR',
        spanInst,
        'sd_favkUfrqXIlM7hGR'
      );
    }
  }

  async sd_SZxRpujmhc6Cmj9A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SZxRpujmhc6Cmj9A',
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
      bh = await this.sd_IXt0NcDNmrr7uEoh(bh, parentSpanInst);
      //appendnew_next_sd_SZxRpujmhc6Cmj9A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SZxRpujmhc6Cmj9A',
        spanInst,
        'sd_SZxRpujmhc6Cmj9A'
      );
    }
  }

  async sd_IXt0NcDNmrr7uEoh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IXt0NcDNmrr7uEoh',
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
        bh = await this.sd_J12620JzZfG6qaJB(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_Qclo8bWTyWkkVTQ4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IXt0NcDNmrr7uEoh',
        spanInst,
        'sd_IXt0NcDNmrr7uEoh'
      );
    }
  }

  async sd_J12620JzZfG6qaJB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J12620JzZfG6qaJB',
      parentSpanInst
    );
    try {
      const sd_YMDbx0Q56bGgQO8HInstance: sd_YMDbx0Q56bGgQO8H.idsutil =
        sd_YMDbx0Q56bGgQO8H.idsutil.getInstance();
      let outputVariables = await sd_YMDbx0Q56bGgQO8HInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hs0lj3tg2ZRYE01S(bh, parentSpanInst);
      //appendnew_next_sd_J12620JzZfG6qaJB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J12620JzZfG6qaJB',
        spanInst,
        'sd_J12620JzZfG6qaJB'
      );
    }
  }

  async sd_hs0lj3tg2ZRYE01S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hs0lj3tg2ZRYE01S',
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
        bh = await this.sd_307u3WPwiY5Qpyif(bh, parentSpanInst);
      } else {
        bh = await this.sd_a6a3tPgBEf7Wv8GV(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hs0lj3tg2ZRYE01S',
        spanInst,
        'sd_hs0lj3tg2ZRYE01S'
      );
    }
  }

  async sd_307u3WPwiY5Qpyif(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_307u3WPwiY5Qpyif',
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
      bh = await this.sd_RJPPhox3G1PnZdre(bh, parentSpanInst);
      //appendnew_next_sd_307u3WPwiY5Qpyif
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_307u3WPwiY5Qpyif',
        spanInst,
        'sd_307u3WPwiY5Qpyif'
      );
    }
  }

  async sd_RJPPhox3G1PnZdre(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RJPPhox3G1PnZdre',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_q7XejQBbDAYr0hGy(bh, parentSpanInst);
      //appendnew_next_sd_RJPPhox3G1PnZdre
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RJPPhox3G1PnZdre',
        spanInst,
        'sd_RJPPhox3G1PnZdre'
      );
    }
  }

  async sd_q7XejQBbDAYr0hGy(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q7XejQBbDAYr0hGy');
    }
  }

  async sd_a6a3tPgBEf7Wv8GV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a6a3tPgBEf7Wv8GV',
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
        bh = await this.sd_tSYMmipE8VTh4aEo(bh, parentSpanInst);
      } else {
        bh = await this.sd_F78Fx1ckgEug3KmP(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a6a3tPgBEf7Wv8GV',
        spanInst,
        'sd_a6a3tPgBEf7Wv8GV'
      );
    }
  }

  async sd_tSYMmipE8VTh4aEo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tSYMmipE8VTh4aEo',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ijK7ImqpRltbkZdp(bh, parentSpanInst);
      //appendnew_next_sd_tSYMmipE8VTh4aEo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tSYMmipE8VTh4aEo',
        spanInst,
        'sd_tSYMmipE8VTh4aEo'
      );
    }
  }

  async sd_ijK7ImqpRltbkZdp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ijK7ImqpRltbkZdp',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_F78Fx1ckgEug3KmP(bh, parentSpanInst);
      //appendnew_next_sd_ijK7ImqpRltbkZdp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ijK7ImqpRltbkZdp',
        spanInst,
        'sd_ijK7ImqpRltbkZdp'
      );
    }
  }

  async sd_F78Fx1ckgEug3KmP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F78Fx1ckgEug3KmP',
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
        'sd_F78Fx1ckgEug3KmP',
        spanInst,
        'sd_F78Fx1ckgEug3KmP'
      );
    }
  }

  async sd_Qclo8bWTyWkkVTQ4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qclo8bWTyWkkVTQ4',
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
        bh = await this.sd_LXSp1G4F4HfkF0yt(bh, parentSpanInst);
      } else {
        bh = await this.sd_8dmVn0TkoP9oOJmP(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qclo8bWTyWkkVTQ4',
        spanInst,
        'sd_Qclo8bWTyWkkVTQ4'
      );
    }
  }

  async sd_LXSp1G4F4HfkF0yt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LXSp1G4F4HfkF0yt',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_q7XejQBbDAYr0hGy(bh, parentSpanInst);
      //appendnew_next_sd_LXSp1G4F4HfkF0yt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LXSp1G4F4HfkF0yt',
        spanInst,
        'sd_LXSp1G4F4HfkF0yt'
      );
    }
  }

  async sd_8dmVn0TkoP9oOJmP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8dmVn0TkoP9oOJmP',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_q7XejQBbDAYr0hGy(bh, parentSpanInst);
      //appendnew_next_sd_8dmVn0TkoP9oOJmP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8dmVn0TkoP9oOJmP',
        spanInst,
        'sd_8dmVn0TkoP9oOJmP'
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
      (await this.sd_X8LJAQPCyVOyFI1p(bh, parentSpanInst)) ||
      (await this.sd_OSRqfeR6wAjveH6Z(bh, parentSpanInst))
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
  async sd_X8LJAQPCyVOyFI1p(bh, parentSpanInst) {
    const nodes = [
      'sd_qpBQOcaDWy1qXNEx',
      'sd_Uo6u3JVJmPjPVnaV',
      'sd_E510PaGiMZBngboq',
      'sd_Ydo5MTSyrfw4GeK7',
      'sd_V9fC2ZLUVrrKq68K',
      'sd_5EuNWCWSIOxGVdIO',
      'sd_6EOU9HVMqvWbNulU',
      'sd_iDwz4xPTfMHO51lS',
      'sd_velS6RwBdMp3FdK6',
      'sd_56QvwCDFJp29m6pm',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_AGEYEhpEABfpnTmC(bh, parentSpanInst);
      //appendnew_next_sd_X8LJAQPCyVOyFI1p
      return true;
    }
    return false;
  }
  async sd_OSRqfeR6wAjveH6Z(bh, parentSpanInst) {
    const nodes = ['sd_J12620JzZfG6qaJB'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_RJPPhox3G1PnZdre(bh, parentSpanInst);
      //appendnew_next_sd_OSRqfeR6wAjveH6Z
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
