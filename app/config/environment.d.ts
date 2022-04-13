export default config;

/**
 * Type declarations for
 *    import config from './config/environment'
 *
 * For now these need to be managed by the developer
 * since different ember addons can materialize new entries.
 */
declare const config: {
    environment: any;
    modulePrefix: string;
    podModulePrefix: string;
    locationType: 'history' | 'hash' | 'none' | 'auto';
    rootURL: string;
    routerRootURL: string;
    apiBaseUrl: string;
    fastboot: {
        hostWhitelist: Array<string | RegExp>;
    };
    pageTitle: {
        prepend: boolean;
    };
    APP: Record<string, unknown>;
};
