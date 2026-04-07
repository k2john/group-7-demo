declare module "nodemailer" {
  export type MailOptions = Record<string, unknown>;

  export interface Transporter {
    // Keep this minimal; app code can narrow/extend as needed.
    sendMail(mailOptions: MailOptions): Promise<unknown>;
  }

  export interface TransportOptions {
    service?: string;
    auth?: {
      user: string;
      pass: string;
    };
    [key: string]: unknown;
  }

  export function createTransport(options: TransportOptions): Transporter;

  const nodemailer: {
    createTransport: typeof createTransport;
  };

  export default nodemailer;
}
