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
import * as sd_bVOkZ206NTrPYmbO from './idsutil'; //_splitter_
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
          bh = await this.sd_IRSG0Ce8VBnlcpPh(bh, parentSpanInst);
          //appendnew_next_sd_fkepAAFH9Diw3WSp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fkepAAFH9Diw3WSp');
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
          bh = await this.sd_TtLxSdl79GYGY6s3(bh, parentSpanInst);
          //appendnew_next_sd_acDBK2NTLpvjg7XC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_acDBK2NTLpvjg7XC');
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
          bh = await this.sd_5nTOq1DcIyKMZkt5(bh, parentSpanInst);
          //appendnew_next_sd_BwjoUNMgZxauYdkF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BwjoUNMgZxauYdkF');
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
          bh = await this.sd_pxB0bb48Iq1wOcfV(bh, parentSpanInst);
          //appendnew_next_sd_OXZjUCihF77SfWS5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OXZjUCihF77SfWS5');
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
          bh = await this.sd_sOOcpqvycVGhlb7O(bh, parentSpanInst);
          //appendnew_next_sd_8CZ6ScCCSL5sKRHy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8CZ6ScCCSL5sKRHy');
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
          bh = await this.sd_DfBFlIMQKXBWtn6N(bh, parentSpanInst);
          //appendnew_next_sd_DybQpJApk1BRzHNJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DybQpJApk1BRzHNJ');
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
          bh = await this.sd_wkLjlhDlyxf3T6Fg(bh, parentSpanInst);
          //appendnew_next_sd_YWfJoQAyMH6PfsuG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YWfJoQAyMH6PfsuG');
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

  async sd_5nTOq1DcIyKMZkt5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5nTOq1DcIyKMZkt5',
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
      bh = await this.sd_OUKQHoh05HN53pT2(bh, parentSpanInst);
      //appendnew_next_sd_5nTOq1DcIyKMZkt5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5nTOq1DcIyKMZkt5',
        spanInst,
        'sd_5nTOq1DcIyKMZkt5'
      );
    }
  }

  async sd_OUKQHoh05HN53pT2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OUKQHoh05HN53pT2',
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
        bh = await this.sd_etqGf3e8oCBYf6UT(bh, parentSpanInst);
      } else {
        bh = await this.sd_oXEZJR1YZdbBZNhI(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OUKQHoh05HN53pT2',
        spanInst,
        'sd_OUKQHoh05HN53pT2'
      );
    }
  }

  async sd_etqGf3e8oCBYf6UT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_etqGf3e8oCBYf6UT',
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
      bh = await this.sd_rJVP6yQ0TjiDHXrl(bh, parentSpanInst);
      //appendnew_next_sd_etqGf3e8oCBYf6UT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_etqGf3e8oCBYf6UT',
        spanInst,
        'sd_etqGf3e8oCBYf6UT'
      );
    }
  }

  async sd_rJVP6yQ0TjiDHXrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rJVP6yQ0TjiDHXrl',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_elbXZUQGFZa6UrWg(bh, parentSpanInst);
      //appendnew_next_sd_rJVP6yQ0TjiDHXrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rJVP6yQ0TjiDHXrl',
        spanInst,
        'sd_rJVP6yQ0TjiDHXrl'
      );
    }
  }

  async sd_elbXZUQGFZa6UrWg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_elbXZUQGFZa6UrWg',
      parentSpanInst
    );
    try {
      const sd_bVOkZ206NTrPYmbOInstance: sd_bVOkZ206NTrPYmbO.idsutil =
        sd_bVOkZ206NTrPYmbO.idsutil.getInstance();
      let outputVariables =
        await sd_bVOkZ206NTrPYmbOInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_L5rWSLg6D8OM2Eb2(bh, parentSpanInst);
      //appendnew_next_sd_elbXZUQGFZa6UrWg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_elbXZUQGFZa6UrWg',
        spanInst,
        'sd_elbXZUQGFZa6UrWg'
      );
    }
  }

  async sd_L5rWSLg6D8OM2Eb2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L5rWSLg6D8OM2Eb2',
      parentSpanInst
    );
    try {
      const sd_bVOkZ206NTrPYmbOInstance: sd_bVOkZ206NTrPYmbO.idsutil =
        sd_bVOkZ206NTrPYmbO.idsutil.getInstance();
      let outputVariables =
        await sd_bVOkZ206NTrPYmbOInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EhZVSZslQYRFWSaA(bh, parentSpanInst);
      //appendnew_next_sd_L5rWSLg6D8OM2Eb2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L5rWSLg6D8OM2Eb2',
        spanInst,
        'sd_L5rWSLg6D8OM2Eb2'
      );
    }
  }

  async sd_EhZVSZslQYRFWSaA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EhZVSZslQYRFWSaA',
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
      await this.sd_QGYqBVcpMmEtpjwG(bh, parentSpanInst);
      //appendnew_next_sd_EhZVSZslQYRFWSaA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EhZVSZslQYRFWSaA',
        spanInst,
        'sd_EhZVSZslQYRFWSaA'
      );
    }
  }

  async sd_QGYqBVcpMmEtpjwG(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QGYqBVcpMmEtpjwG');
    }
  }

  async sd_oXEZJR1YZdbBZNhI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oXEZJR1YZdbBZNhI',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZAghAhDKM6sQ3YJ2(bh, parentSpanInst);
      //appendnew_next_sd_oXEZJR1YZdbBZNhI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oXEZJR1YZdbBZNhI',
        spanInst,
        'sd_oXEZJR1YZdbBZNhI'
      );
    }
  }

  async sd_ZAghAhDKM6sQ3YJ2(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZAghAhDKM6sQ3YJ2');
    }
  }

  async sd_IRSG0Ce8VBnlcpPh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IRSG0Ce8VBnlcpPh',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kp7ZtEmvm1hFlz7E(bh, parentSpanInst);
      //appendnew_next_sd_IRSG0Ce8VBnlcpPh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IRSG0Ce8VBnlcpPh',
        spanInst,
        'sd_IRSG0Ce8VBnlcpPh'
      );
    }
  }

  async sd_kp7ZtEmvm1hFlz7E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kp7ZtEmvm1hFlz7E',
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
        'sd_kp7ZtEmvm1hFlz7E',
        spanInst,
        'sd_kp7ZtEmvm1hFlz7E'
      );
    }
  }

  async sd_pxB0bb48Iq1wOcfV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pxB0bb48Iq1wOcfV',
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
      bh = await this.sd_53Q9kGeBBIwla1AU(bh, parentSpanInst);
      //appendnew_next_sd_pxB0bb48Iq1wOcfV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pxB0bb48Iq1wOcfV',
        spanInst,
        'sd_pxB0bb48Iq1wOcfV'
      );
    }
  }

  async sd_53Q9kGeBBIwla1AU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_53Q9kGeBBIwla1AU',
      parentSpanInst
    );
    try {
      const sd_bVOkZ206NTrPYmbOInstance: sd_bVOkZ206NTrPYmbO.idsutil =
        sd_bVOkZ206NTrPYmbO.idsutil.getInstance();
      let outputVariables =
        await sd_bVOkZ206NTrPYmbOInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2lZaRnnvrc0jJYTB(bh, parentSpanInst);
      //appendnew_next_sd_53Q9kGeBBIwla1AU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_53Q9kGeBBIwla1AU',
        spanInst,
        'sd_53Q9kGeBBIwla1AU'
      );
    }
  }

  async sd_2lZaRnnvrc0jJYTB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2lZaRnnvrc0jJYTB',
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
      bh = await this.sd_6v5V8368h13b7h4Z(bh, parentSpanInst);
      //appendnew_next_sd_2lZaRnnvrc0jJYTB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2lZaRnnvrc0jJYTB',
        spanInst,
        'sd_2lZaRnnvrc0jJYTB'
      );
    }
  }

  async sd_6v5V8368h13b7h4Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6v5V8368h13b7h4Z',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8T2FlZMr9l4QUT2t(bh, parentSpanInst);
      //appendnew_next_sd_6v5V8368h13b7h4Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6v5V8368h13b7h4Z',
        spanInst,
        'sd_6v5V8368h13b7h4Z'
      );
    }
  }

  async sd_8T2FlZMr9l4QUT2t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8T2FlZMr9l4QUT2t',
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
        bh = await this.sd_koYDWT9cfeVsI1xm(bh, parentSpanInst);
      } else {
        bh = await this.sd_H2ob2ZeYwVHsOG8T(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8T2FlZMr9l4QUT2t',
        spanInst,
        'sd_8T2FlZMr9l4QUT2t'
      );
    }
  }

  async sd_koYDWT9cfeVsI1xm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_koYDWT9cfeVsI1xm',
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
      await this.sd_MMTjhh94wnJveqyj(bh, parentSpanInst);
      //appendnew_next_sd_koYDWT9cfeVsI1xm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_koYDWT9cfeVsI1xm',
        spanInst,
        'sd_koYDWT9cfeVsI1xm'
      );
    }
  }

  async sd_MMTjhh94wnJveqyj(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MMTjhh94wnJveqyj');
    }
  }

  async sd_H2ob2ZeYwVHsOG8T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H2ob2ZeYwVHsOG8T',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mjiahmY9jkc04DAp(bh, parentSpanInst);
      //appendnew_next_sd_H2ob2ZeYwVHsOG8T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H2ob2ZeYwVHsOG8T',
        spanInst,
        'sd_H2ob2ZeYwVHsOG8T'
      );
    }
  }

  async sd_mjiahmY9jkc04DAp(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mjiahmY9jkc04DAp');
    }
  }

  async sd_sOOcpqvycVGhlb7O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sOOcpqvycVGhlb7O',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZhQEYJW39OMB6mwu(bh, parentSpanInst);
      //appendnew_next_sd_sOOcpqvycVGhlb7O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sOOcpqvycVGhlb7O',
        spanInst,
        'sd_sOOcpqvycVGhlb7O'
      );
    }
  }

  async sd_ZhQEYJW39OMB6mwu(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZhQEYJW39OMB6mwu');
    }
  }

  async sd_zOMJOc6ts3aqyuM9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zOMJOc6ts3aqyuM9',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zOMJOc6ts3aqyuM9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zOMJOc6ts3aqyuM9',
        spanInst,
        'sd_zOMJOc6ts3aqyuM9'
      );
    }
  }

  async sd_DfBFlIMQKXBWtn6N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DfBFlIMQKXBWtn6N',
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
      bh = await this.sd_kJ1eryn3rTfCI3Uh(bh, parentSpanInst);
      //appendnew_next_sd_DfBFlIMQKXBWtn6N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DfBFlIMQKXBWtn6N',
        spanInst,
        'sd_DfBFlIMQKXBWtn6N'
      );
    }
  }

  async sd_kJ1eryn3rTfCI3Uh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kJ1eryn3rTfCI3Uh',
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
      bh = await this.sd_A2J42Jtek5hjpLIV(bh, parentSpanInst);
      //appendnew_next_sd_kJ1eryn3rTfCI3Uh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kJ1eryn3rTfCI3Uh',
        spanInst,
        'sd_kJ1eryn3rTfCI3Uh'
      );
    }
  }

  async sd_A2J42Jtek5hjpLIV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A2J42Jtek5hjpLIV',
      parentSpanInst
    );
    try {
      const sd_bVOkZ206NTrPYmbOInstance: sd_bVOkZ206NTrPYmbO.idsutil =
        sd_bVOkZ206NTrPYmbO.idsutil.getInstance();
      let outputVariables =
        await sd_bVOkZ206NTrPYmbOInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5eUWXL3QT7SOcPkR(bh, parentSpanInst);
      //appendnew_next_sd_A2J42Jtek5hjpLIV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A2J42Jtek5hjpLIV',
        spanInst,
        'sd_A2J42Jtek5hjpLIV'
      );
    }
  }

  async sd_5eUWXL3QT7SOcPkR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5eUWXL3QT7SOcPkR',
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
        bh = await this.sd_TR0WNaHee4HLRuct(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_j7mf4njHAj6bJRbq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5eUWXL3QT7SOcPkR',
        spanInst,
        'sd_5eUWXL3QT7SOcPkR'
      );
    }
  }

  async sd_TR0WNaHee4HLRuct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TR0WNaHee4HLRuct',
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
      //appendnew_next_sd_TR0WNaHee4HLRuct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TR0WNaHee4HLRuct',
        spanInst,
        'sd_TR0WNaHee4HLRuct'
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
      await this.sd_kRer7ifPPsI0X1zn(bh, parentSpanInst);
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

  async sd_kRer7ifPPsI0X1zn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kRer7ifPPsI0X1zn');
    }
  }

  async sd_j7mf4njHAj6bJRbq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j7mf4njHAj6bJRbq',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kRer7ifPPsI0X1zn(bh, parentSpanInst);
      //appendnew_next_sd_j7mf4njHAj6bJRbq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j7mf4njHAj6bJRbq',
        spanInst,
        'sd_j7mf4njHAj6bJRbq'
      );
    }
  }

  async sd_wkLjlhDlyxf3T6Fg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wkLjlhDlyxf3T6Fg',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kYAo96JDDpCcx5DT(bh, parentSpanInst);
      //appendnew_next_sd_wkLjlhDlyxf3T6Fg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wkLjlhDlyxf3T6Fg',
        spanInst,
        'sd_wkLjlhDlyxf3T6Fg'
      );
    }
  }

  async sd_kYAo96JDDpCcx5DT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kYAo96JDDpCcx5DT',
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
        bh = await this.sd_pERZp2wABHW77i0X(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H2J5DUHwb68KfZuT(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kYAo96JDDpCcx5DT',
        spanInst,
        'sd_kYAo96JDDpCcx5DT'
      );
    }
  }

  async sd_pERZp2wABHW77i0X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pERZp2wABHW77i0X',
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
      await this.sd_PZuYHoa3VNAsIza3(bh, parentSpanInst);
      //appendnew_next_sd_pERZp2wABHW77i0X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pERZp2wABHW77i0X',
        spanInst,
        'sd_pERZp2wABHW77i0X'
      );
    }
  }

  async sd_PZuYHoa3VNAsIza3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PZuYHoa3VNAsIza3');
    }
  }

  async sd_H2J5DUHwb68KfZuT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H2J5DUHwb68KfZuT',
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
      bh = await this.sd_sKnDICdPTOSZvWPK(bh, parentSpanInst);
      //appendnew_next_sd_H2J5DUHwb68KfZuT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H2J5DUHwb68KfZuT',
        spanInst,
        'sd_H2J5DUHwb68KfZuT'
      );
    }
  }

  async sd_sKnDICdPTOSZvWPK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sKnDICdPTOSZvWPK',
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
      bh = await this.sd_4ILnmA05z1pTFFZk(bh, parentSpanInst);
      //appendnew_next_sd_sKnDICdPTOSZvWPK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sKnDICdPTOSZvWPK',
        spanInst,
        'sd_sKnDICdPTOSZvWPK'
      );
    }
  }

  async sd_4ILnmA05z1pTFFZk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4ILnmA05z1pTFFZk',
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
        bh = await this.sd_hF7Sq7jQdJQVOuVP(bh, parentSpanInst);
      } else {
        bh = await this.sd_y2nyh8ivQWnLT8qF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4ILnmA05z1pTFFZk',
        spanInst,
        'sd_4ILnmA05z1pTFFZk'
      );
    }
  }

  async sd_hF7Sq7jQdJQVOuVP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hF7Sq7jQdJQVOuVP',
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
      await this.sd_OwifKhdVE9pmKaMV(bh, parentSpanInst);
      //appendnew_next_sd_hF7Sq7jQdJQVOuVP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hF7Sq7jQdJQVOuVP',
        spanInst,
        'sd_hF7Sq7jQdJQVOuVP'
      );
    }
  }

  async sd_OwifKhdVE9pmKaMV(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OwifKhdVE9pmKaMV');
    }
  }

  async sd_y2nyh8ivQWnLT8qF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y2nyh8ivQWnLT8qF',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IrxCmhfOW6VurDWJ(bh, parentSpanInst);
      //appendnew_next_sd_y2nyh8ivQWnLT8qF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y2nyh8ivQWnLT8qF',
        spanInst,
        'sd_y2nyh8ivQWnLT8qF'
      );
    }
  }

  async sd_IrxCmhfOW6VurDWJ(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IrxCmhfOW6VurDWJ');
    }
  }

  async sd_TtLxSdl79GYGY6s3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TtLxSdl79GYGY6s3',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PGuvycP4XRuCDFvF(bh, parentSpanInst);
      //appendnew_next_sd_TtLxSdl79GYGY6s3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TtLxSdl79GYGY6s3',
        spanInst,
        'sd_TtLxSdl79GYGY6s3'
      );
    }
  }

  async sd_PGuvycP4XRuCDFvF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PGuvycP4XRuCDFvF',
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
      bh = await this.sd_UP6SUdF2RXPhRAkB(bh, parentSpanInst);
      //appendnew_next_sd_PGuvycP4XRuCDFvF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PGuvycP4XRuCDFvF',
        spanInst,
        'sd_PGuvycP4XRuCDFvF'
      );
    }
  }

  async sd_UP6SUdF2RXPhRAkB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UP6SUdF2RXPhRAkB',
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
      bh = await this.sd_i228I3b9O91HGPey(bh, parentSpanInst);
      //appendnew_next_sd_UP6SUdF2RXPhRAkB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UP6SUdF2RXPhRAkB',
        spanInst,
        'sd_UP6SUdF2RXPhRAkB'
      );
    }
  }

  async sd_i228I3b9O91HGPey(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i228I3b9O91HGPey',
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
        bh = await this.sd_iXUSbUccuhbqjje5(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_tGFCbJxiEV1kopYu(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i228I3b9O91HGPey',
        spanInst,
        'sd_i228I3b9O91HGPey'
      );
    }
  }

  async sd_iXUSbUccuhbqjje5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iXUSbUccuhbqjje5',
      parentSpanInst
    );
    try {
      const sd_bVOkZ206NTrPYmbOInstance: sd_bVOkZ206NTrPYmbO.idsutil =
        sd_bVOkZ206NTrPYmbO.idsutil.getInstance();
      let outputVariables = await sd_bVOkZ206NTrPYmbOInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_h4rbtUhLf0Y1e1na(bh, parentSpanInst);
      //appendnew_next_sd_iXUSbUccuhbqjje5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iXUSbUccuhbqjje5',
        spanInst,
        'sd_iXUSbUccuhbqjje5'
      );
    }
  }

  async sd_h4rbtUhLf0Y1e1na(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h4rbtUhLf0Y1e1na',
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
        bh = await this.sd_oOE9UzXzQb7o3Nvv(bh, parentSpanInst);
      } else {
        bh = await this.sd_NDhF34EKI6DB0HsE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h4rbtUhLf0Y1e1na',
        spanInst,
        'sd_h4rbtUhLf0Y1e1na'
      );
    }
  }

  async sd_oOE9UzXzQb7o3Nvv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oOE9UzXzQb7o3Nvv',
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
      bh = await this.sd_blNXNsTmheg1BJML(bh, parentSpanInst);
      //appendnew_next_sd_oOE9UzXzQb7o3Nvv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oOE9UzXzQb7o3Nvv',
        spanInst,
        'sd_oOE9UzXzQb7o3Nvv'
      );
    }
  }

  async sd_blNXNsTmheg1BJML(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_blNXNsTmheg1BJML',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qZ5lpsUZvUwtcMbe(bh, parentSpanInst);
      //appendnew_next_sd_blNXNsTmheg1BJML
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_blNXNsTmheg1BJML',
        spanInst,
        'sd_blNXNsTmheg1BJML'
      );
    }
  }

  async sd_qZ5lpsUZvUwtcMbe(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qZ5lpsUZvUwtcMbe');
    }
  }

  async sd_NDhF34EKI6DB0HsE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NDhF34EKI6DB0HsE',
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
        bh = await this.sd_kkfBW1q5uYS69SUo(bh, parentSpanInst);
      } else {
        bh = await this.sd_4IvhHE33c696jcds(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NDhF34EKI6DB0HsE',
        spanInst,
        'sd_NDhF34EKI6DB0HsE'
      );
    }
  }

  async sd_kkfBW1q5uYS69SUo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kkfBW1q5uYS69SUo',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wh9kmH2N7JYmBEgm(bh, parentSpanInst);
      //appendnew_next_sd_kkfBW1q5uYS69SUo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kkfBW1q5uYS69SUo',
        spanInst,
        'sd_kkfBW1q5uYS69SUo'
      );
    }
  }

  async sd_wh9kmH2N7JYmBEgm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wh9kmH2N7JYmBEgm',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4IvhHE33c696jcds(bh, parentSpanInst);
      //appendnew_next_sd_wh9kmH2N7JYmBEgm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wh9kmH2N7JYmBEgm',
        spanInst,
        'sd_wh9kmH2N7JYmBEgm'
      );
    }
  }

  async sd_4IvhHE33c696jcds(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4IvhHE33c696jcds',
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
        'sd_4IvhHE33c696jcds',
        spanInst,
        'sd_4IvhHE33c696jcds'
      );
    }
  }

  async sd_tGFCbJxiEV1kopYu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tGFCbJxiEV1kopYu',
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
        bh = await this.sd_PDykyIG6ySe8HmoY(bh, parentSpanInst);
      } else {
        bh = await this.sd_DOexwUu0c5kDGYsx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tGFCbJxiEV1kopYu',
        spanInst,
        'sd_tGFCbJxiEV1kopYu'
      );
    }
  }

  async sd_PDykyIG6ySe8HmoY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PDykyIG6ySe8HmoY',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qZ5lpsUZvUwtcMbe(bh, parentSpanInst);
      //appendnew_next_sd_PDykyIG6ySe8HmoY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PDykyIG6ySe8HmoY',
        spanInst,
        'sd_PDykyIG6ySe8HmoY'
      );
    }
  }

  async sd_DOexwUu0c5kDGYsx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DOexwUu0c5kDGYsx',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qZ5lpsUZvUwtcMbe(bh, parentSpanInst);
      //appendnew_next_sd_DOexwUu0c5kDGYsx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DOexwUu0c5kDGYsx',
        spanInst,
        'sd_DOexwUu0c5kDGYsx'
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
      (await this.sd_sLIjuSUhfrqx2C6x(bh, parentSpanInst)) ||
      (await this.sd_70U4hm6uYFDkbRyE(bh, parentSpanInst))
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
  async sd_sLIjuSUhfrqx2C6x(bh, parentSpanInst) {
    const nodes = [
      'sd_L5rWSLg6D8OM2Eb2',
      'sd_OXZjUCihF77SfWS5',
      'sd_53Q9kGeBBIwla1AU',
      'sd_2lZaRnnvrc0jJYTB',
      'sd_pxB0bb48Iq1wOcfV',
      'sd_8T2FlZMr9l4QUT2t',
      'sd_koYDWT9cfeVsI1xm',
      'sd_H2ob2ZeYwVHsOG8T',
      'sd_MMTjhh94wnJveqyj',
      'sd_mjiahmY9jkc04DAp',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_zOMJOc6ts3aqyuM9(bh, parentSpanInst);
      //appendnew_next_sd_sLIjuSUhfrqx2C6x
      return true;
    }
    return false;
  }
  async sd_70U4hm6uYFDkbRyE(bh, parentSpanInst) {
    const nodes = ['sd_iXUSbUccuhbqjje5'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_blNXNsTmheg1BJML(bh, parentSpanInst);
      //appendnew_next_sd_70U4hm6uYFDkbRyE
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
