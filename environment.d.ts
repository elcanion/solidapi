declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODEMAILER_USER: string;
            NODEMAILER_PASS: string;
        }
    }
}

export {};