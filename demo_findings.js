/**
 * Demo JavaScript file for JS Attack Surface Analyzer
 * Contains examples of ALL finding types including jxscout-inspired patterns
 */

// ==================== ENDPOINTS (relative paths) ====================
fetch('/api/v1/users', { method: 'GET' });
fetch('/api/v1/users/123', { method: 'PUT' });
axios.post('/api/auth/login', credentials);
axios.delete('/api/admin/users/456');
$.ajax({ url: '/api/v2/products' });
$.get('/api/orders/history');

// XMLHttpRequest  
var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/payment/process');

// WebSocket
const ws = new WebSocket('wss://realtime.example.com/socket');

// Config objects
const config = {
  apiUrl: '/api/v3/settings',
  endpoint: '/internal/health-check',
  baseUrl: '/services/data'
};

// ==================== DYNAMIC URL PATTERNS ====================
// .concat() pattern with POST method
const cookieUrl = "".concat(this.serviceBaseUrl, "/eppublic/cookie/batch");
fetch(cookieUrl, {
  method: "POST",
  headers: { "Content-Type": "text/plain" },
  body: JSON.stringify(data)
});

// Template literal URL with PUT method
const updateUrl = `${this.apiHost}/api/users/${userId}`;
axios({
  url: updateUrl,
  method: "PUT",
  data: userData
});

// Plus concatenation with DELETE method
const deleteUrl = this.baseUrl + "/api/resources/delete";
fetch(deleteUrl, { method: "DELETE" });

// Another .concat example (GET default)
const fetchUrl = "".concat(config.apiUrl, "/status/health");

// ==================== FULL URLs (go to URLs tab) ====================
fetch('https://api.external-service.com/v1/data');
axios.get('https://analytics.thirdparty.io/track');
const cdnUrl = 'https://cdn.example.com/assets/main.js';
const externalApi = 'https://payment-gateway.com/api/charge';

// ==================== SECRETS ====================
const awsKey = 'AKIAIOSFODNN7EXAMPLE';
const awsSecret = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';
const googleApiKey = 'AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe';
const stripePublishable = 'pk_live_51H7xYZAbCdEfGhIjKlMnOpQ';
const stripeSecret = 'sk_live_51H7xYZAbCdEfGhIjKlMnOpQrStUvWxYz';
const githubToken = 'ghp_wWPw5k4aXcaT4fNP0UcnZwN1Ma4M48AbCdEf';
const slackToken = 'xoxb-123456789012-1234567890123-AbCdEfGhIjKlMnOpQrStUvWx';
const privateKey = '-----BEGIN RSA PRIVATE KEY-----';
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.SflKxwRJSMeKKF2QT4fwpMeJ';
const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.abc123';
const basicAuth = 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=';
const dbConnection = 'mysql://admin:secretpassword123@db.internal.com:3306/mydb';

// ==================== PARAMETERS ====================
const searchUrl = '/search?query=test&page=1&limit=20';
const filterUrl = '/products?category=electronics&sort=price&order=asc';
const formHtml = '<input name="username" type="text"><input name="password" type="password">';

// ==================== EMAILS & SOEID ====================
const adminEmail = 'admin@company.com';
const supportEmail = 'support@internal-domain.net';
const userId1 = 'sd38119';  // SOEID format (2 letters + 5 digits)
const userId2 = 'jm45678';
const analyst = 'ab12345';

// ==================== FILE PATHS ====================
const configFile = './config/settings.json';
const envFile = '../.env.production';
const secretsFile = '/etc/secrets/api-keys.yml';
const backupFile = 'database_backup.sql';

// ==================== IP ADDRESSES ====================
const internalServer = '192.168.1.100';
const databaseHost = '10.0.0.50';
const productionServer = '172.16.0.25';
const localhostRef = '127.0.0.1';
const publicIp = '203.0.113.42';

// ==================== GRAPHQL (jxscout) ====================
const userQuery = `
  query GetUserById($id: ID!) {
    user(id: $id) {
      name
      email
      roles
    }
  }
`;

const createUserMutation = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

const subscriptionExample = `
  subscription OnMessageReceived {
    messageReceived {
      content
      sender
    }
  }
`;

const graphqlEndpoint = '/api/graphql';
const graphqlServer = 'https://api.example.com/graphql/v1';

// ==================== DOM SINKS (XSS-prone) - jxscout ====================
// eval and Function
eval("console.log('dangerous')");
const fn = new Function('return 1 + 1');
setTimeout("alert('xss')", 1000);
setInterval("runCode()", 5000);

// innerHTML vulnerabilities
document.getElementById('target').innerHTML = userInput;
element.outerHTML = '<div>' + data + '</div>';
document.write('<script>malicious</script>');
document.writeln('<p>' + input + '</p>');
container.insertAdjacentHTML('beforeend', htmlContent);

// React dangerous pattern
const reactElement = <div dangerouslySetInnerHTML={{ __html: userContent }} />;

// jQuery vulnerabilities
$('#container').html(userData);
$('.item').append(newContent);

// ==================== POSTMESSAGE & EVENTS (jxscout) ====================
// postMessage (cross-origin communication)
window.parent.postMessage({ action: 'login' }, '*');
targetWindow.postMessage(sensitiveData, 'https://trusted.com');

// onmessage listener
window.onmessage = function (event) {
  if (event.origin !== 'https://trusted.com') return;
  handleData(event.data);
};

// addEventListener for message
window.addEventListener('message', function (e) {
  processMessage(e.data);
});

// hashchange (DOM-based XSS source)
window.onhashchange = function () {
  loadContent(location.hash);
};

window.addEventListener('hashchange', function (e) {
  updateView(location.hash);
});

// Other event listeners
document.addEventListener('click', handleClick);
element.addEventListener('submit', validateForm);

// ==================== STORAGE ACCESS (jxscout) ====================
// localStorage
const token = localStorage.getItem('authToken');
localStorage.setItem('userPrefs', JSON.stringify(prefs));
const user = localStorage['currentUser'];

// sessionStorage
const session = sessionStorage.getItem('sessionId');
sessionStorage.setItem('tempData', value);
const temp = sessionStorage['formDraft'];

// Cookies
const cookies = document.cookie;
document.cookie = 'auth=token123; secure; httponly';

// ==================== LOCATION MANIPULATION (jxscout) ====================
// Reading location properties (XSS sources)
const currentUrl = location.href;
const queryString = location.search;
const fragment = location.hash;
const path = location.pathname;

// Changing location (redirects)
location.assign('https://redirect.com');
location.replace('/new-page');
window.location = userProvidedUrl;

// ==================== WINDOW OPERATIONS (jxscout) ====================
// window.open (popup)
window.open('https://example.com/popup', '_blank');

// window.name (covert channel)
const hiddenData = window.name;
window.name = sensitiveInfo;

// document.domain (relaxing same-origin)
document.domain = 'example.com';

// ==================== WEBPACK/VITE CHUNKS (jxscout) ====================
// Webpack chunk loader
webpackChunkapp_name.push([[123], { "./src/module.js": (e, t, r) => { } }]);
const chunk = __webpack_require__.e("chunk-name");

// Dynamic imports (lazy loading)
import('./components/LazyComponent');
import(`./modules/${moduleName}`);

// React lazy
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

// Chunk file references
const chunkUrl = 'assets/chunk.12345.js';
const bundleFile = 'main.bundle.js';

console.log('Demo file loaded - contains examples of ALL finding types including jxscout patterns');
