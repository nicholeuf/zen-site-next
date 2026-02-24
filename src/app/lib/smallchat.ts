export const isChatEnabled = (
  value = process.env.NEXT_PUBLIC_SMALLCHAT_ENABLED
) => /true/i.test(value || "false");

export const SMALLCHAT_ENABLED = isChatEnabled();
