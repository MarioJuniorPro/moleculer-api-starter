import { ServiceSchema, Context } from 'moleculer';

const GreeterService: ServiceSchema = {
  name: 'greeter',

  /**
   * Service settings
   */
  settings: {},

  /**
   * Service dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    /**
     * Say a 'Hello'
     *
     * @returns
     */
    hello: (): string => 'Hello Moleculer',

    /**
     * Welcome a username
     *
     * @param {String} name - User name
     */
    welcome: {
      params: {
        name: 'string',
      },
      handler: (ctx: Context<any, any>): string => `Welcome, ${ctx.params.name}`,
    },
  },

  /**
   * Events
   */
  events: {},

  /**
   * Methods
   */
  methods: {},
};

export = GreeterService;
