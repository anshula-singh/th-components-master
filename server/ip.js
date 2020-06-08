const { cidrSubnet, isV4Format, isV6Format } = require("ip");

// Internal: These are network addresses that correspond to the running machine
const localhost = ["::1", "0.0.0.0", "127.0.0.0/8"];

// Internal: Networks defined as "private," meaning they cannot be assigned
// as IPs on the internet. See https://tools.ietf.org/html/rfc1918
const priv = [
  "10.0.0.0/8",
  "172.16.0.0/12",
  "192.168.0.0/16",
  "fd00::/8",
  "10.252.162.0/24"
];

// Internal: See https://help.salesforce.com/articleView?id=000003652&type=1
const arin = [
  "13.108.0.0/14",
  "66.231.80.0/20",
  "68.232.192.0/20",
  "96.43.144.0/20",
  "128.17.0.0/16",
  "136.146.0.0/15",
  "198.245.80.0/20",
  "199.122.120.0/21",
  "204.14.232.0/21"
];

// Internal: See https://help.salesforce.com/articleView?id=000003652&type=1
const canada = ["52.60.248.0/22", "52.60.252.0/22"];

// Internal: See https://help.salesforce.com/articleView?id=000003652&type=1
const australia = ["13.210.4.0/22", "13.210.8.0/22"];

// Internal: See https://help.salesforce.com/articleView?id=000003652&type=1
const ripe = [
  "85.222.128.0/19",
  "160.8.0.0/16",
  "161.71.0.0/17",
  "163.76.128.0/17",
  "163.79.128.0/17",
  "185.79.140.0/22"
];

// Internal: See https://help.salesforce.com/articleView?id=000003652&type=1
const apnic = [
  "101.53.160.0/19",
  "104.161.128.0/17",
  "161.71.128.0/17",
  "182.50.76.0/22",
  "202.129.242.0/23"
];

// Internal: See https://help.salesforce.com/articleView?id=000003652&type=1
const communityCloud = [
  "13.109.128.0/19",
  "13.109.160.0/21",
  "101.53.176.0/20",
  "161.71.16.0/20",
  "161.71.40.0/22",
  "161.71.128.0/20",
  "182.50.76.0/22"
];

// Internal: An aggregation of all public Salesforce IP address ranges
const sfdcPublic = [
  ...arin,
  ...canada,
  ...australia,
  ...ripe,
  ...apnic,
  ...communityCloud
];

// Internal: All private Salesforce IP address ranges.
// I have not been able to locate a source of truth for this information.
// This set was sourced from both our IT department as well as Enterprise security,
// but without references.

const sfdcPrivate = [
  "61.120.150.128/27", // Tokyo 1
  "61.213.161.144/30", // Tokyo 2
  "62.17.146.140/30", // Dublin 1
  "62.17.146.144/28", // Dublin 2
  "62.17.146.160/27", // Dublin 3
  "142.176.79.170/29", // Halifax
  "202.95.77.64/27", // Singapore
  "204.14.236.0/24", // VPN East
  "204.14.239.0/24", // VPN West
  "221.133.209.128/27" // Sydney
];

// Internal -> Salesforce Edge accelerator
// Source: https://gus.lightning.force.com/lightning/r/ADM_Work__c/a07B0000006vc2nIAA/view
const edge = [
  "34.226.36.48/28", // us-east-1
  "13.56.32.176/28", // us-west-1
  "34.211.108.32/28", // us-west-2
  "34.253.190.64/28", // eu-west-1
  "54.233.205.0/28", // sa-east-1
  "13.113.196.48/28", // ap-northeast-1
  "13.228.64.80/28", // ap-southeast-1
  "35.158.127.48/28", // eu-central-1
  "13.124.145.0/28", // ap-northeast-2
  "13.126.23.64/28", // ap-south-1
  "13.58.135.64/28", // us-east-2
  "35.182.14.32/28", // ca-central-1
  "35.176.92.16/28", // eu-west-2
  "13.210.3.208/28" // ap-southeast-2
];

const thPrivateSpace = [
  "52.205.40.33",
  "52.205.41.207",
  "52.205.38.38",
  "52.6.127.225"
];

const ips = [
  ...localhost,
  ...priv,
  ...sfdcPublic,
  ...sfdcPrivate,
  ...edge,
  ...thPrivateSpace
];

const matches = ip => {
  let match;
  for (let i of ips) {
    match =
      isV4Format(i) || isV6Format(i) ? i === ip : cidrSubnet(i).contains(ip);
    if (match) return true;
  }
  return false;
};

const extract = req => {
  // Heroku puts IP as last item in header
  // https://devcenter.heroku.com/articles/http-routing
  let ip = req.headers["x-forwarded-for"];
  if (ip) {
    [ip] = ip.split(",").reverse();
  } else {
    ip = req.connection.remoteAddress;
  }
  return ip;
};

const middleware = (req, res, next) => {
  if (matches(extract(req))) {
    next();
  } else {
    res.writeHead(403);
    res.end();
  }
};

module.exports = { matches, extract, middleware };
