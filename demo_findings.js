/**
 * Demo JavaScript file for JS Attack Surface Analyzer
 * Contains examples of all finding types for testing
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

// ==================== FULL URLs (go to URLs tab) ====================
fetch('https://api.external-service.com/v1/data');
axios.get('https://analytics.thirdparty.io/track');
const cdnUrl = 'https://cdn.example.com/assets/main.js';
const externalApi = 'https://payment-gateway.com/api/charge';

// ==================== SECRETS ====================
// AWS Keys
const awsKey = 'AKIAIOSFODNN7EXAMPLE';
const awsSecret = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

// Google API Key
const googleApiKey = 'AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe';

// Stripe Keys
const stripePublishable = 'pk_live_51H7xYZAbCdEfGhIjKlMnOpQ';
const stripeSecret = 'sk_live_51H7xYZAbCdEfGhIjKlMnOpQrStUvWxYz';

// GitHub Token
const githubToken = 'ghp_wWPw5k4aXcaT4fNP0UcnZwN1Ma4M48AbCdEf';

// Slack Token
const slackToken = 'xoxb-123456789012-1234567890123-AbCdEfGhIjKlMnOpQrStUvWx';

// Private Key
const privateKey = '-----BEGIN RSA PRIVATE KEY-----';

// JWT Token
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// Bearer Token
const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.abc123';

// Basic Auth
const basicAuth = 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=';

// Password in URL
const dbConnection = 'mysql://admin:secretpassword123@db.internal.com:3306/mydb';

// Generic API Key
const api_key = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8';
const secret_key = 's9t8u7v6w5x4y3z2a1b0c9d8e7f6g5h4i3j2';

// ==================== PARAMETERS ====================
// URL parameters
const searchUrl = '/search?query=test&page=1&limit=20';
const filterUrl = '/products?category=electronics&sort=price&order=asc';

// Form fields in HTML strings
const formHtml = '<input name="username" type="text"><input name="password" type="password">';
const loginForm = '<input id="email_field" name="email"><input id="password_field" name="pwd">';

// JSON keys used as parameters
const requestBody = {
    userId: 123,
    accountId: 'abc-456',
    transactionAmount: 99.99,
    billingAddress: '123 Main St',
    creditCardNumber: '4111111111111111'
};

// ==================== EMAILS ====================
const adminEmail = 'admin@company.com';
const supportEmail = 'support@internal-domain.net';
const devEmail = 'developer@corp.example.org';
const salesContact = 'sales.team@business.io';

// ==================== SOEID USERNAMES (2 letters + 5 digits) ====================
const userId1 = 'sd38119';  // SOEID format
const userId2 = 'jm45678';  // SOEID format
const analyst = 'ab12345';  // SOEID format
const manager = 'xy98765';  // SOEID format
const auditor = 'pk54321';  // SOEID format

// Reference SOEIDs in comments or strings
console.log('User bp77234 logged in');
const assignedTo = 'Assigned to: tr90123';

// ==================== FILE PATHS ====================
const configFile = './config/settings.json';
const envFile = '../.env.production';
const secretsFile = '/etc/secrets/api-keys.yml';
const logFile = '/var/log/application.log';
const backupFile = 'database_backup.sql';
const includeScript = 'include("/admin/panel.php")';

// ==================== IP ADDRESSES ====================
const internalServer = '192.168.1.100';
const databaseHost = '10.0.0.50';
const productionServer = '172.16.0.25';
const localhostRef = '127.0.0.1';
const publicIp = '203.0.113.42';

// IPv6
const ipv6Server = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';

// ==================== SENSITIVE PATHS ====================
const adminPanel = '/admin/dashboard';
const debugRoute = '/debug/config';
const backupEndpoint = '/backup/database';
const stagingUrl = '/staging/api/test';
const internalApi = '/internal/metrics';

// API versioning
const v1Api = '/api/v1/legacy';
const v2Api = '/api/v2/current';
const graphql = '/graphql';

console.log('Demo file loaded - contains examples of all finding types');
