// need to fix https://github.com/doczjs/docz/pull/1732
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var yargs = require('yargs');
var _get = _interopDefault(require('lodash/fp/get'));
var fs$1 = require('fs-extra');
var envDotProp = require('env-dot-prop');
var humanize = _interopDefault(require('humanize-string'));
var titleize = _interopDefault(require('titleize'));
var fs$2 = require('fs');
var path$1 = require('path');
var path$1__default = _interopDefault(path$1);
var resolve = require('resolve');
var _merge = _interopDefault(require('lodash/fp/merge'));
var _omit = _interopDefault(require('lodash/fp/omit'));
var loadCfg = require('load-cfg');
var detectPort = _interopDefault(require('detect-port'));
var _isFunction = _interopDefault(require('lodash/fp/isFunction'));
var logger = require('signale');
var logger__default = _interopDefault(logger);
var xstate = require('xstate');
var findUp = _interopDefault(require('find-up'));
var fs$3 = require('docz-utils/lib/fs');
var format = require('docz-utils/lib/format');
var spawn$1 = _interopDefault(require('cross-spawn'));
var waitOn = _interopDefault(require('wait-on'));
var get = _interopDefault(require('lodash/get'));
var chokidar = _interopDefault(require('chokidar'));
var getPkgRepo = _interopDefault(require('get-pkg-repo'));
var _assoc = _interopDefault(require('lodash/fp/assoc'));
var glob = _interopDefault(require('fast-glob'));
var sh = _interopDefault(require('shelljs'));
var equal = _interopDefault(require('fast-deep-equal'));
var _isString = _interopDefault(require('lodash/fp/isString'));
var _isRegExp = _interopDefault(require('lodash/fp/isRegExp'));
var tslib = require('tslib');
var mdast = require('docz-utils/lib/mdast');
var minimatch = _interopDefault(require('minimatch'));
var crypto = require('crypto');
var slugify = _interopDefault(require('@sindresorhus/slugify'));
var _propEq = _interopDefault(require('lodash/fp/propEq'));
var actualNameHandler = _interopDefault(require('react-docgen-actual-name-handler'));
var reactDocgen = require('react-docgen');
var _entries = _interopDefault(require('lodash/fp/entries'));
var _contains = _interopDefault(require('lodash/fp/contains'));
var _prop = _interopDefault(require('lodash/fp/prop'));
var _isEmpty = _interopDefault(require('lodash/fp/isEmpty'));
var reactDocgenTs = require('react-docgen-typescript');
var ts = _interopDefault(require('typescript'));

const ensureSlash = (filepath, needsSlash) => {
  const hasSlash = filepath.endsWith('/');

  if (hasSlash && !needsSlash) {
    return filepath.substr(filepath, filepath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${filepath}/`;
  } else {
    return filepath;
  }
};
const root = fs$2.realpathSync(process.cwd());
const IS_DOCZ_PROJECT = path$1.parse(root).base === '.docz';
const resolveApp = to => path$1.resolve(root, IS_DOCZ_PROJECT ? '../' : './', to);
const checkIsDoczProject = config => {
  return path$1.parse(config.root || root).base === '.docz';
};
const getRootDir = config => {
  const isDoczProject = checkIsDoczProject(config);
  return isDoczProject ? path$1.resolve(root, '../') : root;
};
const getThemesDir = config => {
  // resolve normalizes the new path and removes trailing slashes
  return path$1.resolve(path$1.join(getRootDir(config), config.themesDir));
};
const templates = path$1.join(resolve.sync('docz-core'), '../templates');
const servedPath = base => ensureSlash(base, true);
const docz = resolveApp('.docz');
const cache = path$1.resolve(docz, '.cache/');
const app = path$1.resolve(docz, 'app/');
const appPackageJson = resolveApp('package.json');
const appTsConfig = resolveApp('tsconfig.json');
const gatsbyConfig = resolveApp('gatsby-config.js');
const gatsbyBrowser = resolveApp('gatsby-browser.js');
const gatsbyNode = resolveApp('gatsby-node.js');
const gatsbySSR = resolveApp('gatsby-ssr.js');
const getDist = dest => path$1.join(root, dest);
const distPublic = dest => path$1.join(dest, 'public/');
const importsJs = path$1.resolve(app, 'imports.js');
const rootJs = path$1.resolve(app, 'root.jsx');
const indexJs = path$1.resolve(app, 'index.jsx');
const indexHtml = path$1.resolve(app, 'index.html');
const db = path$1.resolve(app, 'db.json');

var paths = /*#__PURE__*/Object.freeze({
  ensureSlash: ensureSlash,
  root: root,
  resolveApp: resolveApp,
  checkIsDoczProject: checkIsDoczProject,
  getRootDir: getRootDir,
  getThemesDir: getThemesDir,
  templates: templates,
  servedPath: servedPath,
  docz: docz,
  cache: cache,
  app: app,
  appPackageJson: appPackageJson,
  appTsConfig: appTsConfig,
  gatsbyConfig: gatsbyConfig,
  gatsbyBrowser: gatsbyBrowser,
  gatsbyNode: gatsbyNode,
  gatsbySSR: gatsbySSR,
  getDist: getDist,
  distPublic: distPublic,
  importsJs: importsJs,
  rootJs: rootJs,
  indexJs: indexJs,
  indexHtml: indexHtml,
  db: db
});

const pReduce = (iterable, reducer, initialValue) => new Promise((resolve, reject) => {
  const iterator = iterable[Symbol.iterator]();
  let index = 0;

  const next = async total => {
    const element = iterator.next();

    if (element.done) {
      resolve(total);
      return;
    }

    try {
      const value = await Promise.all([total, element.value]);
      next(reducer(value[0], value[1], index++));
    } catch (error) {
      reject(error);
    }
  };

  next(initialValue);
});

class Plugin {
  constructor(p) {
    this.setConfig = p.setConfig;
    this.onCreateWebpackConfig = p.onCreateWebpackConfig;
    this.onCreateBabelConfig = p.onCreateBabelConfig;
    this.modifyFiles = p.modifyFiles;
    this.modifyEntry = p.modifyEntry;
    this.onCreateDevServer = p.onCreateDevServer;
    this.onPreBuild = p.onPreBuild;
    this.onPostBuild = p.onPostBuild;
  }

  static runPluginsMethod(plugins) {
    return (method, ...args) => {
      if (plugins && plugins.length > 0) {
        for (const plugin of plugins) {
          const fn = _get(method, plugin);

          if (_isFunction(fn)) {
            fn(...args);
          }
        }
      }
    };
  }

  static propsOfPlugins(plugins) {
    return prop => plugins && plugins.length > 0 ? plugins.map(p => _get(prop, p)).filter(Boolean) : [];
  }

  static reduceFromPlugins(plugins) {
    return (method, initial, ...args) => {
      return [...(plugins || [])].reduce((obj, plugin) => {
        const fn = _get(method, plugin);

        return fn && _isFunction(fn) ? fn(obj, ...args) : obj;
      }, initial);
    };
  }

  static reduceFromPluginsAsync(plugins) {
    return (method, initial, ...args) => {
      return pReduce([...(plugins || [])], (obj, plugin) => {
        const fn = _get(method, plugin);

        return Promise.resolve(fn && _isFunction(fn) ? fn(obj, ...args) : obj);
      }, initial);
    };
  }

}
function createPlugin(factory) {
  return new Plugin(factory);
}

const toOmit = ['_', '$0', 'version', 'help'];
const doczRcBaseConfig = {
  themeConfig: {},
  src: './',
  gatsbyRoot: null,
  themesDir: 'src',
  mdxExtensions: ['.md', '.mdx'],
  docgenConfig: {},
  menu: [],
  plugins: [],
  mdPlugins: [],
  hastPlugins: [],
  ignore: [/readme.md/i, /changelog.md/i, /code_of_conduct.md/i, /contributing.md/i, /license.md/i],
  filterComponents: files => files.filter(filepath => {
    const isTestFile = /\.(test|spec)\.(js|jsx|ts|tsx)$/.test(filepath);

    if (isTestFile) {
      return false;
    }

    const startsWithCapitalLetter = /\/([A-Z]\w*)\.(js|jsx|ts|tsx)$/.test(filepath);
    const isCalledIndex = /\/index\.(js|jsx|ts|tsx)$/.test(filepath);
    const hasJsxOrTsxExtension = /.(jsx|tsx)$/.test(filepath);
    return startsWithCapitalLetter || isCalledIndex || hasJsxOrTsxExtension;
  })
};
const getBaseConfig = (argv, custom) => {
  const initial = _omit(toOmit, argv);

  const base = Object.assign(Object.assign(Object.assign({}, doczRcBaseConfig), initial), {
    paths
  });
  return _merge(base, custom);
};
const parseConfig = async (argv, custom) => {
  const port = await detectPort(argv.port);
  const defaultConfig = getBaseConfig(argv, Object.assign({
    port
  }, custom));
  const config = argv.config ? loadCfg.loadFrom(path$1.join(docz, 'doczrc.js'), defaultConfig) : loadCfg.load('docz', defaultConfig);
  const reduceAsync = Plugin.reduceFromPluginsAsync(config.plugins);
  return reduceAsync('setConfig', config);
};

const getEnv = (val, defaultValue = null) => envDotProp.get(val, defaultValue, {
  parse: true
});

const getInitialTitle = pkg => {
  const name = _get('name', pkg) || 'MyDoc';
  return titleize(humanize(name.replace(/^@.*\//, '')));
};

const getInitialDescription = pkg => _get('description', pkg) || 'My awesome app using docz';

const setArgs = yargs => {
  const pkg = fs$1.readJsonSync(appPackageJson, {
    throws: false
  });
  return yargs.option('root', {
    type: 'string',
    default: getEnv('docz.root', root)
  }).option('base', {
    type: 'string',
    default: getEnv('docz.base', '/')
  }).option('source', {
    alias: 'src',
    type: 'string',
    default: getEnv('docz.source', doczRcBaseConfig.src)
  }).option('gatsbyRoot', {
    type: 'string',
    default: getEnv('docz.gatsbyRoot', doczRcBaseConfig.gatsbyRoot)
  }).option('files', {
    type: 'string',
    default: getEnv('docz.files', '**/*.{md,markdown,mdx}')
  }).option('ignore', {
    type: 'array',
    default: getEnv('docz.ignore', [])
  }).option('public', {
    type: 'string',
    default: getEnv('docz.public', '/public')
  }).option('dest', {
    alias: 'd',
    type: 'string',
    default: getEnv('docz.dest', '.docz/dist')
  }).option('editBranch', {
    alias: 'eb',
    type: 'string',
    default: getEnv('docz.edit.branch', 'master')
  }).option('config', {
    type: 'string',
    default: getEnv('docz.config', '')
  }).option('title', {
    type: 'string',
    default: getEnv('docz.title', getInitialTitle(pkg))
  }).option('description', {
    type: 'string',
    default: getEnv('docz.description', getInitialDescription(pkg))
  }).option('typescript', {
    alias: 'ts',
    type: 'boolean',
    default: getEnv('docz.typescript', false)
  }).option('propsParser', {
    type: 'boolean',
    default: getEnv('docz.props.parser', true)
  }).option('debug', {
    type: 'boolean',
    default: getEnv('docz.debug', false)
  }).option('host', {
    type: 'string',
    default: getEnv('docz.host', 'localhost')
  }).option('port', {
    alias: 'p',
    type: 'number',
    default: getEnv('docz.port', 3000)
  }).option('native', {
    type: 'boolean',
    default: getEnv('docz.native', false)
  }).option('separator', {
    type: 'string',
    default: getEnv('docz.separator', '-')
  }).option('openBrowser', {
    alias: ['o', 'open'],
    describe: 'auto open browser in dev mode',
    type: 'boolean',
    default: null
  });
};

const populateNodePath = () => {
  // We support resolving modules according to `NODE_PATH`.
  // It works similar to `NODE_PATH` in Node itself:
  // https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
  // Note that unlike in Node, only *relative* paths from `NODE_PATH` are honored.
  // Otherwise, we risk importing Node.js core modules into an app instead of Webpack shims.
  // https://github.com/facebook/create-react-app/issues/1023#issuecomment-265344421
  // We also resolve them to make sure all tools using them work consistently.
  envDotProp.set('node.path', envDotProp.get('node.path', '').split(path$1.delimiter).filter(folder => folder && !path$1.isAbsolute(folder)).map(folder => path$1.resolve(root, folder)).join(path$1.delimiter));
};

const configDotEnv = () => {
  const NODE_ENV = envDotProp.get('node.env');
  const dotenv = resolveApp('.env');
  const dotenvFiles = [`${dotenv}.${NODE_ENV}.local`, `${dotenv}.${NODE_ENV}`, // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${dotenv}.local`, dotenv]; // Load environment variables from .env* files. Suppress warnings using silent
  // if this file is missing. dotenv will never modify any environment variables
  // that have already been set.  Variable expansion is supported in .env files.
  // https://github.com/motdotla/dotenv

  dotenvFiles.filter(Boolean).forEach(dotenvFile => {
    require('dotenv').config({
      path: dotenvFile
    });
  });
};

const setEnv = env => {
  envDotProp.set('babel.env', env);
  envDotProp.set('node.env', env);
  configDotEnv();
  populateNodePath();
};

class Bundler {
  constructor(params) {
    const {
      args,
      server,
      build
    } = params;
    this.args = args;
    this.server = server;
    this.builder = build;
  }

  async createApp() {
    return this.server();
  }

  async build() {
    const dist = getDist(this.args.dest);
    const root = getRootDir(this.args);

    if (root === path$1.resolve(dist)) {
      logger__default.fatal(new Error('Unexpected option: "dest" cannot be set to the current working directory.'));
      process.exit(1);
    }

    await this.builder(this.args, dist);
  }

}

const fromTemplates = file => {
  return path$1.join(templates, file);
};
const outputFileFromTemplate = async (templatePath, outputPath, templateProps, compileProps) => {
  const filepath = fromTemplates(templatePath);
  const template = await fs$3.compiled(filepath, compileProps || {
    minimize: false
  });
  const file = template(templateProps || {});
  const raw = await format.format(file);
  await fs$1.outputFile(outputPath, raw);
};

const copyDoczRc = configPath => {
  const sourceDoczRc = configPath ? path$1.join(root, configPath) : path$1.join(root, 'doczrc.js');
  const hasDoczRc = fs$1.existsSync(sourceDoczRc);
  if (!hasDoczRc) return;
  const destinationDoczRc = path$1.join(docz, 'doczrc.js');

  try {
    fs$1.copySync(sourceDoczRc, destinationDoczRc);
  } catch (err) {}
};

const copyAndModifyPkgJson = async ctx => {
  const movePath = path$1.join(docz, 'package.json'); // const pkg = await fs.readJSON(filepath, { throws: false })

  const newPkg = Object.assign({
    name: 'docz-app',
    license: 'MIT',
    dependencies: {
      gatsby: 'just-to-fool-cli-never-installed'
    },
    scripts: {
      dev: 'gatsby develop',
      build: 'gatsby build',
      serve: 'gatsby serve'
    }
  }, ctx.isDoczRepo && {
    private: true,
    workspaces: ['../../../core/**', '../../../other-packages/**']
  });
  await fs$1.outputJSON(movePath, newPkg, {
    spaces: 2
  });
};

const writeEslintRc = async () => {
  const possibleFilenames = ['.eslintrc.js', '.eslintrc.yaml', '.eslintrc.yml', '.eslintrc.json', '.eslintrc'];

  for (const filename of possibleFilenames) {
    const filepath = path$1.join(root, filename);
    const dest = path$1.join(docz, filename);

    if (fs$1.pathExistsSync(filepath)) {
      await fs$1.copy(filepath, dest);
      return;
    }
  }
};

const copyDotEnv = () => {
  const filename = '.env';
  const filepath = path$1.join(root, filename);
  const dest = path$1.join(docz, filename);

  if (fs$1.pathExistsSync(filepath)) {
    fs$1.copySync(filepath, dest);
  }
};

const copyEslintIgnore = async () => {
  const filename = '.eslintignore';
  const filepath = path$1.join(root, filename);
  const dest = path$1.join(docz, filename);

  if (fs$1.pathExistsSync(filepath)) {
    await fs$1.copy(filepath, dest);
  }
};

const writeDefaultNotFound = async () => {
  const outputPath = path$1.join(docz, 'src/pages/404.js'); // If it exists then it would have been created in ensureFiles while copying the theme

  if (fs$1.existsSync(outputPath)) return;
  await outputFileFromTemplate('404.tpl.js', outputPath, {});
};

const writeGatsbyConfig = async ({
  args,
  isDoczRepo
}) => {
  const outputPath = path$1.join(docz, 'gatsby-config.js');

  const config = _omit(['plugins'], args);

  const newConfig = Object.assign(Object.assign({}, config), {
    root: docz
  });
  await outputFileFromTemplate('gatsby-config.tpl.js', outputPath, {
    isDoczRepo,
    config: newConfig,
    opts: JSON.stringify(newConfig)
  });
};

const writeGatsbyConfigNode = async () => {
  const outputPath = path$1.join(docz, 'gatsby-node.js');
  await outputFileFromTemplate('gatsby-node.tpl.js', outputPath);
};

const copyGatsbyConfigFile = async (from, to) => {
  const filepath = path$1.join(root, from);
  const dest = path$1.join(docz, to);

  if (fs$1.pathExistsSync(filepath)) {
    await fs$1.copy(filepath, dest);
  }
};

const writeGatsbyConfigCustom = async () => copyGatsbyConfigFile('gatsby-config.js', 'gatsby-config.custom.js');

const writeGatsbyNodeCustom = async () => copyGatsbyConfigFile('gatsby-node.js', 'gatsby-node.custom.js');

const writeGatsbySSR = async () => copyGatsbyConfigFile('gatsby-ssr.js', 'gatsby-ssr.js');

const writeGatsbyBrowser = async () => copyGatsbyConfigFile('gatsby-browser.js', 'gatsby-browser.js');

const createResources = async ctx => {
  try {
    copyDoczRc(ctx.args.config);
    copyDotEnv();
    await copyAndModifyPkgJson(ctx);
    await writeEslintRc();
    await copyEslintIgnore();
    await writeDefaultNotFound();
    await writeGatsbyConfig(ctx);
    await writeGatsbyConfigNode();
    await writeGatsbyConfigCustom();
    await writeGatsbyNodeCustom();
    await writeGatsbyBrowser();
    await writeGatsbySSR();
  } catch (err) {
    console.error(err);
  }
};

const ensureDirs = async () => {
  await fs$1.ensureDir(docz);
  return await fs$1.ensureDir(path$1.join(docz, 'src/pages'));
};

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var chalk = require('chalk');

var execSync = require('child_process').execSync;

var spawn = require('cross-spawn');

var open = require('open'); // https://github.com/sindresorhus/open#app


var OSX_CHROME = 'google chrome';
const Actions = Object.freeze({
  NONE: 0,
  BROWSER: 1,
  SCRIPT: 2
});

function getBrowserEnv() {
  // Attempt to honor this environment variable.
  // It is specific to the operating system.
  // See https://github.com/sindresorhus/open#app for documentation.
  const value = process.env.BROWSER;
  let action;

  if (!value) {
    // Default.
    action = Actions.BROWSER;
  } else if (value.toLowerCase().endsWith('.js')) {
    action = Actions.SCRIPT;
  } else if (value.toLowerCase() === 'none') {
    action = Actions.NONE;
  } else {
    action = Actions.BROWSER;
  }

  return {
    action,
    value
  };
}

function executeNodeScript(scriptPath, url) {
  const extraArgs = process.argv.slice(2);
  const child = spawn('node', [scriptPath, ...extraArgs, url], {
    stdio: 'inherit'
  });
  child.on('close', code => {
    if (code !== 0) {
      console.log();
      console.log(chalk.red('The script specified as BROWSER environment variable failed.'));
      console.log(chalk.cyan(scriptPath) + ' exited with code ' + code + '.');
      console.log();
      return;
    }
  });
  return true;
}

function startBrowserProcess(browser, url) {
  // If we're on OS X, the user hasn't specifically
  // requested a different browser, we can try opening
  // Chrome with AppleScript. This lets us reuse an
  // existing tab when possible instead of creating a new one.
  const shouldTryOpenChromeWithAppleScript = process.platform === 'darwin' && (typeof browser !== 'string' || browser === OSX_CHROME);

  if (shouldTryOpenChromeWithAppleScript) {
    try {
      // Try our best to reuse existing tab
      // on OS X Google Chrome with AppleScript
      execSync('ps cax | grep "Google Chrome"');
      execSync('osascript openChrome.applescript "' + encodeURI(url) + '"', {
        cwd: __dirname,
        stdio: 'ignore'
      });
      return true;
    } catch (err) {// Ignore errors.
    }
  } // Another special case: on OS X, check if BROWSER has been set to "open".
  // In this case, instead of passing `open` to `open` (which won't work),
  // just ignore it (thus ensuring the intended behavior, i.e. opening the system browser):
  // https://github.com/facebook/create-react-app/pull/1690#issuecomment-283518768


  if (process.platform === 'darwin' && browser === 'open') {
    browser = undefined;
  } // Fallback to opn
  // (It will always open new tab)


  try {
    var options = {
      app: browser,
      wait: false
    };
    open(url, options).catch(() => {}); // Prevent `unhandledRejection` error.

    return true;
  } catch (err) {
    return false;
  }
}
/**
 * Reads the BROWSER environment variable and decides what to do with it. Returns
 * true if it opened a browser or ran a node.js script, otherwise false.
 */


function openBrowser(url) {
  const {
    action,
    value
  } = getBrowserEnv();

  switch (action) {
    case Actions.NONE:
      // Special case: BROWSER="none" will prevent opening completely.
      return false;

    case Actions.SCRIPT:
      return executeNodeScript(value, url);

    case Actions.BROWSER:
      return startBrowserProcess(value, url);

    default:
      throw new Error('Not implemented.');
  }
}

const findRootPath = async () => {
  let repoRootPath = path$1__default.join(docz, '../');

  try {
    const foundRootPath = await findUp(async directory => {
      const hasGatsby = await findUp.exists(path$1__default.join(directory, 'node_modules', 'gatsby'));
      return hasGatsby ? directory : '';
    }, {
      type: 'directory'
    });

    if (typeof foundRootPath === 'string') {
      repoRootPath = foundRootPath;
    }
  } catch (err) {
    console.log(`Failed to find root folder ${err.message} \n Assuming it is ${repoRootPath}`);
  }

  return repoRootPath;
};
const execDevCommand = async ({
  args
}) => {
  // For monorepos that install dependencies higher in the fs tree
  const repoRootPath = get(args, 'repoRootPath', (await findRootPath()));
  const gatsbyPath = path$1__default.join(repoRootPath, 'node_modules/.bin/gatsby'); // const cliArgs = process.argv.slice(3)
  // Has --https flag to enable https in dev mode

  const useHttps = args.https;
  const caFile = args.caFile;
  const keyFile = args.keyFile;
  const certFile = args.certFile;
  const caFileOption = caFile ? ['--ca-file', caFile] : [];
  const keyFileOption = keyFile ? ['--key-file', keyFile] : [];
  const certFileOption = certFile ? ['--cert-file', certFile] : [];
  spawn$1(gatsbyPath, ['develop', '--host', `${args.host}`, '--port', `${args.port}`, useHttps ? '--https' : '', ...caFileOption, ...keyFileOption, ...certFileOption].filter(Boolean), {
    stdio: 'inherit',
    cwd: docz
  });
  const protocol = useHttps ? 'https' : 'http';
  const url = `${protocol}://${args.host}:${args.port}`;
  console.log();
  console.log('Building app');
  await waitOn({
    resources: [url],
    timeout: 30000
  });
  console.log();
  console.log('App ready on ' + url);

  if (args.open !== null && Boolean(args.open) === false) {
    return;
  }

  openBrowser(url);
};

const installDeps = async () => {
  // No need to install dependencies
  return;
};

const parseRepo = () => {
  try {
    const pkg = fs$1.readJsonSync(appPackageJson);
    return getPkgRepo(pkg);
  } catch (err) {
    return null;
  }
};
const getRepoUrl = () => {
  const repo = parseRepo();
  return repo && (repo.browsetemplate && repo.browsetemplate.replace('{domain}', repo.domain).replace('{user}', repo.user).replace('{project}', repo.project).replace('{/tree/committish}', '') || repo.browse && repo.browse());
};

const getBitBucketPath = (branch, relative) => {
  const querystring = `?mode=edit&spa=0&at=${branch}&fileviewer=file-view-default`;
  const filepath = path$1.join(`/src/${branch}`, relative, `{{filepath}}`);
  return `${filepath}${querystring}`;
};

const getTree = (repo, branch, relative) => {
  const defaultPath = path$1.join(`/edit/${branch}`, relative, `{{filepath}}`);
  const bitBucketPath = getBitBucketPath(branch, relative);
  if (repo && repo.type === 'bitbucket') return bitBucketPath;
  return defaultPath;
};

const getRepoEditUrl = config => {
  try {
    const repo = parseRepo();
    const gitDir = findUp.sync('.git', {
      type: 'directory'
    });
    if (!gitDir) return null;
    const project = path$1.parse(gitDir).dir;
    const root = getRootDir(config);
    const relative = path$1.relative(project, root);
    const tree = getTree(repo, config.editBranch, relative);
    return repo && repo.browsetemplate && repo.browsetemplate.replace('{domain}', repo.domain).replace('{user}', repo.user).replace('{project}', repo.project).replace('{/tree/committish}', tree);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getInitialConfig = config => {
  const pkg = fs$1.readJsonSync(appPackageJson, {
    throws: false
  });
  const repoUrl = getRepoUrl();
  return {
    title: config.title,
    description: config.description,
    menu: config.menu,
    version: get(pkg, 'version'),
    repository: repoUrl,
    native: config.native,
    themeConfig: config.themeConfig,
    separator: config.separator
  };
};

const update = async (params, initial, {
  config
}) => {
  const pathToConfig = path$1.join(docz, 'doczrc.js');
  const next = config ? loadCfg.loadFrom(pathToConfig, initial, true, true) : loadCfg.load('docz', initial, true, true);
  params.setState('config', next);
};

const WATCH_IGNORE = /(((^|[\/\\])\.((?!docz)(.+)))|(node_modules))/;
const createWatcher = (glob, config) => {
  const ignored = config.watchIgnore || WATCH_IGNORE;
  const watcher = chokidar.watch(glob, {
    ignored,
    cwd: root,
    persistent: true
  });
  watcher.setMaxListeners(Infinity);
  return watcher;
};
const state = (config, dev) => {
  const glob = config.config || loadCfg.finds('docz');
  const initial = getInitialConfig(config);
  const watcher = createWatcher(glob, config);
  return {
    id: 'config',
    start: async params => {
      const fn = async () => update(params, initial, config);

      await update(params, initial, config);

      if (dev) {
        watcher.on('add', fn);
        watcher.on('change', fn);
        watcher.on('unlink', fn);
      }
    },
    close: () => {
      watcher.close();
    }
  };
};

/**
 * Maps a given relative 'filepath' from 'themesDir/...' to 'src/...'
 */

const replaceThemesDir = (filepath, args) => {
  // Make the path to a given relative`filepath` relative to themesDir:
  const rawFilePath = path$1.relative(getThemesDir(args), path$1.resolve(root, filepath)); // => e.g. '/gatsby-theme-docz/**/index.tsx'
  // Prefix with 'src':

  return path$1.join('src', rawFilePath); // => 'src/gatsby-theme-docz/**/index.tsx'
};

const watchGatsbyThemeFiles = args => {
  const watcher = createWatcher(path$1.join(args.themesDir, 'gatsby-theme-**/**/*'), args);

  const copy = filepath => {
    const src = path$1.resolve(root, filepath);
    const dest = path$1.resolve(docz, replaceThemesDir(filepath, args));
    fs$1.copySync(src, dest);
  };

  const remove = filepath => {
    fs$1.removeSync(path$1.resolve(docz, filepath));
  };

  watcher.on('add', copy).on('addDir', copy).on('change', copy).on('unlink', remove).on('unlinkDir', remove);
  return () => watcher.close();
};

const createWatch = args => (glob, src, custom) => {
  const watcher = createWatcher(glob, args);
  const srcPath = path$1.join(root, src);
  const destPath = path$1.join(docz, custom ? src.replace('.js', '.custom.js') : src);

  const copyFile = () => fs$1.copySync(srcPath, destPath);

  const deleteFile = () => fs$1.removeSync(destPath);

  watcher.on('add', copyFile).on('change', copyFile).on('unlink', deleteFile);
  return () => watcher.close();
};

const watchDoczRc = args => {
  const watcher = createWatcher(path$1.join(root, args.config ? args.config : 'doczrc.js'), args);

  const copy = filepath => {
    const src = path$1.resolve(root, filepath);
    const dest = path$1.resolve(docz, 'doczrc.js');
    fs$1.copySync(src, dest);
  };

  const remove = () => {
    fs$1.removeSync(path$1.resolve(docz, 'doczrc.js'));
  };

  watcher.on('add', copy).on('change', copy).on('unlink', remove);
  return () => watcher.close();
};

const watchFiles = ({
  args
}) => () => {
  const watch = createWatch(args);
  const doczrc = watchDoczRc(args);
  const gatsbyBrowser$1 = watch(gatsbyBrowser, 'gatsby-browser.js');
  const gatsbyNode$1 = watch(gatsbyNode, 'gatsby-node.js');
  const gatsbySSR$1 = watch(gatsbySSR, 'gatsby-ssr.js');
  const gatsbyConfig$1 = watch(gatsbyConfig, 'gatsby-config.js', true);
  const themeFilesWatcher = watchGatsbyThemeFiles(args);
  return () => {
    doczrc();
    gatsbyConfig$1();
    gatsbyBrowser$1();
    gatsbyNode$1();
    gatsbySSR$1();
    themeFilesWatcher();
  };
};



var services = /*#__PURE__*/Object.freeze({
  createResources: createResources,
  ensureDirs: ensureDirs,
  execDevCommand: execDevCommand,
  installDeps: installDeps,
  watchFiles: watchFiles
});

const ensureFile = (filename, toDelete) => {
  const ghost = path$1.resolve(docz, toDelete || filename);
  const original = path$1.resolve(root, filename);

  if (fs$1.pathExistsSync(ghost) && !fs$1.pathExistsSync(original)) {
    fs$1.removeSync(ghost);
  }
};

const ensureFiles = ({
  args
}) => {
  // themesDir defaults to "src" to behave like a normal gatsby site
  const appPath = path$1.join(root, args.themesDir);
  const themeNames = glob.sync('gatsby-theme-**', {
    cwd: appPath,
    onlyDirectories: true
  });
  themeNames.forEach(themeName => {
    fs$1.copySync(path$1.join(appPath, themeName), path$1.join(docz, 'src', themeName));
  });
  const userPagesPath = path$1.join(appPath, 'pages');
  const doczPagesPath = path$1.join(docz, 'src', 'pages'); // Copy 404 and other possible Gatsby pages

  if (fs$1.existsSync(userPagesPath)) {
    fs$1.copySync(userPagesPath, doczPagesPath);
  }

  copyDoczRc(args.config);
  ensureFile('gatsby-browser.js');
  ensureFile('gatsby-ssr.js');
  ensureFile('gatsby-node.js');
  ensureFile('gatsby-config.js', 'gatsby-config.custom.js');
  const publicPath = path$1.join(docz, '..', args.public);

  if (fs$1.existsSync(publicPath)) {
    const destinationPath = path$1.join(docz, 'static', args.public);

    try {
      fs$1.copySync(publicPath, destinationPath);
    } catch (err) {
      console.log(`Failed to copy static assets from ${publicPath} to ${destinationPath} : ${err.message}`);
    }
  }
};
const getIsFirstInstall = () => {
  return !sh.test('-e', path$1.join(docz, 'package.json'));
};
const getIsDoczRepo = () => {
  return sh.test('-e', path$1.join(root, '../../core'));
};
const assignFirstInstall = xstate.assign(ctx => {
  const firstInstall = getIsFirstInstall();
  return _assoc('firstInstall', firstInstall, ctx);
});
const checkIsDoczRepo = xstate.assign(ctx => {
  const isDoczRepo = getIsDoczRepo();
  return _assoc('isDoczRepo', isDoczRepo, ctx);
});
const logError = (ctx, ev) => {
  logger__default.fatal(ev.data);
  sh.exit(0);
};

var actions = /*#__PURE__*/Object.freeze({
  ensureFiles: ensureFiles,
  getIsFirstInstall: getIsFirstInstall,
  getIsDoczRepo: getIsDoczRepo,
  assignFirstInstall: assignFirstInstall,
  checkIsDoczRepo: checkIsDoczRepo,
  logError: logError
});

const asyncState = (src, onDoneTarget) => ({
  initial: 'exec',
  states: {
    exec: {
      invoke: {
        src,
        onDone: 'success',
        onError: 'failure'
      }
    },
    success: {
      type: 'final'
    },
    failure: {
      actions: ['logError'],
      type: 'final'
    }
  },
  onDone: {
    target: onDoneTarget || 'exit'
  }
});

const machine = xstate.Machine({
  id: 'devServer',
  type: 'parallel',
  states: {
    watch: {
      onEntry: 'ensureFiles',
      invoke: {
        src: 'watchFiles'
      }
    },
    server: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            START_MACHINE: {
              actions: ['assignFirstInstall', 'checkIsDoczRepo'],
              target: 'ensuringDirs'
            }
          }
        },
        ensuringDirs: asyncState('ensureDirs', 'creatingResources'),
        creatingResources: asyncState('createResources', 'executingCommand'),
        executingCommand: asyncState('execDevCommand'),
        exit: {
          type: 'final'
        }
      }
    }
  }
});
const devServerMachine = machine.withConfig({
  services,
  actions
});

const server = args => async () => {
  const doczrcFilepath = await findUp(loadCfg.finds('docz'));
  const machine = devServerMachine.withContext({
    args,
    doczrcFilepath
  });
  const service = xstate.interpret(machine).onTransition(state => {
    if (args.debug) {
      console.log(state.value);
    }
  });
  return {
    start: async () => {
      service.start();
      service.send('START_MACHINE');
      process.on('exit', () => {
        service.stop();
      });
    }
  };
};

const spawnSync = (command, args) => {
  const {
    status
  } = spawn$1.sync(command, args, {
    stdio: 'inherit'
  });

  if (status !== 0) {
    process.exitCode = status || 1;
  }
};

const build = async (config, dist) => {
  const publicDir = path$1.join(docz, 'public');
  const cliArgs = ['run', 'build'];

  if (typeof config.base === 'string' && config.base.length) {
    cliArgs.push('--'); // Append gatsby option `--prefix-paths`to CLI args which will prepend pathPrefix from gatsby-config to urls
    // https://www.gatsbyjs.org/docs/path-prefix/

    cliArgs.push('--prefix-paths');
  }

  ensureFiles({
    args: config
  });
  sh.cd(docz);
  spawnSync('npm', cliArgs);
  await fs$1.copy(publicDir, dist);
};

const bundler = args => {
  return new Bundler({
    args,
    build,
    server: server(args)
  });
};

process.setMaxListeners(Infinity);
const dev = async args => {
  copyDoczRc(args.config);
  const config = await parseConfig(args);
  const bundler$1 = bundler(config);
  const app = await bundler$1.createApp();

  try {
    await app.start();
  } catch (err) {
    logger__default.fatal('Failed to process data server');
    logger__default.error(err);
    process.exit(1);
  }
};

process.setMaxListeners(Infinity);
const init = async args => {
  copyDoczRc(args.config);
  const doczrcFilepath = path$1__default.join(docz, 'doczrc.js');
  const config = await parseConfig(args);
  const isFirstInstall = getIsFirstInstall();
  const isDoczRepo = getIsDoczRepo();
  await ensureDirs();
  const serverMachineContext = {
    args: config,
    isDoczRepo,
    firstInstall: isFirstInstall,
    doczrcFilepath
  };
  await createResources(serverMachineContext);
};

const build$1 = async args => {
  copyDoczRc(args.config);
  const config = await parseConfig(args);
  const bundler$1 = bundler(config);

  try {
    await init(args);
  } catch (err) {
    logger.error(`Failed to initialize docz : ${err.message}`);
  }

  try {
    await bundler$1.build();
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

const serve = async args => {
  const config = await parseConfig(args);
  const cliArgs = ['run', 'serve'];

  if (config.port) {
    cliArgs.push('--'); // Append gatsby option `port` to CLI args
    // https://www.gatsbyjs.org/docs/cheat-sheet/#cheat_sheet-text

    cliArgs.push('--port');
    cliArgs.push(String(config.port));
  }

  if (config.host) {
    // Append gatsby option `host` to CLI args
    // https://www.gatsbyjs.org/docs/cheat-sheet/#cheat_sheet-text
    cliArgs.push('--host');
    cliArgs.push(String(config.host));
  }

  sh.cd(docz);
  spawnSync('npm', cliArgs);
};

const cli = () => {
  return yargs.command('init', 'initialize docz in your app', setArgs, async args => {
    setEnv('development');
    await init(args);
  }).command('dev', 'initialize docz dev server', setArgs, async args => {
    setEnv('development');
    await dev(args);
  }).command('build', 'build dir as static site', setArgs, async args => {
    setEnv('production');
    await build$1(args);
    process.exit();
  }).command('serve', 'serve dir as static site', setArgs, async args => {
    setEnv('production');
    await serve(args);
    process.exit();
  }).demandCommand().recommendCommands().help().wrap(72).epilog('for more information visit https://github.com/doczjs/docz').showHelpOnFail(false, 'whoops, something went wrong! run with --help').argv;
};

const createId = file => crypto.createHash('md5').update(file).digest('hex');

class Entry {
  constructor(ast, file, config) {
    const filepath = this.getFilepath(config, file);
    const parsed = mdast.getParsedData(ast);
    const name = this.getName(filepath, parsed);
    const root = getRootDir(config);
    this.id = createId(file);
    this.filepath = filepath;
    this.fullpath = path$1.resolve(root, file);
    this.link = '';
    this.hidden = parsed.hidden || false;
    this.slug = this.slugify(filepath, config.separator);
    this.route = this.getRoute(parsed);
    this.name = name;
    this.menu = parsed.menu || '';
    this.headings = mdast.headingsFromAst(ast);
    this.settings = parsed;
  }

  setLink(url) {
    this.link = url.replace('{{filepath}}', this.filepath);
  }

  getFilepath(config, file) {
    const root = getRootDir(config);
    const fullpath = path$1.resolve(root, file);
    const filepath = path$1.relative(root, fullpath);

    if (process.platform === 'win32') {
      return filepath.split('\\').join('/');
    }

    return filepath;
  }

  getName(filepath, parsed) {
    const filename = humanize(path$1.parse(filepath).name);
    return parsed && parsed.name ? parsed.name : filename;
  }

  slugify(filepath, separator) {
    const ext = path$1.extname(filepath);
    const fileWithoutExt = filepath.replace(ext, '');
    return slugify(fileWithoutExt, {
      separator
    });
  }

  getRoute(parsed) {
    const parsedRoute = _get('route', parsed);

    return parsedRoute || `/${this.slug}`;
  }

}

const mapToObj = map => Array.from(map.entries()).reduce((obj, [key, value]) => Object.assign(Object.assign({}, obj), {
  [`${key}`]: value
}), {});

const matchFilesWithSrc = config => files => {
  const {
    paths,
    src
  } = config;
  const rootDir = paths.getRootDir(config);
  const srcDir = path$1.resolve(rootDir, src);
  const prefix = path$1.relative(rootDir, srcDir);
  return files.map(file => file.startsWith(prefix) ? file : path$1.join(prefix, file));
};
const getFilesToMatch = config => {
  const {
    files: pattern
  } = config;
  const arr = Array.isArray(pattern) ? pattern : [pattern];
  const toMatch = matchFilesWithSrc(config);
  return toMatch(arr);
};
class Entries {
  constructor(config) {
    this.repoEditUrl = getRepoEditUrl(config);
    this.all = new Map();

    this.get = async () => this.getMap(config);
  }

  async getMap(config) {
    const {
      paths,
      ignore,
      plugins,
      mdPlugins,
      src
    } = config;
    const fileMatchingPatterns = getFilesToMatch(config);
    const srcHasNodeModules = src.indexOf('node_modules') !== -1; // Hack around fast-glob not returning the whole set when many patterns are provided in the array

    let initialFiles = [];

    for (let filePattern of fileMatchingPatterns) {
      const filePatternHasNodeModules = filePattern.indexOf('node_modules') !== -1;
      const shouldIncludeNodeModules = srcHasNodeModules || filePatternHasNodeModules;
      const globIgnore = shouldIncludeNodeModules ? [] : ['**/node_modules/**'];
      const filesFromPattern = await glob([filePattern], {
        cwd: paths.getRootDir(config),
        ignore: globIgnore,
        onlyFiles: true,
        unique: true,
        baseNameMatch: false,
        caseSensitiveMatch: false
      });
      initialFiles = [...initialFiles, ...filesFromPattern];
    }

    const files = initialFiles.filter(value => {
      return !ignore.some(pattern => {
        if (_isString(pattern)) return minimatch(value, pattern);
        if (_isRegExp(pattern)) return pattern.test(value);
        return false;
      });
    });
    const rootDir = paths.getRootDir(config);

    const createEntry = async file => {
      try {
        const fullpath = path$1.resolve(rootDir, file);
        const ast = await mdast.parseMdx(fullpath, mdPlugins);
        const entry = new Entry(ast, file, config);
        if (this.repoEditUrl) entry.setLink(this.repoEditUrl); // reduce modify entry plugin

        const reduce = Plugin.reduceFromPlugins(plugins);
        const modifiedEntry = reduce('modifyEntry', entry, config);

        const {
          settings
        } = modifiedEntry,
              rest = tslib.__rest(modifiedEntry, ["settings"]);

        return Object.assign(Object.assign({}, settings), rest);
      } catch (err) {
        logger.error(err);
        return null;
      }
    };

    const reduce = Plugin.reduceFromPlugins(plugins);
    const modifiedFiles = reduce('modifyFiles', files, config);
    const map = new Map();
    const entries = await Promise.all(modifiedFiles.map(createEntry).filter(Boolean));

    for (const entry of entries) {
      if (entry) {
        map.set(entry.filepath, entry);
      }
    }

    this.all = map;
    return mapToObj(map);
  }

}

const mapToArray = (map = []) => Object.entries(map).map(entry => entry && {
  key: entry[0],
  value: entry[1]
}).filter(Boolean);

const updateEntries = entries => async p => {
  const prev = _get('entries', p.getState());

  const map = await entries.get();

  if (map && !equal(prev, map)) {
    p.setState('entries', mapToArray(map));
  }
};

const state$1 = (entries, config, dev) => {
  const ignored = config.watchIgnore || WATCH_IGNORE;
  const watcher = chokidar.watch(getFilesToMatch(config), {
    ignored,
    persistent: true,
    cwd: getRootDir(config)
  });
  watcher.setMaxListeners(Infinity);
  return {
    id: 'entries',
    start: async params => {
      const update = updateEntries(entries);
      await update(params);

      if (dev) {
        watcher.on('add', async () => update(params));
        watcher.on('change', async () => update(params));
        watcher.on('unlink', async () => update(params));
        watcher.on('raw', async (event, path, details) => {
          if (details.event === 'moved' && details.type === 'directory') {
            await update(params);
          }
        });
      }
    },
    close: () => {
      watcher.close();
    }
  };
};

// Based on https://github.com/reactjs/react-docgen/issues/256#issuecomment-417352843
const {
  default: resolveHOC
} = require('react-docgen/dist/utils/resolveHOC');

const {
  default: resolveToModule
} = require('react-docgen/dist/utils/resolveToModule');

const {
  utils,
  resolver: reactDocgenResolver
} = require('react-docgen');

const createStyledComponentResolvers = () => {
  const moduleName = 'styled-components';

  const isStyledExpression = (tagPath, t) => t.CallExpression.check(tagPath.node) && tagPath.get('callee').node.name === 'styled' || t.MemberExpression.check(tagPath.node) && tagPath.get('object').node.name === 'styled';

  function isStyledComponent(def, t) {
    if (!t.TaggedTemplateExpression.check(def.node) || !isStyledExpression(def.get('tag'), t)) {
      return false;
    }

    const module = resolveToModule(def.get('tag'));
    return !!module && module === moduleName;
  }

  const exportTagged = (path, t) => {
    const definitions = utils.resolveExportDeclaration(path, t);
    const components = [];
    definitions.filter(Boolean).forEach(def => {
      let comp = def;

      if (isStyledComponent(comp, t)) {
        components.push(comp);
      } else {
        comp = utils.resolveToValue(resolveHOC(comp));
        if (isStyledComponent(comp, t)) components.push(comp);
      }
    });
    return components;
  };

  function findExportedStyledComponent(ast, recast) {
    const components = [];
    const t = recast.types.namedTypes;

    const visitor = path => {
      components.push(...exportTagged(path, t));
      return false;
    };

    recast.visit(ast, {
      visitFunctionDeclaration: false,
      visitFunctionExpression: false,
      visitClassDeclaration: false,
      visitClassExpression: false,
      visitIfStatement: false,
      visitWithStatement: false,
      visitSwitchStatement: false,
      visitCatchCause: false,
      visitWhileStatement: false,
      visitDoWhileStatement: false,
      visitForStatement: false,
      visitForInStatement: false,
      visitExportDefaultDeclaration: visitor
    });
    return components;
  }

  function findAllExportedStyledComponents(ast, recast) {
    const components = [];
    const t = recast.types.namedTypes;

    const visitor = path => {
      components.push(...exportTagged(path, t));
      return false;
    };

    recast.visit(ast, {
      visitFunctionDeclaration: false,
      visitFunctionExpression: false,
      visitClassDeclaration: false,
      visitClassExpression: false,
      visitIfStatement: false,
      visitWithStatement: false,
      visitSwitchStatement: false,
      visitCatchCause: false,
      visitWhileStatement: false,
      visitDoWhileStatement: false,
      visitForStatement: false,
      visitForInStatement: false,
      visitExportDeclaration: visitor,
      visitExportNamedDeclaration: visitor,
      visitExportDefaultDeclaration: visitor
    });
    return components;
  }

  function findAllStyledComponents(ast, recast) {
    const components = [];
    const t = recast.types.namedTypes;
    recast.visit(ast, {
      visitFunctionDeclaration: false,
      visitFunctionExpression: false,
      visitClassDeclaration: false,
      visitClassExpression: false,
      visitIfStatement: false,
      visitWithStatement: false,
      visitSwitchStatement: false,
      visitCatchCause: false,
      visitWhileStatement: false,
      visitDoWhileStatement: false,
      visitForStatement: false,
      visitForInStatement: false,

      visitTaggedTemplateExpression(path) {
        let comp = path;

        if (isStyledComponent(path, t)) {
          components.push(path);
        } else {
          comp = utils.resolveToValue(resolveHOC(path));
          if (isStyledComponent(comp, t)) components.push(comp);
        }

        return false;
      }

    });
    return components;
  }

  return {
    findAllStyledComponents,
    findAllExportedStyledComponents,
    findExportedStyledComponent
  };
};
const resolver = (ast, recast) => [...reactDocgenResolver.findAllExportedComponentDefinitions(ast, recast), ...createStyledComponentResolvers().findAllExportedStyledComponents(ast, recast)];

// vendored from react-docgen-external-proptypes-handler
// which is not well maintained
// https://github.com/doczjs/docz/issues/727
const path = require('path');

const fs = require('fs');

const recast = require('recast');
/**
 * Re-using few private methods of react-docgen to avoid code duplication
 */


const isRequiredPropType = require('react-docgen/dist/utils/isRequiredPropType').default;

const setPropDescription = require('react-docgen/dist/utils/setPropDescription').default;

let babylon;

try {
  const buildParser = require('react-docgen/dist/babelParser').default;

  babylon = buildParser();
} catch (e) {
  /** DOCZ: special error message as people often encounter errors here because they misconfigure or lack a babel plugin */
  console.error('Error while initializing babel in docz: ', e);
  /** DOCZ: disabling this require because it no longer exists */

  throw new Error(e); // babylon = require('react-docgen/dist/babylon').default
}

const utils$1 = require('react-docgen').utils;

const types = recast.types.namedTypes;
const HOP = Object.prototype.hasOwnProperty;
const createObject = Object.create;

function isPropTypesExpression(path) {
  const moduleName = utils$1.resolveToModule(path);

  if (moduleName) {
    return utils$1.isReactModuleName(moduleName) || moduleName === 'ReactPropTypes';
  }

  return false;
}
/**
 * Amends the documentation object with propTypes information.
 * @method amendPropTypes
 * @param  {Object} documentation  documentation object
 * @param  {Object} path  node path reference of propTypes property
 */


function amendPropTypes(documentation, path) {
  if (!types.ObjectExpression.check(path.node)) {
    return;
  }

  path.get('properties').each(propertyPath => {
    let propDescriptor, valuePath, type, resolvedValuePath;
    const nodeType = propertyPath.node.type;

    if (nodeType === types.Property.name) {
      propDescriptor = documentation.getPropDescriptor(utils$1.getPropertyName(propertyPath));
      valuePath = propertyPath.get('value');
      type = isPropTypesExpression(valuePath) ? utils$1.getPropType(valuePath) : {
        name: 'custom',
        raw: utils$1.printValue(valuePath)
      };

      if (type) {
        propDescriptor.type = type;
        propDescriptor.required = type.name !== 'custom' && isRequiredPropType(valuePath);
      }
    } else if (nodeType === types.SpreadProperty.name) {
      resolvedValuePath = utils$1.resolveToValue(propertyPath.get('argument')); // normal object literal

      if (resolvedValuePath.node.type === types.ObjectExpression.name) {
        amendPropTypes(documentation, resolvedValuePath);
      }
    }

    if (types.Property.check(propertyPath.node)) {
      setPropDescription(documentation, propertyPath);
    }
  });
}
/**
 * Accepts absolute path of a source file and returns the file source as string.
 * @method getSrc
 * @param  {String} filePath  File path of the component
 * @return {String} Source code of the given file if file exist else returns empty
 */


function getSrc(filePath) {
  let src;

  if (fs.existsSync(filePath)) {
    src = fs.readFileSync(filePath, 'utf-8');
  }

  return src;
}

function getAST(src) {
  return recast.parse(src, {
    source: 'module',
    esprima: babylon
  });
}
/**
 * Resolves propTypes source file path relative to current component,
 * which resolves only file extension of type .js or .jsx
 *
 * @method resolveFilePath
 * @param  {String} componentPath  Relative file path of the component
 * @param  {String} importedFilePath Relative file path of a dependent component
 * @return {String} Resolved file path if file exist else null
 */


function resolveFilePath(componentPath, importedFilePath) {
  const regEx = /\.(js|jsx)$/;
  let srcPath = path.resolve(path.dirname(componentPath), importedFilePath);

  if (regEx.exec(srcPath)) {
    return srcPath;
  } else {
    srcPath += fs.existsSync(`${srcPath}.js`) ? '.js' : '.jsx';
    return srcPath;
  }
}
/**
 * Method which returns actual values from the AST node of type specifiers.
 *
 * @method getSpecifiersOfNode
 */


function getSpecifiersOfNode(specifiers) {
  const specifier = [];
  specifiers.forEach(node => {
    specifier.push(node.local.name);
  });
  return specifier;
}
/**
 * Filters the list of identifier node values or node paths from a given AST.
 *
 * @method getIdentifiers
 * @param  {Object} ast Root AST node of a component
 * @return {Object} Which holds identifier relative file path as `key` and identifier name as `value`
 */


function getIdentifiers(ast) {
  const identifiers = createObject(null);
  recast.visit(ast, {
    visitVariableDeclarator(path) {
      const node = path.node;
      const nodeType = node.init.type;

      if (nodeType === types.Identifier.name) {
        if (identifiers[node.init.name]) {
          identifiers[node.init.name].push(node.init.name);
        } else {
          identifiers[node.init.name] = [node.init.name];
        }
      } else if (nodeType === types.Literal.name) {
        if (identifiers[node.id.name]) {
          identifiers[node.id.name].push(node.init.value);
        } else {
          identifiers[node.id.name] = [node.init.value];
        }
      } else if (nodeType === types.ArrayExpression.name) {
        if (identifiers[node.id.name]) {
          identifiers[node.id.name].push(node.init.elements);
        } else {
          identifiers[node.id.name] = node.init.elements;
        }
      } else if (nodeType === types.ObjectExpression.name) {
        if (identifiers[node.id.name]) {
          identifiers[node.id.name].push({
            path,
            value: node.init.properties
          });
        } else {
          identifiers[node.id.name] = {
            path,
            value: node.init.properties
          };
        }
      }

      this.traverse(path);
    }

  });
  return identifiers;
}
/**
 * Traverse through given AST and filters named and default export declarations.
 *
 * @method getExports
 * @param  {Object} ast Root AST node of a component
 * @return {Array} which holds list of named identifiers
 */


function getExports(ast) {
  const exports = [];
  recast.visit(ast, {
    visitExportNamedDeclaration(path) {
      const node = path.node;
      const specifiers = getSpecifiersOfNode(node.specifiers);
      const declarations = Object.keys(getIdentifiers(ast));
      exports.push(...new Set(specifiers.concat(declarations)));
      this.traverse(path);
    },

    visitExportDefaultDeclaration(path) {
      const node = path.node;

      if (node.declaration.type === types.Identifier.name) {
        exports.push(node.declaration.name);
      }
      /* Commenting it for now, this might needed for further enhancements.
      else if (nodeType === types.Literal.name) {
        varDeclarators.push(node.init.value);
      } else if (nodeType === types.ArrayExpression.name) {
        computedPropNodes[node.id.name] = node.init.elements;
      }*/


      this.traverse(path);
    }

  });
  return exports;
}
/**
 * Method to list all specifiers of es6 `import` of a given file(AST)
 *
 * @method getImports
 * @param  {Object} ast Root AST node of a component
 * @return {Object/Boolean} if Object: Holds import module name or file path as `key`
 *                          and identifier as `value`, else return false
 */


function getImports(ast) {
  const specifiers = createObject(null);
  recast.visit(ast, {
    visitImportDeclaration: path => {
      const name = path.node.source.value;
      const specifier = getSpecifiersOfNode(path.node.specifiers);

      if (!specifiers[name]) {
        specifiers[name] = specifier;
      } else {
        specifiers[name].push(...specifier);
      }

      return false;
    }
  });
  return specifiers;
}
/**
 * Method to resolve all dependent values(computed values, which are from external files).
 *
 * @method resolveImportedDependencies
 * @param  {Object} ast Root AST node of the component
 * @param  {Object} srcFilePath Absolute path of a dependent file
 * @return {Object} Holds export identifier as `key` and respective AST node path as value
 */


function resolveImportedDependencies(ast, srcFilePath) {
  const filteredItems = createObject(null);
  const importSpecifiers = getImports(ast);
  let identifiers, resolvedNodes;

  if (importSpecifiers && Object.keys(importSpecifiers).length) {
    resolvedNodes = resolveDependencies(importSpecifiers, srcFilePath);
  }

  const exportSpecifiers = getExports(ast);

  if (exportSpecifiers && exportSpecifiers.length) {
    identifiers = getIdentifiers(ast);
  }

  if (resolvedNodes) {
    Object.assign(identifiers, ...resolvedNodes);
  }

  for (const identifier in identifiers) {
    if (HOP.call(identifiers, identifier) && exportSpecifiers.indexOf(identifier) > -1) {
      filteredItems[identifier] = identifiers[identifier];
    }
  }

  return filteredItems;
}
/**
 * Method to resolve all the external dependencies of the component propTypes
 *
 * @method resolveDependencies
 * @param  {Array} filePaths List of files to resolve
 * @param  {String} componentPath Absolute path of the component in case `propTypes` are declared in a component file or
 *                  absolute path to the file where `propTypes` is declared.
 */


function resolveDependencies(filePaths, componentPath) {
  const importedNodes = [];

  for (const importedFilePath in filePaths) {
    if (HOP.call(filePaths, importedFilePath)) {
      const srcPath = resolveFilePath(componentPath, importedFilePath);

      if (!srcPath) {
        return;
      }

      const src = getSrc(srcPath);

      if (src) {
        const ast = getAST(src);
        importedNodes.push(resolveImportedDependencies(ast, srcPath));
      }
    }
  }

  return importedNodes;
}
/**
 * Method to filter computed props(which are declared out side of the component and used in propTypes object).
 *
 * @method filterSpecifiers
 * @param  {Object} specifiers  List which holds all the values of external dependencies
 * @return {Object} computedPropNames  List which holds all the computed values from `propTypes` property
 */


function filterSpecifiers(specifiers, computedPropNames) {
  const filteredSpecifiers = createObject(null);

  for (const cp in computedPropNames) {
    if (HOP.call(computedPropNames, cp)) {
      for (const sp in specifiers) {
        if (HOP.call(specifiers, sp) && specifiers[sp].indexOf(cp) > -1) {
          if (filteredSpecifiers[sp]) {
            filteredSpecifiers[sp].push(cp);
          } else {
            filteredSpecifiers[sp] = [cp];
          }
        }
      }
    }
  }

  return filteredSpecifiers;
}
/**
 * Method to parse and get computed nodes from a document object
 *
 * @method getComputedPropValuesFromDoc
 * @param  {Object} doc  react-docgen document object
 * @return {Object/Boolean} Object with computed property identifer as `key` and AST node path as `value`,
 *                          If document object have any computed properties else return false.
 */


function getComputedPropValuesFromDoc(doc) {
  let flag;
  const computedProps = createObject(null);
  const props = doc.toObject().props;
  flag = false;

  if (props) {
    for (const prop in props) {
      if (HOP.call(props, prop)) {
        const o = props[prop];

        if (o.type && o.type.name === 'enum' && o.type.computed) {
          flag = true;
          computedProps[o.type.value] = o;
        }
      }
    }

    return flag ? computedProps : false;
  } else {
    return false;
  }
}
/**
 * Method to update the document object computed values with actual values to generate doc for external dependent values.
 *
 * @method amendDocs
 * @param  {Object} doc  react-docgen document object
 * @param  {Object} path  AST node path of component `propTypes`
 * @param  {Object} props  list of actual values of computed properties
 */


function amendDocs(doc, path, props) {
  const propsToPatch = path.get('properties');

  function getComputedPropVal(name) {
    for (let i = 0; i < props.length; i++) {
      if (props[i][name]) {
        return props[i][name];
      }
    }
  }

  propsToPatch.each(propertyPath => {
    const propDescriptor = doc.getPropDescriptor(utils$1.getPropertyName(propertyPath));

    if (propDescriptor.type.name === 'enum' && propDescriptor.type.computed) {
      const oldVal = propDescriptor.type.value;
      const newVal = getComputedPropVal(propDescriptor.type.value) || oldVal;
      propDescriptor.type.value = newVal;
      propDescriptor.type.computed = false;
    }
  });
}
/**
 * Initializer of react-docgen custom handler.
 *
 * @method externalProptypesHandler
 * @param  {String} componentPath  Absolute path of the react component
 */


function externalProptypesHandler(componentPath) {
  return (doc, path) => {
    const root = path.scope.getGlobalScope().node;
    let propTypesPath, propTypesFilePath, propTypesAST;
    propTypesPath = utils$1.getMemberValuePath(path, 'propTypes');
    propTypesAST = root;
    propTypesFilePath = componentPath;

    if (!propTypesPath) {
      return;
    }

    const propsNameIdentifier = propTypesPath.node.name;
    propTypesPath = utils$1.resolveToValue(propTypesPath);

    if (!propTypesPath) {
      return;
    }

    if (!types.ObjectExpression.check(propTypesPath.node)) {
      //First resolve dependencies against component path
      propTypesFilePath = resolveFilePath(componentPath, propTypesPath.node.source.value);
      const propTypesSrc = getSrc(propTypesFilePath);
      propTypesAST = getAST(propTypesSrc);
      const importedPropTypes = getIdentifiers(propTypesAST)[propsNameIdentifier];

      if (!importedPropTypes) {
        return;
      }

      propTypesPath = utils$1.resolveToValue(importedPropTypes.path); //updating doc object with external props

      amendPropTypes(doc, propTypesPath);
    }

    const computedPropNames = getComputedPropValuesFromDoc(doc);

    if (!computedPropNames) {
      return;
    }

    const importSpecifiers = getImports(propTypesAST);

    if (!importSpecifiers) {
      return;
    }

    const filteredProps = filterSpecifiers(importSpecifiers, computedPropNames);

    if (!Object.keys(filteredProps).length) {
      return;
    }

    const resolvedImports = resolveDependencies(filteredProps, propTypesFilePath);

    if (resolvedImports && !resolvedImports.length) {
      return;
    }

    amendDocs(doc, propTypesPath, resolvedImports);
  };
}

const throwError = err => {
  logger__default.fatal(`Error parsing static types`);
  logger__default.error(err);
};

const jsParser = (files, config) => {
  const resolver$1 = config.docgenConfig.resolver || resolver;
  const root = getRootDir(config);

  const parseFilepathProps = filepath => {
    const fullpath = path$1.resolve(root, filepath);
    const handlers = reactDocgen.defaultHandlers.concat([externalProptypesHandler(filepath), actualNameHandler]);

    try {
      const code = fs$1.readFileSync(fullpath, {
        encoding: 'utf-8'
      });
      const props = reactDocgen.parse(code, resolver$1, handlers);
      return {
        key: unixPath(filepath),
        value: props
      };
    } catch (err) {
      if (config.debug) throwError(err);
      return null;
    }
  };

  return files.map(parseFilepathProps).filter(Boolean);
};

const digest = str => crypto.createHash('md5').update(str).digest('hex');

const cacheFilepath = path$1.join(cache, 'propsParser.json');
const readCacheFile = () => fs$1.readJSONSync(cacheFilepath, {
  throws: false
});

function checkFilesOnCache(files, config) {
  const cache = readCacheFile();
  const root = getRootDir(config);
  if (_isEmpty(cache)) return files;
  return files.filter(filepath => {
    const normalized = path$1.normalize(filepath);
    const fullpath = path$1.resolve(root, normalized);
    const hash = digest(fs$1.readFileSync(fullpath, 'utf-8'));

    const found = _get(normalized, cache);

    return found && hash !== found.hash;
  });
}

function writePropsOnCache(items, config) {
  const cache = readCacheFile();
  const root = getRootDir(config);
  const newCache = items.reduce((obj, {
    key: filepath,
    value
  }) => {
    const fullpath = path$1.resolve(root, path$1.normalize(filepath));
    const hash = digest(fs$1.readFileSync(fullpath, 'utf-8'));
    return Object.assign(Object.assign({}, obj), {
      [unixPath(filepath)]: {
        hash,
        props: value
      }
    });
  }, {});
  fs$1.outputJSONSync(cacheFilepath, Object.assign(Object.assign({}, cache), newCache));
}

function getPropsOnCache() {
  const cache = readCacheFile();

  if (_isEmpty(cache)) {
    logger.warn('No cache was found with your props definitions');
    logger.warn("We'll parse your components to get props from them");
    logger.warn('Depending on your components, this could take while...');
    return [];
  }

  return Object.entries(cache).map(([key, value]) => ({
    key: unixPath(key),
    value: _get('props', value)
  }));
}

const mergeWithCache = (cache, props) => {
  const keys = props.map(_prop('key'));
  return cache.filter(item => !_contains(item.key, keys)).concat(props);
};

const removeFromCache = filepath => {
  const cache = readCacheFile();
  fs$1.outputJSONSync(cacheFilepath, _omit(filepath, cache));
};

const getInitialFilesMap = () => {
  const cache = readCacheFile();
  if (_isEmpty(cache)) return new Map();
  const map = new Map();

  _entries(cache).forEach(([filepath]) => {
    const exist = fs$1.pathExistsSync(filepath);

    if (!exist) {
      removeFromCache(filepath);
    } else {
      map.set(filepath, {
        text: fs$1.readFileSync(filepath, 'utf-8'),
        version: 0
      });
    }
  });

  return map;
};

let languageService = null;
const filesMap = getInitialFilesMap();

function getTSConfigFile(tsconfigPath) {
  const basePath = path$1.dirname(tsconfigPath);
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath, {}, tsconfigPath);
}

function loadFiles(filesToLoad, config) {
  const root = getRootDir(config);
  filesToLoad.forEach(filepath => {
    const normalized = path$1.normalize(filepath);
    const fullpath = path$1.resolve(root, normalized);
    const found = filesMap.get(normalized);
    filesMap.set(normalized, {
      text: fs$1.readFileSync(fullpath, 'utf-8'),
      version: found ? found.version + 1 : 0
    });
  });
}

function createServiceHost(compilerOptions, files, config) {
  const root = getRootDir(config);
  return {
    getScriptFileNames: () => {
      return [...files.keys()];
    },
    getScriptVersion: fileName => {
      const file = files.get(fileName);
      return file && file.version.toString() || '';
    },
    getScriptSnapshot: fileName => {
      const fullpath = path$1.resolve(root, fileName);

      if (!fs$1.existsSync(fullpath)) {
        return undefined;
      }

      let file = files.get(fileName);

      if (file === undefined) {
        const text = fs$1.readFileSync(fullpath).toString();
        file = {
          version: 0,
          text
        };
        files.set(fileName, file);
      }

      return ts.ScriptSnapshot.fromString(file.text);
    },
    getCurrentDirectory: () => root,
    getCompilationSettings: () => compilerOptions,
    getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory
  };
}

const defaultPropFilter = prop => {
  return prop.parent == null || !prop.parent.fileName.includes('node_modules');
};

const parseFiles = (files, config, tsconfig) => {
  const opts = {
    propFilter(prop) {
      const customPropFilter = config.docgenConfig.propFilter;
      const propFilter = customPropFilter && _isFunction(customPropFilter) ? customPropFilter : defaultPropFilter;
      return Boolean(propFilter(prop));
    },

    componentNameResolver(exp, source) {
      const componentNameResolver = config.docgenConfig.resolver;
      const val = componentNameResolver && _isFunction(componentNameResolver) && componentNameResolver(exp, source);
      return val;
    }

  };
  loadFiles(files, config);
  const parser = reactDocgenTs.withCustomConfig(tsconfig, opts);

  const compilerOptions = _get('options', getTSConfigFile(tsconfig));

  const programProvider = () => {
    if (languageService) return languageService.getProgram();
    const servicesHost = createServiceHost(compilerOptions, filesMap, config);
    const documentRegistry = ts.createDocumentRegistry();
    languageService = ts.createLanguageService(servicesHost, documentRegistry);
    return languageService.getProgram();
  };

  return files.map(filepath => ({
    key: unixPath(filepath),
    value: parser.parseWithProgramProvider(filepath, programProvider)
  }));
};

const tsParser = (files, config, tsconfig) => {
  if (!tsconfig) return [];
  const filesToLoad = checkFilesOnCache(files, config);
  const propsOnCache = getPropsOnCache();
  if (!filesToLoad.length) return propsOnCache;
  const next = parseFiles(filesToLoad, config, tsconfig);
  writePropsOnCache(next, config);
  return mergeWithCache(propsOnCache, next);
};

const unixPath = src => {
  return path$1.normalize(src).replace(/\\/g, '/');
};
const docgen = async (files, config) => {
  const cwd = getRootDir(config);
  const tsconfig = await findUp('tsconfig.json', {
    cwd
  });
  const tsFiles = files.filter(file => file.match(/\.(tsx|ts)$/));
  const jsFiles = files.filter(file => file.match(/\.(js|jsx|mjs)$/));
  return config.typescript ? tsParser(tsFiles, config, tsconfig).concat(jsParser(jsFiles, config)) : jsParser(jsFiles, config);
};

const getPattern = config => {
  const {
    ignore,
    src: source,
    typescript: ts,
    docgenConfig: docgenConfig
  } = config;

  if (docgenConfig.searchPatterns) {
    return docgenConfig.searchPatterns;
  }

  const searchPath = docgenConfig.searchPath ? docgenConfig.searchPath : source;
  const root = getRootDir(config);
  const srcDir = path$1.resolve(root, searchPath);
  const src = path$1.relative(root, srcDir);
  const filesPattern = path$1.join(src, ts ? '**/*.{ts,tsx,js,jsx,mjs}' : '**/*.{js,jsx,mjs}');
  return ignore.map(entry => typeof entry === 'string' && `!**/${entry}`).filter(Boolean).concat([unixPath(filesPattern), '!**/node_modules', '!**/doczrc.js']);
};

const removeFilepath = (items, filepath) => items.filter(item => item.key !== filepath);

const initial = (config, pattern) => async p => {
  const {
    filterComponents
  } = config;
  const cwd = getRootDir(config);
  const files = await glob(pattern, {
    cwd,
    caseSensitiveMatch: false
  });
  const filtered = filterComponents ? filterComponents(files) : files;
  const metadata = await docgen(filtered, config);
  p.setState('props', metadata);
};

const change = (p, config) => async filepath => {
  const prev = _get('props', p.getState());

  const metadata = await docgen([filepath], config);
  const filtered = metadata.filter(_propEq('key', filepath));
  const next = removeFilepath(prev, filepath).concat(filtered);
  p.setState('props', next);
};

const remove = p => async filepath => {
  const prev = _get('props', p.getState());

  const next = removeFilepath(prev, filepath);
  p.setState('props', next);
};

const state$2 = (config, dev) => {
  const pattern = getPattern(config);
  const ignored = config.watchIgnore || WATCH_IGNORE;
  const cwd = getRootDir(config);
  const watcher = chokidar.watch(pattern, {
    cwd,
    ignored,
    persistent: true
  });
  watcher.setMaxListeners(Infinity);
  return {
    id: 'props',
    start: async params => {
      const addInitial = initial(config, pattern);
      await addInitial(params);

      if (dev) {
        watcher.on('change', change(params, config));
        watcher.on('unlink', remove(params));
      }
    },
    close: () => {
      watcher.close();
    }
  };
};



var index = /*#__PURE__*/Object.freeze({
  entries: state$1,
  config: state,
  props: state$2
});

class DataServer {
  constructor() {
    this.states = new Set();
    this.state = new Map();
    this.listeners = new Set();
  }

  register(states) {
    for (const state of states) this.states.add(state);

    return this;
  }

  async start() {
    const setState = (key, val) => this.setState(key, val);

    const getState = () => this.getState();

    await Promise.all(Array.from(this.states).map(async state => {
      if (!_isFunction(state.start)) return;
      return state.start({
        setState,
        getState
      });
    }));
  }

  close() {
    for (const state of this.states) {
      if (_isFunction(state.close)) {
        state.close();
      }
    }
  }

  onStateChange(listener) {
    this.listeners.add(listener);
    return () => this.listeners.clear();
  }

  getState() {
    return this.mapToObject(this.state);
  }

  setState(key, val) {
    const prev = _get(key, this.getState());

    const next = typeof val === 'function' ? val(prev) : val;
    this.state.set(key, next);
    this.writeDbFile();
    this.listeners.forEach(listener => {
      listener({
        type: `state.${key}`,
        payload: next
      });
    });
  }

  async writeDbFile() {
    fs$1.outputJSONSync(db, this.mapToObject(this.state), {
      spaces: 2
    });
  }

  mapToObject(map) {
    return Array.from(map.entries()).reduce((obj, [key, val]) => Object.assign(Object.assign({}, obj), {
      [key]: val
    }), {});
  }

}

exports.DataServer = DataServer;
exports.Entries = Entries;
exports.Entry = Entry;
exports.Plugin = Plugin;
exports.cli = cli;
exports.createPlugin = createPlugin;
exports.getBaseConfig = getBaseConfig;
exports.parseConfig = parseConfig;
exports.setArgs = setArgs;
exports.states = index;
