// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class proposals {
  public proposalId: any;
  public proposerAge: any;
  public spouseAge: any;
  public bmi: any;
  public ageBand: any;
  public basePremium: any;
  public loadingPremium: any;
  public gstAmount: any;
  public finalPremium: any;
  public ratingTrace: any;
  public proposalStatus: any;
  public proposalEntity: any;
  public proposerMember: any;
  public spouseMember: any;
  public action: any;
  public remark: any;
  public loadingPct: any;
  public proposalData: any;
  public updateProposal: any;
  public proposalUpdateFilter: any;
  public proposal: any;
  public proposalMembers: any;
  public proposalMemberFilter: any;
  public proposalResponse: any;
  public proposalMembersResponse: any;
  public premiumData: any;
  public ratingAge: any;
  public loadedPremium: any;
  public proposalUpdate: any;
  public members: any;
  public updateProposalResponse: any;
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
    this.serviceName = 'proposals';
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
      instance = new proposals(
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
    //appendnew_flow_proposals_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: proposals');
    //appendnew_flow_proposals_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: proposals');

    this.app['post'](
      `${this.serviceBasePath}/proposal`,
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
          bh = await this.proposalServiceVariables(bh, parentSpanInst);
          //appendnew_next_sd_kBCHgOa7baSSvprZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kBCHgOa7baSSvprZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/proposal/:proposalId/mu-action`,
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
          bh = await this.muActionServiceVariables(bh, parentSpanInst);
          //appendnew_next_sd_0c6aFuyfeYE2Orsv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0c6aFuyfeYE2Orsv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/proposal/:proposalId`,
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
          bh = await this.proposalVariables(bh, parentSpanInst);
          //appendnew_next_sd_VTNX1IOAPZ44wnxe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VTNX1IOAPZ44wnxe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/proposal/:proposalId/manager-action`,
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
          bh = await this.managerActionServiceVariables(bh, parentSpanInst);
          //appendnew_next_sd_YsJfOH8B9CZ28XSW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YsJfOH8B9CZ28XSW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/reels/plans`,
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
          bh = await this.getReelsPlansCallService(bh, parentSpanInst);
          //appendnew_next_sd_CjkyOsBUpaqy7Vhc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CjkyOsBUpaqy7Vhc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_proposals_HttpIn
  }
  //   service flows_proposals

  async loadProposalData(
    parentSpanInst,
    proposalId: any = undefined,
    proposalData: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'loadProposalData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        proposalId,
        proposalData,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProposalServiceVariables(bh, parentSpanInst);
      //appendnew_next_loadProposalData
      return (
        // formatting output variables
        {
          input: {
            proposalData: bh.input.proposalData,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KXxrRmck1xjdjtLd',
        spanInst,
        'loadProposalData'
      );
    }
  }

  async calculatePremium(
    parentSpanInst,
    proposal: any = undefined,
    loadingPct: any = undefined,
    premiumData: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'calculatePremium',
      parentSpanInst
    );
    let bh: any = {
      input: {
        proposal,
        loadingPct,
        premiumData,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.calculatePremiumServiceVariable(bh, parentSpanInst);
      //appendnew_next_calculatePremium
      return (
        // formatting output variables
        {
          input: {
            premiumData: bh.input.premiumData,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qYoxlnmP4VvfWLjo',
        spanInst,
        'calculatePremium'
      );
    }
  }

  async getPlansInternal(
    parentSpanInst,
    plansResponse: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPlansInternal',
      parentSpanInst
    );
    let bh: any = {
      input: {
        plansResponse,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareReelsPlanRequest(bh, parentSpanInst);
      //appendnew_next_getPlansInternal
      return (
        // formatting output variables
        {
          input: {
            plansResponse: bh.input.plansResponse,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hv0h0PVDxgygZof3',
        spanInst,
        'getPlansInternal'
      );
    }
  }
  //appendnew_flow_proposals_start

  async proposalServiceVariables(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'proposalServiceVariables',
      parentSpanInst
    );
    try {
      this.proposalId = bh.local.proposalId;
      this.proposerAge;
      this.spouseAge;
      this.bmi;
      this.ageBand;
      this.basePremium;
      this.loadingPremium;
      this.gstAmount;
      this.finalPremium;
      this.ratingTrace;
      this.proposalStatus;
      this.proposalEntity;
      this.proposerMember;
      this.spouseMember;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateRequest(bh, parentSpanInst);
      //appendnew_next_proposalServiceVariables
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y3vmXSKkuaNE8Mrw',
        spanInst,
        'proposalServiceVariables'
      );
    }
  }

  async validateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateRequest',
      parentSpanInst
    );
    try {
      const body = bh.input.body;

      console.log('Proposal Request');
      console.log(JSON.stringify(body, null, 2));

      /*--------------------------------------
Mandatory Request
--------------------------------------*/

      if (!body) {
        throw new Error('Request Body is missing');
      }

      /*--------------------------------------
Proposer Name
--------------------------------------*/

      body.proposer_name = (body.proposer_name || '').trim();

      if (!body.proposer_name) {
        throw new Error('Proposer Name is required');
      }

      if (body.proposer_name.length < 3 || body.proposer_name.length > 60) {
        throw new Error('Proposer Name must be between 3 and 60 characters');
      }

      if (!/^[A-Za-z ]+$/.test(body.proposer_name)) {
        throw new Error('Only alphabets and spaces are allowed');
      }

      /*--------------------------------------
Proposer DOB
--------------------------------------*/

      if (!body.proposer_dob) {
        throw new Error('Proposer DOB is required');
      }

      if (isNaN(Date.parse(body.proposer_dob))) {
        throw new Error('Invalid Proposer DOB');
      }

      /*--------------------------------------
Mobile Number
--------------------------------------*/

      body.mobile_number = String(body.mobile_number || '').trim();

      if (!/^[6-9][0-9]{9}$/.test(body.mobile_number)) {
        throw new Error('Invalid Mobile Number');
      }

      /*--------------------------------------
Email
--------------------------------------*/

      body.email_id = (body.email_id || '').trim().toLowerCase();

      if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(body.email_id)
      ) {
        throw new Error('Invalid Email');
      }

      /*--------------------------------------
Plan Variant
--------------------------------------*/

      body.plan_variant = (body.plan_variant || '').trim();

      if (!body.plan_variant) {
        throw new Error('Plan Variant is required');
      }

      /*--------------------------------------
Sum Insured
--------------------------------------*/

      body.sum_insured = Number(body.sum_insured);

      if (isNaN(body.sum_insured) || body.sum_insured <= 0) {
        throw new Error('Invalid Sum Insured');
      }

      /*--------------------------------------
Height
--------------------------------------*/

      body.height_cm = Number(body.height_cm);

      if (isNaN(body.height_cm)) {
        throw new Error('Height is required');
      }

      if (body.height_cm < 100 || body.height_cm > 220) {
        throw new Error('Height must be between 100 and 220 cm');
      }

      /*--------------------------------------
Weight
--------------------------------------*/

      body.weight_kg = Number(body.weight_kg);

      if (isNaN(body.weight_kg)) {
        throw new Error('Weight is required');
      }

      if (body.weight_kg < 25 || body.weight_kg > 200) {
        throw new Error('Weight must be between 25 and 200 kg');
      }

      /*--------------------------------------
BMI
--------------------------------------*/

      body.bmi = Number(body.bmi);

      if (isNaN(body.bmi)) {
        throw new Error('BMI is required');
      }

      if (body.bmi < 10 || body.bmi > 60) {
        throw new Error('Invalid BMI');
      }

      /*--------------------------------------
Boolean Fields
--------------------------------------*/

      if (typeof body.tobacco_use !== 'boolean') {
        throw new Error('Invalid Tobacco Use');
      }

      if (typeof body.diabetes_declared !== 'boolean') {
        throw new Error('Invalid Diabetes Declared');
      }

      if (typeof body.hypertension_declared !== 'boolean') {
        throw new Error('Invalid Hypertension Declared');
      }

      if (typeof body.include_spouse !== 'boolean') {
        throw new Error('Invalid Include Spouse');
      }

      /*--------------------------------------
Members
--------------------------------------*/

      if (!Array.isArray(body.members) || body.members.length === 0) {
        throw new Error('At least one member is required');
      }

      body.members.forEach((member, index) => {
        member.member_name = (member.member_name || '').trim();

        if (!member.member_name) {
          throw new Error(`Member ${index + 1} Name is required`);
        }

        if (!member.member_dob) {
          throw new Error(`Member ${index + 1} DOB is required`);
        }

        if (isNaN(Date.parse(member.member_dob))) {
          throw new Error(`Invalid DOB for Member ${index + 1}`);
        }

        if (!member.relationship) {
          throw new Error(`Relationship is required for Member ${index + 1}`);
        }

        if (member.relationship === 'Self') {
          member.height_cm = Number(member.height_cm);
          member.weight_kg = Number(member.weight_kg);
          member.bmi = Number(member.bmi);

          if (isNaN(member.height_cm)) {
            throw new Error('Self Height is required');
          }

          if (isNaN(member.weight_kg)) {
            throw new Error('Self Weight is required');
          }

          if (isNaN(member.bmi)) {
            throw new Error('Self BMI is required');
          }
        }

        if (member.relationship === 'Spouse' && body.include_spouse) {
          if (!member.member_name) {
            throw new Error('Spouse Name is required');
          }

          if (!member.member_dob) {
            throw new Error('Spouse DOB is required');
          }
        }
      });

      console.log('Validation Successful');

      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateProposalId(bh, parentSpanInst);
      //appendnew_next_validateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4jI9etbqIE7dojyW',
        spanInst,
        'validateRequest'
      );
    }
  }

  async generateProposalId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateProposalId',
      parentSpanInst
    );
    try {
      const now = new Date();

      const yyyy = now.getFullYear();

      const mm = String(now.getMonth() + 1).padStart(2, '0');

      const dd = String(now.getDate()).padStart(2, '0');

      const random = Math.floor(Math.random() * 90000) + 10000;

      bh.local.proposalId = `PRP-${yyyy}${mm}${dd}-${random}`;

      console.log(bh.local.proposalId);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.calculateAge(bh, parentSpanInst);
      //appendnew_next_generateProposalId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VAvRMYhjL6Mqrd21',
        spanInst,
        'generateProposalId'
      );
    }
  }

  async calculateAge(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculateAge',
      parentSpanInst
    );
    try {
      // function calculateAge(dob) {

      //     const birth = new Date(dob);

      //     const today = new Date();

      //     let age = today.getFullYear() - birth.getFullYear();

      //     const month =
      //         today.getMonth() - birth.getMonth();

      //     if (
      //         month < 0 ||
      //         (month === 0 && today.getDate() < birth.getDate())
      //     ) {
      //         age--;
      //     }

      //     return age;
      // }

      // bh.local.proposerAge =
      //     calculateAge(bh.input.body.proposer_dob);

      // if (bh.input.body.spouse_included) {

      //     bh.local.spouseAge =
      //         calculateAge(bh.input.body.spouse_dob);

      // }
      // else {

      //     bh.local.spouseAge = 0;

      // }

      // console.log(bh.local.proposerAge);
      // console.log(bh.local.spouseAge);

      function calculateAge(dob) {
        if (!dob) {
          return 0;
        }

        const birth = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birth.getFullYear();

        const monthDiff = today.getMonth() - birth.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
          age--;
        }

        return age;
      }

      /*--------------------------------------
 Proposer Age
--------------------------------------*/

      bh.local.proposerAge = calculateAge(bh.input.body.proposer_dob);

      /*--------------------------------------
 Spouse Age
--------------------------------------*/

      bh.local.spouseAge = 0;

      if (bh.input.body.include_spouse === true) {
        const spouseMember = (bh.input.body.members || []).find(
          (member) => member.relationship === 'Spouse'
        );

        if (spouseMember) {
          bh.local.spouseAge = calculateAge(spouseMember.member_dob);
        }
      }

      console.log('Proposer Age :', bh.local.proposerAge);
      console.log('Spouse Age :', bh.local.spouseAge);
      /*--------------------------------------
 Rating Age
--------------------------------------*/

      bh.local.ratingAge = Math.max(bh.local.proposerAge, bh.local.spouseAge);

      console.log('Rating Age :', bh.local.ratingAge);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.loadRateCard(bh, parentSpanInst);
      //appendnew_next_calculateAge
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QATEFXczRrrfrIBT',
        spanInst,
        'calculateAge'
      );
    }
  }

  async loadRateCard(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'loadRateCard',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getPlansInternal(spanInst, undefined);
      bh.local.plansResponse = outputVariables.input.plansResponse;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resolveAgeBand(bh, parentSpanInst);
      //appendnew_next_loadRateCard
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j29ciUzzFSKPMVzN',
        spanInst,
        'loadRateCard'
      );
    }
  }

  async resolveAgeBand(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resolveAgeBand',
      parentSpanInst
    );
    try {
      const plans = bh.local.plansResponse.plans;

      bh.local.selectedPlan = plans.find((plan) => {
        if (plan.plan_code !== bh.input.body.plan_variant) {
          return false;
        }

        const [minAge, maxAge] = plan.age_band.split('-').map(Number);

        return bh.local.ratingAge >= minAge && bh.local.ratingAge <= maxAge;
      });

      if (!bh.local.selectedPlan) {
        throw new Error('Age Band not found in Reels');
      }

      bh.local.ageBand = bh.local.selectedPlan.age_band;

      console.log('Selected Reels Plan');
      console.log(JSON.stringify(bh.local.selectedPlan, null, 2));

      console.log('Resolved Age Band :', bh.local.ageBand);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareProposalEntity(bh, parentSpanInst);
      //appendnew_next_resolveAgeBand
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kUFEZepCdW8roykz',
        spanInst,
        'resolveAgeBand'
      );
    }
  }

  async prepareProposalEntity(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareProposalEntity',
      parentSpanInst
    );
    try {
      // const body = bh.input.body;

      // bh.local.proposalEntity = {

      //     proposal_id: bh.local.proposalId,

      //     plan_code: body.plan_code,

      //     sum_insured: body.sum_insured,

      //     mobile_no: body.mobile_no,

      //     email: body.email,

      //     rating_age: bh.local.proposerAge,

      //     age_band: bh.local.ageBand || "",

      //     spouse_included: body.spouse_included,

      //     base_premium: bh.local.basePremium || 0,

      //     loaded_premium: bh.local.loadedPremium || 0,

      //     gst_amount: bh.local.gstAmount || 0,

      //     final_premium: bh.local.finalPremium || 0,

      //     additional_loading_pct: 0,

      //     rating_trace: bh.local.ratingTrace || "",

      //     mu_remarks: null,

      //     manager_remarks: null,

      //     policy_no: null,

      //     status: bh.local.proposalStatus || "SUBMITTED",

      //     created_at: new Date(),

      //     updated_at: new Date()

      // };

      // console.log(bh.local.proposalEntity);
      const body = bh.input.body;

      bh.local.proposalEntity = {
        proposal_id: bh.local.proposalId,

        plan_code: body.plan_variant,

        sum_insured: body.sum_insured,

        mobile_no: body.mobile_number,

        email: body.email_id,

        rating_age: bh.local.ratingAge,

        age_band: bh.local.ageBand || '',

        spouse_included: body.include_spouse,

        base_premium: bh.local.basePremium || 0,

        loaded_premium: bh.local.loadedPremium || 0,

        gst_amount: bh.local.gstAmount || 0,

        final_premium: bh.local.finalPremium || 0,

        additional_loading_pct: bh.local.additionalLoadingPct || 0,

        rating_trace: bh.local.ratingTrace || '',

        mu_remarks: null,

        manager_remarks: null,

        policy_no: null,

        status: bh.local.proposalStatus || 'SUBMITTED',

        created_at: new Date(),

        updated_at: new Date(),
      };

      console.log('Proposal Entity');
      console.log(JSON.stringify(bh.local.proposalEntity, null, 2));
      /*--------------------------------------
 Prepare Proposal Members Entity
--------------------------------------*/

      bh.local.proposalMembersEntity = [];

      const members = body.members || [];

      members.forEach((member, index) => {
        bh.local.proposalMembersEntity.push({
          member_id: crypto.randomUUID(),

          proposal_id: bh.local.proposalId,

          relation: member.relationship === 'Self' ? 'PROPOSER' : 'SPOUSE',

          full_name: member.member_name,

          dob: member.member_dob,

          age:
            member.relationship === 'Self'
              ? bh.local.proposerAge
              : bh.local.spouseAge,

          height_cm: member.relationship === 'Self' ? member.height_cm : null,

          weight_kg: member.relationship === 'Self' ? member.weight_kg : null,

          bmi: member.relationship === 'Self' ? member.bmi : null,

          tobacco_use: body.tobacco_use,

          diabetes_declared: body.diabetes_declared,

          hypertension_declared: body.hypertension_declared,
        });
      });

      console.log('Proposal Members Entity');
      console.log(JSON.stringify(bh.local.proposalMembersEntity, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertProposals(bh, parentSpanInst);
      //appendnew_next_prepareProposalEntity
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0WzZ2IABKHcik2RA',
        spanInst,
        'prepareProposalEntity'
      );
    }
  }

  async insertProposals(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertProposals',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_99PeWpSvHx3jjW6m');
      bh.local.insertProposalResponse = await dmUtilsInst.insert(
        '_EN_hll0abjopf',
        bh.local.proposalEntity
      );

      this.tracerService.sendData(spanInst, bh);
      this.savedProposalLog(bh, parentSpanInst);
      bh = await this.insertProposalMembers(bh, parentSpanInst);
      //appendnew_next_insertProposals
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7O9DN8YwiI6L6lcL',
        spanInst,
        'insertProposals'
      );
    }
  }

  async savedProposalLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'savedProposalLog',
      parentSpanInst
    );
    try {
      let logobj: any = bh.local.insertProposalResponse;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_savedProposalLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SnONJRHwFbCr9yMV',
        spanInst,
        'savedProposalLog'
      );
    }
  }

  async insertProposalMembers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertProposalMembers',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_99PeWpSvHx3jjW6m');
      bh.local.insertProposalMembersResponse = await dmUtilsInst.insert(
        '_EN_0xcbgpnumf',
        bh.local.proposalMembersEntity
      );

      this.tracerService.sendData(spanInst, bh);
      this.savedProposalMembersLog(bh, parentSpanInst);
      bh = await this.validateInsert(bh, parentSpanInst);
      //appendnew_next_insertProposalMembers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7e7qZCXF4qjgK10P',
        spanInst,
        'insertProposalMembers'
      );
    }
  }

  async savedProposalMembersLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'savedProposalMembersLog',
      parentSpanInst
    );
    try {
      let logobj: any = bh.local.insertProposalMembersResponse;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_savedProposalMembersLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ygKKzT8rNw8Iv81H',
        spanInst,
        'savedProposalMembersLog'
      );
    }
  }

  async validateInsert(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateInsert',
      parentSpanInst
    );
    try {
      console.log('Insert Response');

      console.log(JSON.stringify(bh.local.insertProposalResponse, null, 2));

      if (!bh.local.insertProposalResponse) {
        throw new Error('Proposal insert failed');
      }

      console.log('Proposal inserted successfully');

      /*--------------------------------------
 Prepare Success Response
--------------------------------------*/

      bh.local.response = {
        success: true,

        message: 'Proposal created successfully',

        data: {
          proposal_id: bh.local.proposalId,

          status: 'SUBMITTED',
        },
      };

      console.log('Success Response');

      console.log(JSON.stringify(bh.local.response, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.proposalHttpOut(bh, parentSpanInst);
      //appendnew_next_validateInsert
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lHtlRt9Svq79qj0D',
        spanInst,
        'validateInsert'
      );
    }
  }

  async proposalHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EKz6MLSbDrq0rT5y');
    }
  }

  async muActionServiceVariables(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionServiceVariables',
      parentSpanInst
    );
    try {
      this.proposalId;
      this.action;
      this.remark;
      this.loadingPct;
      this.proposalData;
      this.updateProposal;
      this.proposalUpdateFilter;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.muActionValidateRequest(bh, parentSpanInst);
      //appendnew_next_muActionServiceVariables
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OWKeArsKZCMyECLT',
        spanInst,
        'muActionServiceVariables'
      );
    }
  }

  async muActionValidateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionValidateRequest',
      parentSpanInst
    );
    try {
      console.log('bh.input', bh.input);
      bh.local.proposalId = bh.input.params.proposalId;

      bh.local.action = bh.input.body.action;

      bh.local.loadingPct = bh.input.body.additional_loading_pct || 0;

      bh.local.remark = bh.input.body.remark;

      if (!bh.local.proposalId) throw new Error('Proposal Id required');

      if (!bh.local.action) throw new Error('Action required');

      const actions = ['ACCEPT', 'LOAD', 'DECLINE'];

      if (!actions.includes(bh.local.action)) {
        throw new Error('Invalid action');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.muActionProposalCallService(bh, parentSpanInst);
      //appendnew_next_muActionValidateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K7MloS3IqY5ccd2j',
        spanInst,
        'muActionValidateRequest'
      );
    }
  }

  async muActionProposalCallService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionProposalCallService',
      parentSpanInst
    );
    try {
      let outputVariables = await this.loadProposalData(
        spanInst,
        bh.local.proposalId,
        undefined
      );
      bh.local.proposalData = outputVariables.input.proposalData;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.muActionValidateProposal(bh, parentSpanInst);
      //appendnew_next_muActionProposalCallService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0qMG9aNhbPBfRb4a',
        spanInst,
        'muActionProposalCallService'
      );
    }
  }

  async muActionValidateProposal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionValidateProposal',
      parentSpanInst
    );
    try {
      console.log('Proposal Data Final');
      console.log(JSON.stringify(bh.local.proposalData, null, 2));

      if (!bh.local.proposalData) {
        throw new Error('Proposal not found');
      }

      bh.local.proposal = bh.local.proposalData.proposal;
      bh.local.members = bh.local.proposalData.members;

      if (bh.local.proposal.status !== 'SUBMITTED') {
        throw new Error('Proposal already processed');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.muActionSwitchByDecision(bh, parentSpanInst);
      //appendnew_next_muActionValidateProposal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lm6tgpUrOFJ4D506',
        spanInst,
        'muActionValidateProposal'
      );
    }
  }

  async muActionSwitchByDecision(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionSwitchByDecision',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.action,
          'ACCEPT',
          undefined,
          undefined
        )
      ) {
        bh = await this.muActionAccept(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.action,
          'LOAD',
          undefined,
          undefined
        )
      ) {
        bh = await this.calculatePremiumMuAction(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.action,
          'DECLINE',
          undefined,
          undefined
        )
      ) {
        bh = await this.muActionDecline(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nlWUyqM3tdg3eMr0',
        spanInst,
        'muActionSwitchByDecision'
      );
    }
  }

  async muActionAccept(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionAccept',
      parentSpanInst
    );
    try {
      bh.local.additionalLoadingPct = 0;

      bh.local.loadedPremium = bh.local.proposal.base_premium;

      bh.local.gstAmount = bh.local.proposal.gst_amount;

      bh.local.finalPremium = bh.local.proposal.final_premium;

      bh.local.ratingTrace = bh.local.proposal.rating_trace;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareProposalUpdate(bh, parentSpanInst);
      //appendnew_next_muActionAccept
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ncAi6K6LzcfdAXgw',
        spanInst,
        'muActionAccept'
      );
    }
  }

  async prepareProposalUpdate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareProposalUpdate',
      parentSpanInst
    );
    try {
      const action = bh.input.body.action.toUpperCase();
      console.log('premium data =====', bh.local.premiumData);
      bh.local.proposalUpdateFilter = {
        proposal_id: bh.local.proposalId,
      };

      bh.local.proposalUpdate = {};

      switch (action) {
        case 'ACCEPT':
          console.log('accept');
          bh.local.proposalUpdate.status = 'MU_APPROVED';

          bh.local.proposalUpdate.additional_loading_pct = 0;

          bh.local.proposalUpdate.loaded_premium =
            bh.local.premiumData.loadedPremium;

          bh.local.proposalUpdate.gst_amount = bh.local.premiumData.gstAmount;

          bh.local.proposalUpdate.final_premium =
            bh.local.premiumData.finalPremium;

          bh.local.proposalUpdate.rating_trace =
            bh.local.premiumData.ratingTrace;

          bh.local.proposalUpdate.mu_remarks = bh.input.body.remark || '';

          break;

        case 'LOAD':
          bh.local.proposalUpdate.status = 'MU_APPROVED';

          bh.local.proposalUpdate.additional_loading_pct = bh.local.loadingPct;

          bh.local.proposalUpdate.loaded_premium =
            bh.local.premiumData.loadedPremium;

          bh.local.proposalUpdate.gst_amount = bh.local.premiumData.gstAmount;

          bh.local.proposalUpdate.final_premium =
            bh.local.premiumData.finalPremium;

          bh.local.proposalUpdate.rating_trace =
            bh.local.premiumData.ratingTrace;

          bh.local.proposalUpdate.mu_remarks = bh.input.body.remark || '';

          break;

        case 'DECLINE':
          bh.local.proposalUpdate.status = 'DECLINED';

          bh.local.proposalUpdate.mu_remarks = bh.input.body.remark || '';

          break;

        default:
          throw new Error('Invalid Action');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.muActionUpdateProposal(bh, parentSpanInst);
      //appendnew_next_prepareProposalUpdate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YgDDq1fX1Wu2dB7o',
        spanInst,
        'prepareProposalUpdate'
      );
    }
  }

  async muActionUpdateProposal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionUpdateProposal',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_99PeWpSvHx3jjW6m');
      bh.local.updateProposalResponse = await dmUtilsInst.updateByFilter(
        '_EN_hll0abjopf',
        bh.local.proposalUpdateFilter,
        bh.local.proposalUpdate
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.reloadProposal(bh, parentSpanInst);
      //appendnew_next_muActionUpdateProposal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PO502ZISmvxOjN0g',
        spanInst,
        'muActionUpdateProposal'
      );
    }
  }

  async reloadProposal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'reloadProposal',
      parentSpanInst
    );
    try {
      let outputVariables = await this.loadProposalData(
        spanInst,
        bh.local.proposalId,
        undefined
      );
      bh.local.proposalData = outputVariables.input.proposalData;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareMuActionResponse(bh, parentSpanInst);
      //appendnew_next_reloadProposal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5Em44RbQDMAtmQqr',
        spanInst,
        'reloadProposal'
      );
    }
  }

  async prepareMuActionResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareMuActionResponse',
      parentSpanInst
    );
    try {
      console.log('Proposal Data');

      console.log(JSON.stringify(bh.local.proposalData, null, 2));

      if (!bh.local.proposalData) {
        throw new Error('Proposal not found');
      }

      /*--------------------------------------
 Prepare Success Response
--------------------------------------*/

      bh.local.response = {
        success: true,

        message: 'Medical Underwriter action completed successfully',

        data: bh.local.proposalData,
      };

      console.log('Response');

      console.log(JSON.stringify(bh.local.response, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.muActionHttpOut(bh, parentSpanInst);
      //appendnew_next_prepareMuActionResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8rVABf1J467apQnU',
        spanInst,
        'prepareMuActionResponse'
      );
    }
  }

  async muActionHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mcqcTkYnl1WGzgtp');
    }
  }

  async calculatePremiumMuAction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculatePremiumMuAction',
      parentSpanInst
    );
    try {
      let outputVariables = await this.calculatePremium(
        spanInst,
        bh.local.proposal,
        bh.local.loadingPct,
        undefined
      );
      bh.local.premiumData = outputVariables.input.premiumData;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareProposalUpdate(bh, parentSpanInst);
      //appendnew_next_calculatePremiumMuAction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xK6qEaw7zrWx5umh',
        spanInst,
        'calculatePremiumMuAction'
      );
    }
  }

  async muActionDecline(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'muActionDecline',
      parentSpanInst
    );
    try {
      // Nothing required

      console.log('Reject Flow');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareProposalUpdate(bh, parentSpanInst);
      //appendnew_next_muActionDecline
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J96epXAU9b54vj9v',
        spanInst,
        'muActionDecline'
      );
    }
  }

  async getProposalServiceVariables(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProposalServiceVariables',
      parentSpanInst
    );
    try {
      this.proposalId = bh.local.proposalId;
      this.proposal;
      this.proposalMembers;
      this.proposalMemberFilter;
      this.proposalData;
      this.proposalResponse;
      this.proposalMembersResponse;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProposalbyIdValidateRequest(bh, parentSpanInst);
      //appendnew_next_getProposalServiceVariables
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_flhSdl4KcK5o9i0u',
        spanInst,
        'getProposalServiceVariables'
      );
    }
  }

  async getProposalbyIdValidateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProposalbyIdValidateRequest',
      parentSpanInst
    );
    try {
      bh.local.proposalId = bh.input.proposalId;

      if (!bh.local.proposalId) {
        throw new Error('Proposal Id is required');
      }

      // console.log(
      //     "Proposal Id :",
      //     bh.local.proposalId
      // );
      // console.log("Route Params");
      // console.log(bh.input.params);

      // bh.local.proposalMemberFilter = {
      //     proposal_id: bh.local.proposalId
      // };

      // console.log("Proposal Member Filter");
      // console.log(JSON.stringify(bh.local.proposalMemberFilter, null, 2));
      /*--------------------------------------
Proposal Id
--------------------------------------*/

      bh.local.proposalId = (bh.input.proposalId || '').trim();

      if (!bh.local.proposalId) {
        throw new Error('Proposal Id is required');
      }

      console.log('Proposal Id :', bh.local.proposalId);

      /*--------------------------------------
Proposal Member Filter
--------------------------------------*/

      bh.local.proposalMemberFilter = {
        proposal_id: bh.local.proposalId,
      };

      console.log('Proposal Member Filter');
      console.log(JSON.stringify(bh.local.proposalMemberFilter, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProposalByIdFind(bh, parentSpanInst);
      //appendnew_next_getProposalbyIdValidateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VvluZgWL8kqnXUfp',
        spanInst,
        'getProposalbyIdValidateRequest'
      );
    }
  }

  async getProposalByIdFind(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProposalByIdFind',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_99PeWpSvHx3jjW6m');
      bh.local.proposalResponse = await dmUtilsInst.find(
        '_EN_hll0abjopf',
        { proposal_id: bh.local.proposalId },
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProposalMembersByIdFind(bh, parentSpanInst);
      //appendnew_next_getProposalByIdFind
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cMrAx7KIkc0Udl1b',
        spanInst,
        'getProposalByIdFind'
      );
    }
  }

  async getProposalMembersByIdFind(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProposalMembersByIdFind',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_99PeWpSvHx3jjW6m');
      bh.local.proposalMembersResponse = await dmUtilsInst.find(
        '_EN_0xcbgpnumf',
        bh.local.proposalMemberFilter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProposalByIdPrepareRes(bh, parentSpanInst);
      //appendnew_next_getProposalMembersByIdFind
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gv1yfVsAlSymYt4t',
        spanInst,
        'getProposalMembersByIdFind'
      );
    }
  }

  async getProposalByIdPrepareRes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProposalByIdPrepareRes',
      parentSpanInst
    );
    try {
      console.log('Proposal Response');
      console.log(JSON.stringify(bh.local.proposalResponse, null, 2));

      console.log('Proposal Members Response');
      console.log(JSON.stringify(bh.local.proposalMembersResponse, null, 2));

      if (
        !bh.local.proposalResponse ||
        bh.local.proposalResponse.length === 0
      ) {
        throw new Error('Proposal not found');
      }

      /*--------------------------------------
Prepare Proposal Data
--------------------------------------*/

      bh.local.proposal = bh.local.proposalResponse[0];

      bh.local.proposalMembers = bh.local.proposalMembersResponse || [];

      bh.local.proposalData = {
        proposal: bh.local.proposal,

        members: bh.local.proposalMembers,
      };

      console.log('Proposal Data');
      console.log(JSON.stringify(bh.local.proposalData, null, 2));
      bh.input.proposalData = bh.local.proposalData;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_getProposalByIdPrepareRes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BQAIOQ9BNeOWYg03',
        spanInst,
        'getProposalByIdPrepareRes'
      );
    }
  }

  async proposalVariables(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'proposalVariables',
      parentSpanInst
    );
    try {
      this.proposalId;
      this.proposalData;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.proposalbyIdValidateRequest(bh, parentSpanInst);
      //appendnew_next_proposalVariables
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Lbsx25cgWMH44Y1',
        spanInst,
        'proposalVariables'
      );
    }
  }

  async proposalbyIdValidateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'proposalbyIdValidateRequest',
      parentSpanInst
    );
    try {
      bh.local.proposalId = (bh.input.params.proposalId || '').trim();

      if (!bh.local.proposalId) {
        throw new Error('Proposal Id is required');
      }

      console.log('Proposal Id :', bh.local.proposalId);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callProposalService(bh, parentSpanInst);
      //appendnew_next_proposalbyIdValidateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2UlMLijvbagtQAoT',
        spanInst,
        'proposalbyIdValidateRequest'
      );
    }
  }

  async callProposalService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callProposalService',
      parentSpanInst
    );
    try {
      let outputVariables = await this.loadProposalData(
        spanInst,
        bh.local.proposalId,
        undefined
      );
      bh.local.proposalData = outputVariables.input.proposalData;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SpFvEzvdlne7Nblf(bh, parentSpanInst);
      //appendnew_next_callProposalService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PEuizGWflJ5rLQfH',
        spanInst,
        'callProposalService'
      );
    }
  }

  async sd_SpFvEzvdlne7Nblf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SpFvEzvdlne7Nblf',
      parentSpanInst
    );
    try {
      console.log('Proposal Data Final');

      console.log(JSON.stringify(bh.local.proposalData, null, 2));

      if (!bh.local.proposalData) {
        throw new Error('Proposal not found');
      }

      /*--------------------------------------
 Prepare Success Response
--------------------------------------*/

      bh.local.response = {
        success: true,

        message: 'Proposal fetched successfully',

        data: bh.local.proposalData,
      };

      console.log('Success Response');

      console.log(JSON.stringify(bh.local.response, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.sd_L5N6N9YC9TCmoBE3(bh, parentSpanInst);
      //appendnew_next_sd_SpFvEzvdlne7Nblf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SpFvEzvdlne7Nblf',
        spanInst,
        'sd_SpFvEzvdlne7Nblf'
      );
    }
  }

  async sd_L5N6N9YC9TCmoBE3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L5N6N9YC9TCmoBE3');
    }
  }

  async calculatePremiumServiceVariable(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculatePremiumServiceVariable',
      parentSpanInst
    );
    try {
      this.proposal;
      this.loadingPct;
      this.premiumData;
      this.ratingAge;
      this.ageBand;
      this.basePremium;
      this.loadedPremium;
      this.gstAmount;
      this.finalPremium;
      this.ratingTrace;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateInput(bh, parentSpanInst);
      //appendnew_next_calculatePremiumServiceVariable
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iWxGKeMMJ1cxQYmn',
        spanInst,
        'calculatePremiumServiceVariable'
      );
    }
  }

  async validateInput(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateInput',
      parentSpanInst
    );
    try {
      if (!bh.input.proposal) {
        throw new Error('Proposal data required');
      }
      bh.local.proposal = bh.input.proposal;

      bh.local.loadingPct = bh.input.loadingPct || 0;

      bh.local.planCode = bh.local.proposal.plan_code;

      bh.local.sumInsured = Number(bh.local.proposal.sum_insured);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.calculateRatingAge(bh, parentSpanInst);
      //appendnew_next_validateInput
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s5SFkNXt4kfA98Fe',
        spanInst,
        'validateInput'
      );
    }
  }

  async calculateRatingAge(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculateRatingAge',
      parentSpanInst
    );
    try {
      bh.local.ratingAge = Number(bh.local.proposal.rating_age);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.calculateRateCard(bh, parentSpanInst);
      //appendnew_next_calculateRatingAge
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AkCMoL4pmr9mUkcE',
        spanInst,
        'calculateRatingAge'
      );
    }
  }

  async calculateRateCard(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculateRateCard',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getPlansInternal(spanInst, undefined);
      bh.local.plansResponse = outputVariables.input.plansResponse;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resolveAgeBandFromReels(bh, parentSpanInst);
      //appendnew_next_calculateRateCard
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NIT1CF1fzTxMN79c',
        spanInst,
        'calculateRateCard'
      );
    }
  }

  async resolveAgeBandFromReels(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resolveAgeBandFromReels',
      parentSpanInst
    );
    try {
      const plans = bh.local.plansResponse.plans;

      const ratingAge = bh.local.ratingAge;

      const planCode = bh.local.planCode;

      const matched = plans.find((plan) => {
        const [minAge, maxAge] = plan.age_band.split('-').map(Number);

        return (
          plan.plan_code === planCode &&
          ratingAge >= minAge &&
          ratingAge <= maxAge
        );
      });

      if (!matched) {
        throw new Error('Unable to resolve age band from Reels');
      }

      bh.local.selectedPlan = matched;

      bh.local.ageBand = matched.age_band;

      console.log('Resolved Age Band :', bh.local.ageBand);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.calculatePremiumGetPlanCallService(bh, parentSpanInst);
      //appendnew_next_resolveAgeBandFromReels
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l8ZGvDpqL198qWJN',
        spanInst,
        'resolveAgeBandFromReels'
      );
    }
  }

  async calculatePremiumGetPlanCallService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculatePremiumGetPlanCallService',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getPlansInternal(spanInst, undefined);
      bh.local.plansResponse = outputVariables.input.plansResponse;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.calculateBasePremium(bh, parentSpanInst);
      //appendnew_next_calculatePremiumGetPlanCallService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FcCgYbyh9RE5pxiQ',
        spanInst,
        'calculatePremiumGetPlanCallService'
      );
    }
  }

  async calculateBasePremium(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculateBasePremium',
      parentSpanInst
    );
    try {
      console.log('Plans Response');
      console.log(JSON.stringify(bh.local.plansResponse, null, 2));

      const plans = bh.local.plansResponse.plans;

      // Find matching Reels record using rating age
      bh.local.selectedPlan = plans.find((plan) => {
        if (plan.plan_code !== bh.local.planCode) {
          return false;
        }

        if (Number(plan.max_si_allowed) !== Number(bh.local.sumInsured)) {
          return false;
        }

        const [minAge, maxAge] = plan.age_band.split('-').map(Number);

        return bh.local.ratingAge >= minAge && bh.local.ratingAge <= maxAge;
      });

      if (!bh.local.selectedPlan) {
        throw new Error('Matching Reels plan not found');
      }

      // Resolve age band from Reels
      bh.local.ageBand = bh.local.selectedPlan.age_band;

      console.log('Resolved Age Band :', bh.local.ageBand);

      console.log('Selected Reels Plan');
      console.log(JSON.stringify(bh.local.selectedPlan, null, 2));

      // Calculate Base Premium
      const rate = Number(bh.local.selectedPlan.base_rate_per_lakh);

      bh.local.basePremium = (Number(bh.local.sumInsured) / 100000) * rate;

      console.log('Base Premium :', bh.local.basePremium);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.applyLoading(bh, parentSpanInst);
      //appendnew_next_calculateBasePremium
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o5MkkZsr4StQKcSe',
        spanInst,
        'calculateBasePremium'
      );
    }
  }

  async applyLoading(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'applyLoading',
      parentSpanInst
    );
    try {
      const pct = Number(bh.local.loadingPct);

      bh.local.loadedPremium =
        bh.local.basePremium + (bh.local.basePremium * pct) / 100;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.calculateGst(bh, parentSpanInst);
      //appendnew_next_applyLoading
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SigDlqdu1oy1I7G3',
        spanInst,
        'applyLoading'
      );
    }
  }

  async calculateGst(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculateGst',
      parentSpanInst
    );
    try {
      bh.local.gstAmount = bh.local.loadedPremium * 0.18;

      bh.local.finalPremium = bh.local.loadedPremium + bh.local.gstAmount;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.preparePremiumResponse(bh, parentSpanInst);
      //appendnew_next_calculateGst
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZOW3jTDoY75MtPFU',
        spanInst,
        'calculateGst'
      );
    }
  }

  async preparePremiumResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'preparePremiumResponse',
      parentSpanInst
    );
    try {
      bh.local.premiumData = {
        ratingAge: bh.local.ratingAge,

        ageBand: bh.local.ageBand,

        basePremium: bh.local.basePremium,

        loadedPremium: bh.local.loadedPremium,

        gstAmount: bh.local.gstAmount,

        finalPremium: bh.local.finalPremium,

        ratingTrace: `Plan:${bh.local.selectedPlan.plan_name}, Rate:${bh.local.selectedPlan.base_rate_per_lakh}/Lakh, Loading:${bh.local.loadingPct}%`,
      };
      bh.input.premiumData = bh.local.premiumData;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_preparePremiumResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_liN49rzu0S7cnAWf',
        spanInst,
        'preparePremiumResponse'
      );
    }
  }

  async managerActionServiceVariables(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionServiceVariables',
      parentSpanInst
    );
    try {
      this.proposalId;
      this.action;
      this.remark;
      this.proposalData;
      this.proposalUpdate;
      this.proposalUpdateFilter;
      this.members;
      this.proposal;
      this.updateProposalResponse;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.managerActionValidateRequest(bh, parentSpanInst);
      //appendnew_next_managerActionServiceVariables
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Atys6zQkVzlXgpYi',
        spanInst,
        'managerActionServiceVariables'
      );
    }
  }

  async managerActionValidateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionValidateRequest',
      parentSpanInst
    );
    try {
      bh.local.proposalId = bh.input.params.proposalId;

      bh.local.action = bh.input.body.action.toUpperCase();

      bh.local.remark = bh.input.body.remark || '';

      if (!bh.local.proposalId) throw new Error('Proposal Id required');

      if (!bh.local.action) throw new Error('Action required');
      if (bh.local.action != 'APPROVE' && bh.local.action != 'DECLINE') {
        throw new Error('Invalid Action');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.managerActionProposalCallService(bh, parentSpanInst);
      //appendnew_next_managerActionValidateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LSCBkK6SsCEHsXEL',
        spanInst,
        'managerActionValidateRequest'
      );
    }
  }

  async managerActionProposalCallService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionProposalCallService',
      parentSpanInst
    );
    try {
      let outputVariables = await this.loadProposalData(
        spanInst,
        bh.local.proposalId,
        undefined
      );
      bh.local.proposalData = outputVariables.input.proposalData;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.managerActionValidateProposal(bh, parentSpanInst);
      //appendnew_next_managerActionProposalCallService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DAJ2Ioav0DFdPUWR',
        spanInst,
        'managerActionProposalCallService'
      );
    }
  }

  async managerActionValidateProposal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionValidateProposal',
      parentSpanInst
    );
    try {
      console.log(JSON.stringify(bh.local.proposalData, null, 2));

      if (!bh.local.proposalData) {
        throw new Error('Proposal not found');
      }

      bh.local.proposal = bh.local.proposalData.proposal;

      bh.local.members = bh.local.proposalData.members;

      if (bh.local.proposal.status != 'MU_APPROVED') {
        throw new Error('Proposal is not ready for Manager Review');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.managerActionSwitchByDecision(bh, parentSpanInst);
      //appendnew_next_managerActionValidateProposal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IDraELSUHGUBcEem',
        spanInst,
        'managerActionValidateProposal'
      );
    }
  }

  async managerActionSwitchByDecision(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionSwitchByDecision',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.action,
          'APPROVE',
          undefined,
          undefined
        )
      ) {
        bh = await this.managerActionAccept(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.action,
          'DECLINE',
          undefined,
          undefined
        )
      ) {
        bh = await this.managerActionDecline(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oZblh9H6Mm0fbwC0',
        spanInst,
        'managerActionSwitchByDecision'
      );
    }
  }

  async managerActionAccept(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionAccept',
      parentSpanInst
    );
    try {
      console.log('Manager Approved');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareProposalUpdateManager(bh, parentSpanInst);
      //appendnew_next_managerActionAccept
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cpO2M1sM0cK82AVu',
        spanInst,
        'managerActionAccept'
      );
    }
  }

  async prepareProposalUpdateManager(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareProposalUpdateManager',
      parentSpanInst
    );
    try {
      bh.local.proposalUpdateFilter = {
        proposal_id: bh.local.proposalId,
      };

      bh.local.proposalUpdate = {};

      switch (bh.local.action) {
        case 'APPROVE':
          bh.local.proposalUpdate.status = 'MANAGER_APPROVED';

          bh.local.proposalUpdate.manager_remarks = bh.local.remark;

          break;

        case 'DECLINE':
          bh.local.proposalUpdate.status = 'DECLINED';

          bh.local.proposalUpdate.manager_remarks = bh.local.remark;

          break;

        default:
          throw new Error('Invalid Action');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.managerActionUpdateProposal(bh, parentSpanInst);
      //appendnew_next_prepareProposalUpdateManager
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oX5njHbToYTcV1dR',
        spanInst,
        'prepareProposalUpdateManager'
      );
    }
  }

  async managerActionUpdateProposal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionUpdateProposal',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_99PeWpSvHx3jjW6m');
      bh.local.updateProposalResponse = await dmUtilsInst.updateByFilter(
        '_EN_hll0abjopf',
        bh.local.proposalUpdateFilter,
        bh.local.proposalUpdate
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.reloadProposalManager(bh, parentSpanInst);
      //appendnew_next_managerActionUpdateProposal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LLqY0DwE1DMgsouC',
        spanInst,
        'managerActionUpdateProposal'
      );
    }
  }

  async reloadProposalManager(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'reloadProposalManager',
      parentSpanInst
    );
    try {
      let outputVariables = await this.loadProposalData(
        spanInst,
        bh.local.proposalId,
        undefined
      );
      bh.local.proposalData = outputVariables.input.proposalData;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareManagerActionResponse(bh, parentSpanInst);
      //appendnew_next_reloadProposalManager
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0DfEoGsErqD6oUwV',
        spanInst,
        'reloadProposalManager'
      );
    }
  }

  async prepareManagerActionResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareManagerActionResponse',
      parentSpanInst
    );
    try {
      console.log('Proposal Data');

      console.log(JSON.stringify(bh.local.proposalData, null, 2));

      if (!bh.local.proposalData) {
        throw new Error('Proposal not found');
      }

      /*--------------------------------------
 Prepare Success Response
--------------------------------------*/

      bh.local.response = {
        success: true,

        message: 'Manager action completed successfully',

        data: bh.local.proposalData,
      };

      console.log('Response');

      console.log(JSON.stringify(bh.local.response, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.managerActionHttpOut(bh, parentSpanInst);
      //appendnew_next_prepareManagerActionResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aEpOyJf1DOnVYB5D',
        spanInst,
        'prepareManagerActionResponse'
      );
    }
  }

  async managerActionHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xFFpg3HVB2OPxJKS');
    }
  }

  async managerActionDecline(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'managerActionDecline',
      parentSpanInst
    );
    try {
      console.log('Manager Declined');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareProposalUpdateManager(bh, parentSpanInst);
      //appendnew_next_managerActionDecline
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eqwNArBs0bvkOO45',
        spanInst,
        'managerActionDecline'
      );
    }
  }

  async prepareReelsPlanRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareReelsPlanRequest',
      parentSpanInst
    );
    try {
      const BASE_URL = bh.system.environment.REELS_BASE_URL;

      const TOKEN = bh.system.environment.REELS_TOKEN;

      const DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';

      const MDM_ID = 'bde0d7f4-e63e-41dd-88e4-92a195bbb88d';

      const ENTITY_ID = '76dad198-6eac-4dad-9e8c-b726fef944fb';

      bh.local.reelsUrl = `${BASE_URL}/integration/api/records/filter/${DATASET_ID}/${MDM_ID}/${ENTITY_ID}`;

      bh.local.headers = {
        token: TOKEN,

        'Content-Type': 'application/json',
      };

      bh.local.requestBody = {
        pageNumber: 0,

        pageSize: 100,

        filter: {},

        multiplicity: 'multiple',

        totalCount: true,
      };

      console.log('Reels URL');
      console.log(bh.local.reelsUrl);

      console.log('Reels Request');
      console.log(JSON.stringify(bh.local.requestBody, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callReelsPlanMasterData(bh, parentSpanInst);
      //appendnew_next_prepareReelsPlanRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FgDz1E8sD8rZBe5a',
        spanInst,
        'prepareReelsPlanRequest'
      );
    }
  }

  async callReelsPlanMasterData(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.reelsUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.reelsResponse = responseMsg;
      bh = await this.validateAndPrepareReelResponse(bh, parentSpanInst);
      //appendnew_next_callReelsPlanMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ShSQQVt0HP3PKufA');
    }
  }

  async validateAndPrepareReelResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateAndPrepareReelResponse',
      parentSpanInst
    );
    try {
      console.log('Reels Response');

      console.log(JSON.stringify(bh.local.reelsResponse, null, 2));

      if (!bh.local.reelsResponse) {
        throw new Error('Reels API did not return response');
      }

      if (
        !bh.local.reelsResponse.payload ||
        !bh.local.reelsResponse.payload.records
      ) {
        throw new Error('Reels Master records not found');
      }

      bh.local.plansResponse = {
        plans: bh.local.reelsResponse.payload.records,
      };

      console.log('Plans Response');

      console.log(JSON.stringify(bh.local.plansResponse, null, 2));
      bh.input.plansResponse = bh.local.plansResponse;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_validateAndPrepareReelResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PXejJwrK8ad1A8Ir',
        spanInst,
        'validateAndPrepareReelResponse'
      );
    }
  }

  async getReelsPlansCallService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getReelsPlansCallService',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getPlansInternal(spanInst, undefined);
      bh.local.plansResponse = outputVariables.input.plansResponse;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.reelResponse(bh, parentSpanInst);
      //appendnew_next_getReelsPlansCallService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ful1nB7vPWZPudgb',
        spanInst,
        'getReelsPlansCallService'
      );
    }
  }

  async reelResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'reelResponse',
      parentSpanInst
    );
    try {
      console.log('Plans Response');

      console.log(JSON.stringify(bh.local.plansResponse, null, 2));

      if (!bh.local.plansResponse || !bh.local.plansResponse.plans) {
        throw new Error('Plans not found');
      }

      /*--------------------------------------
 Prepare Success Response
--------------------------------------*/

      bh.local.response = {
        success: true,

        message: 'Plans fetched successfully',

        data: bh.local.plansResponse,
      };

      console.log('Success Response');

      console.log(JSON.stringify(bh.local.response, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.reelsPlanMasterDataHttpOut(bh, parentSpanInst);
      //appendnew_next_reelResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lw53J1KeoqBofdty',
        spanInst,
        'reelResponse'
      );
    }
  }

  async reelsPlanMasterDataHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HCCBukDSHldJjFhg');
    }
  }

  async healthProposalCatchNodeScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'healthProposalCatchNodeScript',
      parentSpanInst
    );
    try {
      console.log('******** CATCH NODE EXECUTED ********');

      console.error(bh.error);

      let statusCode = 500;

      let message = 'Internal Server Error';

      if (bh.error?.sqlMessage) {
        message = bh.error.sqlMessage;
        statusCode = 500;
      } else if (bh.error?.message) {
        message = bh.error.message;
        statusCode = 400;
      }

      bh.web.res.statusCode = statusCode;

      bh.web.res.body = {
        success: false,

        statusCode: statusCode,

        message: message,

        timestamp: new Date().toISOString(),
      };

      return bh;
      this.tracerService.sendData(spanInst, bh);
      await this.healthProposalCatchHttpOut(bh, parentSpanInst);
      //appendnew_next_healthProposalCatchNodeScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_35waBhdJvYXDzquo',
        spanInst,
        'healthProposalCatchNodeScript'
      );
    }
  }

  async healthProposalCatchHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.web.res.statusCode).send(bh.web.res.body);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wrfIL6MCEcJTBZ13');
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
      (await this.healthProposalCatch(bh, parentSpanInst))
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
  async healthProposalCatch(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_35waBhdJvYXDzquo', 'sd_wrfIL6MCEcJTBZ13'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.healthProposalCatchNodeScript(bh, parentSpanInst);
    //appendnew_next_healthProposalCatch
    return true;
  }
  //appendnew_flow_proposals_Catch
}
