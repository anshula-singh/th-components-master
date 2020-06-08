const ipRestrict = require("../ip");

const ips = [
  "127.0.0.1",
  "::1",
  "10.0.0.1",
  "192.168.1.17",
  "24.4.14.84",
  "108.12.226.51"
];

describe("matches", () => {
  it("works", () => {
    expect(ips.map(ipRestrict.matches)).toEqual([
      true,
      true,
      true,
      true,
      false,
      false
    ]);
  });
});

describe("extract", () => {
  it("uses x-forward-for", () => {
    let req = {
      headers: { "x-forwarded-for": "123,456" }
    };
    expect(ipRestrict.extract(req)).toEqual("456");
  });
  it("falls back to connection", () => {
    let req = {
      headers: {},
      connection: {
        remoteAddress: "123"
      }
    };
    expect(ipRestrict.extract(req)).toEqual("123");
  });
});

describe("middleware", () => {
  it("allows valid ips", () => {
    let req = {
      headers: { "x-forwarded-for": "127.0.0.1" }
    };
    let next = jest.fn();
    let res = {
      writeHead: jest.fn(),
      end: jest.fn()
    };
    ipRestrict.middleware(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(res.end).not.toHaveBeenCalled();
  });
  it("rejects invalid ips", () => {
    let req = {
      headers: { "x-forwarded-for": "108.12.226.51" }
    };
    let next = jest.fn();
    let res = {
      writeHead: jest.fn(),
      end: jest.fn()
    };
    ipRestrict.middleware(req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.writeHead).toHaveBeenCalledWith(403);
    expect(res.end).toHaveBeenCalled();
  });
});
