export const SMALLCHAT_ENABLED = /true/i.test(
  process.env?.NEXT_PUBLIC_SMALLCHAT_ENABLED || ""
);
