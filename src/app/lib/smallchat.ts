const NEXT_PUBLIC_SMALLCHAT_ENABLED =
  process.env.NEXT_PUBLIC_SMALLCHAT_ENABLED || "false";

export const isChatEnabled = (value = NEXT_PUBLIC_SMALLCHAT_ENABLED) =>
  /true/i.test(value);

export const SMALLCHAT_ENABLED = isChatEnabled();
