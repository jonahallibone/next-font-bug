import { type CreateClientConfig } from "@/_generated/client/client.gen";
import { isClerkClientAvailable } from "@/hooks/use-fetch";
import { captureException } from "@sentry/nextjs";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  auth: async () => {
    try {
      await isClerkClientAvailable();
      const clerkInstance = window.Clerk || globalThis.Clerk;

      const accessTokenResp = await clerkInstance?.session?.getToken({
        template: "JWT_Email_Appender",
      });

      if (accessTokenResp) {
        return accessTokenResp;
      }
    } catch (error) {
      captureException(error);
    }
  },
});
