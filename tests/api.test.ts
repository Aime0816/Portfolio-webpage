import { test } from "node:test";
import assert from "node:assert/strict";
import chat, { localReply } from "../api/chat";
import contact from "../api/contact";
function response() {
  return {
    code: 200,
    body: null as any,
    setHeader() {},
    status(n: number) {
      this.code = n;
      return this;
    },
    json(d: any) {
      this.body = d;
      return this;
    },
  };
}
test("missing credentials returns relevant facts, not a fake AI success", async () => {
  delete process.env.GEMINI_API_KEY;
  const res = response();
  await chat(
    { method: "POST", body: { message: "Tell me about The Quiz" } } as any,
    res as any,
  );
  assert.equal(res.body.mode, "portfolio-facts");
  assert.match(res.body.reply, /The Quiz/);
});
test("invalid and oversized assistant input is rejected", async () => {
  for (const message of ["", null, "x".repeat(1001)]) {
    const res = response();
    await chat({ method: "POST", body: { message } } as any, res as any);
    assert.equal(res.code, 400);
  }
});
test("contact endpoint never claims to deliver email", () => {
  const res = response();
  contact({ method: "POST" } as any, res as any);
  assert.equal(res.code, 503);
  assert.equal(res.body.success, false);
});
test("unsupported method is rejected", async () => {
  const res = response();
  await chat({ method: "GET" } as any, res as any);
  assert.equal(res.code, 405);
});
test("project facts exclude unsupported impact claims", () => {
  assert.match(localReply("CivicLens AI"), /Prototype/);
  assert.doesNotMatch(localReply("skills"), /\d+%/);
});
